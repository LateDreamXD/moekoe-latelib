import { type MoeKoeColorTheme, type MoeKoeTheme } from './types';
import { getSettings } from './settings';
import { getLocalStorage } from './local-stroge';
import { getVueApp } from './vue-app';

/** 使用萌音主题 */
export const useMoeKoeTheme = (): {
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
} => {
	return {
		colorTheme: getSettings()?.themeColor || 'pink',
		currentTheme: getLocalStorage('theme', (v: string) => v),
		applyColorTheme: getVueApp().config.globalProperties.$applyColorTheme,
		setTheme: getVueApp().config.globalProperties.$setTheme,
		theme: getSettings()?.theme || 'light'
	}
}
