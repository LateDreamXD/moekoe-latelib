# 获取类接口
获取类接口一般指以 `get` 开头，并返回静态结果的函数。

## `getCurrentSong()`
获取当前歌曲。

- 类型
  ```ts
  function getCurrentSong(): MoeKoeCurrentSong | null;

  interface MoeKoeCurrentSong {
	author: string,
	hash: string,
	id: number,
	img: string,
	loudnessNormalization: {
		volume: number,
		volumeGain: number,
		volumePeak: number
	},
	name: string,
	playHash: string,
	qualityLabel: MoeKoeSongQualityLabel,
	qualityOptions: MoeKoeSongQualityOptions,
	resolvedQuality: MoeKoeSongQuality,
	timeLength: number,
	url: string
  }
  ```

- 示例
  ```js
  LateLib.getCurrentSong(); // {id: 0, hash: 'xxx', playHash: 'xxx', ...}
  ```

## `getLocalStorage()`
获取本地存储。

- 类型
  ```ts
  function getLocalStorage(key: string, parse?: Function): any;
  ```

- 详细信息

  ::: tip
  若 `parse` 未被提供，则默认会使用 `JSON.parse`。
  :::

  这实际上等价于 `parse(String(localStorage.getItem(key)))`，但它可读性更好，也更方便。

- 示例
  ```js
  LateLib.getLocalStorage('just-a-key'); // null
  ```

## `getMoeData()`
获取萌音认证信息。

- 类型
  ```ts
  function getMoeData(): MoeData | null;

  interface MoeData {
	Config: null | Record<string, any>;
	Device: null | { dfid: string };
	UserInfo: null | {
		nickname: string;
		pic: string;
		status: number;
		token: string;
		userid: number;
	}
  }
  ```

- 示例
  ```js
  LateLib.getMoeData(); // {UserInfo: {...}, Config: null, Device: {...}}
  ```

## `getMoeKoeVersion()`
获取萌音版本。

- 类型
  ```ts
  function getMoeKoeVersion(): string;
  ```

- 示例
  ```js
  LateLib.getMoeKoeVersion(); // 1.6.7
  ```

## `getSettings()`
获取萌音设置。

- 类型
  ```ts
  function getSettings(): MoeKoeSettings | null;

  type MoeKoeBoolean = 'on' | 'off';
  type MoeKoeColorTheme = 'pink' | 'blue' | 'green' | 'orange';
  type MoeKoeTheme = 'auto' | 'light' | 'dark';
  type MoeKoeSongQuality = '128' | '320' | 'flac' | 'high' | 'viper_atmos' | 'viper_clear' | 'viper_tape';
  type MoeKoeSearchMode = 'quick' | 'recommend';
  type MoeKoeNavigationMode = 'top' | 'side';
  type MoeKoePlayerBarLayout = 'full' | 'content';
  type MoeKoeStartupPage = 'Index' | 'Discover' | 'Library';
  type MoeKoeDataSource = 'concept' | 'official';
  type MoeKoeNetworkMode = 'mainnet' | 'testnet' | 'devnet';
  type MoeKoeApiBaseUrlMode = 'default' | 'custom';
  interface MoeKoeShortcuts {
	mainWindow: string,
	quitApp: string,
	prevTrack: string,
	nextTrack: string,
	playPause: string,
	volumeUp: string,
	volumeDown: string,
	mute: string,
	like: string,
	mode: string,
	toggleDesktopLyrics: string
  }
  interface MoeKoeSettings {
	language: string,
	themeColor: MoeKoeColorTheme,
	theme: MoeKoeTheme,
	searchMode: MoeKoeSearchMode,
	navigationMode: MoeKoeNavigationMode,
	playerBarLayout: MoeKoePlayerBarLayout,
	nativeTitleBar: MoeKoeBoolean,
	font: string,
	startupPage: MoeKoeStartupPage,
	customTrayMenu: MoeKoeBoolean,
	quality: MoeKoeSongQuality,
	loudnessNormalization: MoeKoeBoolean,
	pauseOnAudioOutputChange: MoeKoeBoolean,
	audioOutputDevice: string,
	greetings: MoeKoeBoolean,
	dataSource: MoeKoeDataSource,
	desktopLyrics: MoeKoeBoolean,
	desktopLyricsFont: string,
	statusBarLyrics: MoeKoeBoolean,
	lyricsTranslation: MoeKoeBoolean,
	gpuAcceleration: MoeKoeBoolean,
	highDpi: MoeKoeBoolean,
	dpiScale: string,
	minimizeToTray: MoeKoeBoolean,
	autoStart: MoeKoeBoolean,
	/** @see @link https://music.moekoe.cn/guide/network-modes.html */
	networkMode: MoeKoeNetworkMode,
	startMinimized: MoeKoeBoolean,
	preventAppSuspension: MoeKoeBoolean,
	apiMode: MoeKoeBoolean,
	apiBaseUrlMode: MoeKoeApiBaseUrlMode,
	apiBaseUrl: string,
	touchBar: MoeKoeBoolean,
	proxy: MoeKoeBoolean,
	proxyUrl: string,
	shortcuts: MoeKoeShortcuts
  }
  ```

- 示例
  ```js
  LateLib.getSettings(); // {language: '', themeColor: 'pink', theme: 'light', ...}
  ```

## `getUserAgent()`
获取萌音用户代理。

- 类型
  ```ts
  function getUserAgent(): string;
  ```

- 详细信息

  这等价于 `navigator.userAgent`。

- 示例
  ```js
  LateLib.getUserAgent(); // 'Mozilla/5.0 ...'
  ```

## `getVueApp()`
获取已挂载的 vue app 实例。

- 类型
  ```ts
  function getVueApp(): App<HTMLDivElement>;
  ```

- 详细信息

  参考[应用实例 API | Vue.js](https://cn.vuejs.org/api/application.html)

- 示例
  ```js
  LateLib.getVueApp(); // {_uid: 0, _component: {...}, _props: null, ...}
  ```
