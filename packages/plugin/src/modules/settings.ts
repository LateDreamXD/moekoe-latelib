import { type MoeKoeSettings } from './types';
import { getLocalStorage } from './local-stroge';

/** 获取萌音设置 */
export const getSettings = (): MoeKoeSettings | null => {
	return getLocalStorage('settings');
}
