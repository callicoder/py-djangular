(function () {
	'use strict';

	angular
	.module('py_djangular', [
		'py_djangular.routes',
		'py_djangular.config',
		'py_djangular.authentication',
		'py_djangular.layout'
	])
	.run(run);

	run.$inject = ['$http'];

	function run($http) {
		$http.defaults.xsrfHeaderName = 'X-CSRFToken';
		$http.defaults.xsrfCookieName = 'csrftoken';	
	}
	
	angular
    .module('py_djangular.routes', ['ngRoute']);

	angular
	.module('py_djangular.config', []);
})();


