import { getVueApp } from './vue-app';

/** 使用 vue 路由及路由器 */
export function useVueRouter(): {
	route: import('vue-router').RouteLocationNormalizedLoadedGeneric,
	router: import('vue-router')._RouterClassic
} {
	return {
		route: getVueApp().config.globalProperties.$route,
		router: getVueApp().config.globalProperties.$router
	}
}
