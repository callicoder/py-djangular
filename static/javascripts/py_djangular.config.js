(function () {
	'use strict';

  	angular
    .module('py_djangular.config')
    .config(config);

  	config.$inject = ['$locationProvider'];

  	function config($locationProvider) {
    	$locationProvider.html5Mode(true);
    	$locationProvider.hashPrefix('!');
  	}
})();
