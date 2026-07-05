# 通用接口

## `version`
暴露当前 LateLib 版本。

- 类型
  ```ts
  const version: string;
  ```

- 示例
  ```js
  LateLib.version; // '0.1.0'
  ```

## `setLocalStorage()`
设置本地存储。

- 类型
  ```ts
  function setLocalStorage(key: string, value: any, stringify?: Function): void;
  ```

- 详细信息
  ::: tip
  若未提供 `stringify`，将默认使用 `JSON.stringify`。
  :::

  这实际上等价于 `localStorage.setItem(key, stringify(value))`，但它可读性更好，也更方便。

- 示例
  ```js
  LateLib.setLocalStorage('just-a-key', 'awa');
  console.log(LateLib.getLocalStorage('just-a-key')); // 'awa'
  ```
