import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "MoeKoe LateLib",
	description: "A library for MoeKoe Music plugins",
	base: '/moekoe-latelib/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{ text: '接口', link: '/interface/' }
		],

		sidebar: [
			{
				text: '开始',
				items: [
					{ text: '快速开始', link: '/quick-start' }
				]
			},
			{
				text: '接口',
				base: '/interface/',
				items: [
					{ text: '总览', link: '/' },
					{ text: '通用类', link: 'general' },
					{ text: '获取类', link: 'class-get' },
					{ text: '使用类', link: 'class-use' }
				]
			},
			{
				text: 'TypeScript',
				items: [
					{ text: '类型定义', link: 'definitions' }
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/LateDreamXD/moekoe-latelib' }
		]
	},
	markdown: {
		config(md) {
			md.use(groupIconMdPlugin)
		},
	},
	vite: {
		plugins: [
			groupIconVitePlugin()
		],
	}
});
