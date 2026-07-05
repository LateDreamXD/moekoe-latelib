import * as LateLibModules from '@packages/plugin/src/modules';

declare global {
	const LateLib: typeof LateLibModules;
	interface Window {
		readonly LateLib: typeof LateLibModules;
	}
}

export * from '@packages/plugin/src/modules/types';
export * from 'vue';
