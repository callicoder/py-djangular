(function() {
	'use strict';

  	angular
    .module('py_djangular.authentication', [
    	'py_djangular.authentication.controllers',
      	'py_djangular.authentication.services'
    ]);

  	angular
    .module('py_djangular.authentication.controllers', []);

  	angular
    .module('py_djangular.authentication.services', ['ngCookies']);
})();
