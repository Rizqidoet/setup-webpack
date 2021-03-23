import { addClass, removeClass } from './utils';

const VhamburgerId = document.getElementById('menu-hamburger');
VhamburgerId.addEventListener('click', function () {
	const vmenuId = document.getElementById('menu');
	if (vmenuId.className.indexOf('opacity-0') > -1) {
		addClass(VhamburgerId, 'fixed top-0 right-0 text-black mt-2 mr-2');
		removeClass(VhamburgerId, 'relative');
		addClass(vmenuId, 'bg-gray-100 opacity-100 p-5 top-0 right-0');
		removeClass(vmenuId, 'opacity-0 invisible');
	} else {
		removeClass(VhamburgerId, 'fixed top-0 right-0 text-black mt-2 mr-2');
		addClass(VhamburgerId, 'relative');
		removeClass(vmenuId, 'bg-gray-100 opacity-100 p-5 top-0 right-0');
		addClass(vmenuId, 'opacity-0 invisible');
	}
});
