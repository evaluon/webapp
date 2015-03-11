'use strict';

angular.module('starter')
.directive('menuIcon', function(){
  return{
    restrict: 'E',
    templateUrl: 'views/directives/menuIcon.tpl.html',
    scope: {
      ref: '@',
      img: '@',
      description: '@'
    }
  }
});
