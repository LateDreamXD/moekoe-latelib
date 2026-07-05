// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import { type Theme, useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import 'virtual:group-icons.css';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold';
import 'vitepress-plugin-codeblocks-fold/style/index.css';
import './style.css';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	enhanceApp({ app, router, siteData }) {
		// ...
	},
	setup() {
		const { frontmatter } = useData();
		const route = useRoute();
		codeblocksFold({ route, frontmatter }, true, 200);
	},
} satisfies Theme;
