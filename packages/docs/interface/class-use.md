# 使用类接口
使用类接口一般以 `use` 开头，不只返回静态值，同时也会返回可调用函数。

## `useMoeKoeTheme()`
使用萌音主题。

- 类型
  ```ts
  function useMoeKoeTheme(): {
	/** 设置的主题色 */
	colorTheme: MoeKoeColorTheme;
	/** 当前主题 */
	currentTheme: MoeKoeTheme;
	/** 应用主题色 */
	applyColorTheme: (colorTheme: MoeKoeColorTheme) => void;
	/** 设置主题 */
	setTheme: (theme: MoeKoeTheme) => void;
	/** 设置的主题 */
	theme: MoeKoeTheme
  }

  type MoeKoeColorTheme = 'pink' | 'blue' | 'green' | 'orange';
  type MoeKoeTheme = 'auto' | 'light' | 'dark';
  ```

- 详细信息
  ::: tip
  当前主题与设置的主题实际互相独立。

  `applyColorTheme()` 不会影响设置的主题色。
  :::

## `usePlayer()`
使用播放器。

- 类型
  ```ts
  function usePlayer(): {
		/** 循环模式 */
		playback_mode,
		/** 当前进度 */
		progress,
		/** 播放速度 */
		speed,
		/** 音量 */
		volume,

		/** 控制播放器 */
		controls: {
			/** 播放或暂停 */
			playOrPause: () => void,
			/** 上一首 */
			prev: () => void,
			/** 下一首 */
			next: () => void
		}
	}
  ```

## `useVue()`
使用 vue。

- 类型
  ```ts
  function useVue(): Module<vue>;
  ```

- 详细信息

  参考 [Vue.js 官方文档](https://cn.vuejs.org)。

- 示例
  ```js
  const { createApp } = LateLib.useVue();
  createApp({ template: `<div>Hello, world!</div>` }).mount('.hello');
  ```

## `useVueRouter()`
使用 vue 路由和路由器。

- 类型
  ```ts
  function useVueRouter(): {
    route: RouteLocationNormalizedLoadedGeneric;
    router: RouterClassic;
  }
  ```

- 详细信息

  参考：
    - [接口：RouteLocationNormalizedLoaded | Vue Router](https://router.vuejs.org/zh/api/interfaces/RouteLocationNormalizedLoaded.html)
    - [接口：Router | Vue Router](https://router.vuejs.org/zh/api/interfaces/Router.html)
