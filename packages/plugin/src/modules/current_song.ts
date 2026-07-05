import { type MoeKoeCurrentSong } from './types';
import { getLocalStorage } from './local-stroge';

/** 获取当前歌曲 */
export const getCurrentSong = (): MoeKoeCurrentSong | null => {
	return getLocalStorage('current_song');
}
