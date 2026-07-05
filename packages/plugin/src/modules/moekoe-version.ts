import { getLocalStorage } from './local-stroge';

/** 获取萌音版本 */
export const getMoeKoeVersion = (): string | null => {
	const version = getLocalStorage('version', (v: string) => v);
	return version === 'null'? null: version;
}
