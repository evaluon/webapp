'use strict';

angular.module('starter')
.directive('menuIcon', function(){
  return{
    restrict: 'E',
    template: '<button ui-sref="{{ref}}" class="button-menu img-responsive"> <img tabindex="0" class="img-menu" ng-src="{{img}}" alt="{{description}}"></button>',
    scope: {
      ref: '@',
      img: '@',
      description: '@'
    }
  }
});
