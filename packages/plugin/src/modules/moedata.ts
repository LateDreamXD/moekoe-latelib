import { type MoeData } from './types';
import { getLocalStorage } from './local-stroge';

/** 获取萌音认证信息 */
export const getMoeData = (): MoeData | null => {
	return getLocalStorage('MoeData');
}
