(function () {
  'use strict';

  angular
    .module('py_djangular.posts', [
      'py_djangular.posts.controllers',
      'py_djangular.posts.directives',
      'py_djangular.posts.services'
    ]);

  angular
    .module('py_djangular.posts.controllers', []);

  angular
    .module('py_djangular.posts.directives', ['ngDialog']);

  angular
    .module('py_djangular.posts.services', []);
})();
