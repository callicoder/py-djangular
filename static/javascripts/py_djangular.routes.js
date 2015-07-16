(function () {
	'use strict';

  	angular
    .module('py_djangular.routes')
    .config(config);

  	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
    	$routeProvider.when('/register', {
      		controller: 'RegisterController', 
      		controllerAs: 'vm',
      		templateUrl: '/static/templates/authentication/register.html'
    	}).when('/login', {
			controller: 'LoginController',
			controllerAs: 'vm',
			templateUrl: '/static/templates/authentication/login.html'
		}).otherwise('/');
  }
})();
