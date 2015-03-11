'use strict';

angular.('starter')
.directive('evaluonSelect', function(){
  return {
    restrict: 'E',
    link: function($scope, $el, $attrs) {
      $el.on('keypress', function(event){
        event.preventDefault();
        if(event.keyCode === 32 || event.keyCode === 13){
          $scope.toggleRadio();
          $scope.$apply();
        }
      });
    }
  }
});
