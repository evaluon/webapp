'use strict';
angular.module('starter.configuration.controllers', [])
.controller('ChangePasswordCtrl', function($scope, changePassword){

  $scope.user = {};

  $scope.changePassword = function(){
    if($scope.user.password1 === $scope.user.password2){
      changePassword.changePassword($scope.user.password1);
    }

    else alert('Las contraseñas no coinciden');
  };
})
.controller('AboutCtrl', function(){

});
