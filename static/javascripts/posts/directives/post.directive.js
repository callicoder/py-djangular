(function () {
  'use strict';

  angular
    .module('py_djangular.posts.directives')
    .directive('post', post);


  function post() {
    var directive = {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: '/static/templates/posts/post.html'
    };

    return directive;
  }
})();