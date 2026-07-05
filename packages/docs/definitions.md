# TypeScript 类型定义
LateLib 提供了完整的 TypeScript 类型定义以便于开发。

只需要两个步骤就能开启代码编辑器的基于类型定义的自动补全。

## 安装
在你的项目中运行以下命令获取类型定义（不要带上 `$` 符号）：
::: code-group

```sh [npm]
$ npm install -D @latedream/moekoe-latelib-types
```

```sh [yarn]
$ yarn add -D @latedream/moekoe-latelib-types
```

```sh [pnpm]
$ pnpm add -D @latedream/moekoe-latelib-types
```

```sh [bun]
$ bun add -D @latedream/moekoe-latelib-types
```

:::

## 配置
任选以下一种方案完成配置即可开启自动补全。

::: code-group

```ts [env.d.ts (方案一)]
/// <reference types="@latedream/moekoe-latelib-types" />
```

```ts [env.d.ts (方案二)]
import '@latedream/moekoe-latelib-types'; // [!code ++]
```

```json [tsconfig.json]
{
  "compilerOptions": {
    // ...,
    "types": ["@latedream/moekoe-latelib-types"] // [!code ++]
  }
}
```

:::
