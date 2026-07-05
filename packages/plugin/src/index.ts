import * as modules from './modules';

const init = () => {
	Object.defineProperty(window, 'LateLib', {
		value: modules,
		configurable: false,
		writable: false
	});
}

if(document.readyState === 'loading') init();
else {
	console.warn('[LateLib] It\'s a bad timing to initialize library, this may cause issues.')
	init();
}
