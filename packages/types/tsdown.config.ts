import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: 'index.d.ts',
	dts: true,
	outDir: 'types',
	fixedExtension: false
});
