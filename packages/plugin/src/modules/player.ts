import { getLocalStorage } from './local-stroge';

/** 使用播放器 */
export const usePlayer = () => {
	const playback_mode: number | null = getLocalStorage('player_playback_mode');
	const progress: number | null = getLocalStorage('player_progress');
	const speed: number | null = getLocalStorage('player_speed');
	const volume: number | null = getLocalStorage('player_volume');

	return {
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
			playOrPause() { (document.querySelector('.player-bar>.controls')?.childNodes[1] as HTMLButtonElement)?.click(); },
			/** 上一首 */
			prev() { (document.querySelector('.player-bar>.controls')?.childNodes[0] as HTMLButtonElement)?.click(); },
			/** 下一首 */
			next() { (document.querySelector('.player-bar>.controls')?.childNodes[2] as HTMLButtonElement)?.click(); }
		}
	}
}
