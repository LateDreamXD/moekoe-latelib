import { defineConfig } from 'tsdown';

const shared: import('tsdown').UserConfig = {
	minify: true,
	dts: false,
	format: 'iife',
	platform: 'browser'
}

export default defineConfig([
	{
		copy: {
			from: 'public/**/*',
			to: 'dist'
		},
		entry: {
			lib: 'src/index.ts'
		},
		...shared,
		deps: {
			alwaysBundle: ['vue']
		}
	}
]);
