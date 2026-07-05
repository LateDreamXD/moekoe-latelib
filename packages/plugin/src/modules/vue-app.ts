/** 获取已挂载的 vue app 实例 */
export const getVueApp = (): import('vue').App<HTMLDivElement> => {
	// @ts-ignore
	return typeof window.app === 'object'? window.app.app.__vue_app__: window.app.__vue_app__;
}
