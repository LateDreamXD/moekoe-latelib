# 快速开始

要将你的萌音插件接入 LateLib，只需要以下几个步骤。

## 编写代码
在你的 content.js 中加入对 LateLib 的检测。

以下是一个简单的示例：
```js {3-7} [content.js]
(function() {
  function init() {
    if(!window.LateLib) { // [!code focus:5]
      alert('该插件依赖 LateLib，请先安装 LateLib！');
    } else {
      // 你的代码...
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, true);
  else init();
})()
```

## 配置类型定义（可选）
参考 [TypeScript 类型定义](/definitions)
