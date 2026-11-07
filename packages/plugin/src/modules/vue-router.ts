import { getVueApp } from './vue-app';

/** 使用 vue 路由及路由器 */
export function useVueRouter(): {
	route: import('vue-router').RouteLocationNormalizedLoadedGeneric,
	router: import('vue-router')._RouterClassic
} {
	const vueApp = getVueApp();
	return {
		route: vueApp.config.globalProperties.$route,
		router: vueApp.config.globalProperties.$router
	}
}
