const assert = require('node:assert/strict');
const fs = require('node:fs');
const test = require('node:test');
const vm = require('node:vm');

function loadPreview() {
  let clickHandler;
  const messages = [];
  const context = {
    marked: {
      Renderer: function() {},
      use() {},
      setOptions() {},
    },
    hljs: {},
    TabManager: {
      getActiveTab() {
        return { path: 'D:/Software/CLIProxyAPI/README.md' };
      },
    },
    sendToRust(command, data) {
      messages.push({ command, data });
    },
    document: {
      getElementById(id) {
        if (id === 'preview-container') {
          return {
            addEventListener(type, handler) {
              if (type === 'click') clickHandler = handler;
            },
          };
        }
        return { querySelectorAll() { return []; } };
      },
      querySelectorAll() { return []; },
    },
    window: {},
    navigator: {},
    setTimeout() {},
    showError(message) {
      messages.push({ command: 'error', data: { message } });
    },
  };

  const source = fs.readFileSync(__dirname + '/preview.js', 'utf8');
  vm.runInNewContext(source, context);
  return { clickHandler, messages };
}

test('点击相对 Markdown 链接时请求 Rust 打开目标文件', () => {
  const { clickHandler, messages } = loadPreview();
  const anchor = { getAttribute: () => 'README_CN.md' };
  let prevented = false;

  clickHandler({
    target: {
      closest(selector) {
        return selector === 'a' ? anchor : null;
      },
    },
    preventDefault() { prevented = true; },
  });

  assert.equal(prevented, true);
  assert.equal(messages.length, 1);
  assert.equal(messages[0].command, 'open_file');
  assert.equal(messages[0].data.path, 'D:/Software/CLIProxyAPI/README_CN.md');
});

test('网络链接与页内锚点保持浏览器默认行为', () => {
  ['https://example.com', '#usage'].forEach((href) => {
    const { clickHandler, messages } = loadPreview();
    const anchor = { getAttribute: () => href };
    let prevented = false;

    clickHandler({
      target: { closest: () => anchor },
      preventDefault() { prevented = true; },
    });

    assert.equal(prevented, false);
    assert.deepEqual(messages, []);
  });
});

test('点击 Windows 绝对路径时直接打开该文件', () => {
  ['D:/Docs/guide.md', 'D:\\Docs\\guide.md'].forEach((href) => {
    const { clickHandler, messages } = loadPreview();

    clickHandler({
      target: { closest: () => ({ getAttribute: () => href }) },
      preventDefault() {},
    });

    assert.equal(messages.length, 1);
    assert.equal(messages[0].command, 'open_file');
    assert.equal(messages[0].data.path, 'D:/Docs/guide.md');
  });
});

test('解析路径前先移除查询和锚点', () => {
  const { clickHandler, messages } = loadPreview();

  clickHandler({
    target: { closest: () => ({ getAttribute: () => 'design%23draft%3Fv2.md#section' }) },
    preventDefault() {},
  });

  assert.equal(messages[0].data.path, 'D:/Software/CLIProxyAPI/design#draft?v2.md');
});

test('非法 URL 编码不会触发 WebView 导航或抛出异常', () => {
  const { clickHandler, messages } = loadPreview();
  let prevented = false;

  assert.doesNotThrow(() => clickHandler({
    target: { closest: () => ({ getAttribute: () => 'bad%ZZ.md' }) },
    preventDefault() { prevented = true; },
  }));

  assert.equal(prevented, true);
  assert.equal(messages[0].command, 'error');
  assert.equal(messages[0].data.message, '链接地址格式无效');
});
