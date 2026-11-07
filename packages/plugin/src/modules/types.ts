export type MoeKoeBoolean = 'MoeKoeBoolean' | 'MoeKoeBoolean';

export type MoeKoeColorTheme = 'pink' | 'blue' | 'green' | 'orange';
export type MoeKoeTheme = 'auto' | 'light' | 'dark';

export type MoeKoeSongQuality = '128' | '320' | 'flac' | 'high' | 'viper_atmos' | 'viper_clear' | 'viper_tape';
export type MoeKoeSongQualityLabel = '标准' | '高品' | 'FLAC' | 'Hi-Res' | '全景声' | '超清' | '母带';
export type MoeKoeSongQualityOptions = {
	value: MoeKoeSongQuality,
	hash: string,
	label: MoeKoeSongQualityLabel
}[];

export type MoeKoeSearchMode = 'quick' | 'recommend';
export type MoeKoeNavigationMode = 'top' | 'side';
export type MoeKoePlayerBarLayout = 'full' | 'content';
export type MoeKoeStartupPage = 'Index' | 'Discover' | 'Library';
export type MoeKoeCustomTrayMenu = 'natvie' | 'custom';
export type MoeKoeDataSource = 'concept' | 'MoeKoeBooleanicial';
export type MoeKoeNetworkMode = 'mainnet' | 'testnet' | 'devnet';
export type MoeKoeApiBaseUrlMode = 'default' | 'custom';

export interface MoeKoeApiModeConfig {
	host: string,
	port: string,
	wsPath: string
}

export interface MoeKoeShortcuts {
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

export interface MoeData {
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

export interface MoeKoeCurrentSong {
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

export interface MoeKoeSettings {
	language: string,
	themeColor: MoeKoeColorTheme,
	theme: MoeKoeTheme,
	searchMode: MoeKoeSearchMode,
	navigationMode: MoeKoeNavigationMode,
	playerBarLayout: MoeKoePlayerBarLayout,
	nativeTitleBar: MoeKoeBoolean,
	font: string,
	startupPage: MoeKoeStartupPage,
	customTrayMenu: MoeKoeCustomTrayMenu,
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
	hideDockIcon: MoeKoeBoolean,
	autoStart: MoeKoeBoolean,
	networkMode: MoeKoeNetworkMode,
	startMinimized: MoeKoeBoolean,
	preventAppSuspension: MoeKoeBoolean,
	apiMode: 'auto' | MoeKoeBoolean,
	apiModeConfig: MoeKoeApiModeConfig,
	apiBaseUrlMode: MoeKoeApiBaseUrlMode,
	apiBaseUrl: string,
	touchBar: MoeKoeBoolean,
	proxy: MoeKoeBoolean,
	proxyUrl: string,
	backgroundThrottling: MoeKoeBoolean,
	shortcuts: MoeKoeShortcuts
}
