# 接口
LateLib 为插件提供了许多开箱即用的接口。

```ts [LateLib.d.ts]
interface LateLib {
	getCurrentSong: () => MoeKoeCurrentSong | null;
	getLocalStorage: (key: string, parse?: Function) => any;
	getMoeData: () => MoeData | null;
	getMoeKoeVersion: () => version | null;
	usePlayer: () => {
		controls: {
			next: () => void,
			playOrPause: () => void,
			prev: () => void
		},
		playback_mode: number | null,
		progress: number | null,
		speed: number | null,
		volume: number | null
	};
	getSettings: () => MoeKoeSettings | null;
	getUserAgent: () => string;
	getVueApp: () => App<HTMLDivElement>;
	setLocalStorage: (key: string, value: any, stringify?: Function) => void;
	useMoeKoeTheme: () => {
		applyColorTheme: (colorTheme: MoeKoeColorTheme) => void,
		colorTheme: MoeKoeColorTheme,
		currentTheme: MoeKoeTheme,
		setTheme: (theme: MoeKoeTheme) => void,
		theme: MoeKoeTheme
	};
	useVue: () => Module<vue>;
	useVueRouter: () => {
		route: RouteLocationNormalizedLoadedGeneric,
		router: RouterClassic
	};
	version: string;
}
```
