'use strict';
angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Auth) {
    $scope.user = {};
    $scope.login = function(event){
        event.preventDefault();
        Auth.login($scope.user.username, $scope.user.password);
    };

})
.controller('RegistroCtrl', function($scope, Auth){

  $scope.$on('$viewContentLoaded', function() {
    $('#textInit').focus();
  });

  $scope.registrar = function($scope, user){
    event.preventDefault();

    user.middle_name = ' ';
    _.map(user.names.split(' '), function(name, index){
      if(index === 0) user.first_name = name;
      else  user.middle_name = user.middle_name + ' ' + name;
    });

    Auth.createUser({
      id: user.id,
      first_name: user.first_name,
      middle_name: user.middle_name,
      last_name: user.last_name,
      birth_date: user.birth_date,
      mail: user.mail,
      password: CryptoJS.SHA1(user.password).toString()
    });
  };

})
.controller('HomeCtrl', function($scope, Auth){
  $scope.$on('$viewContentLoaded', function() {
    $('#textInit').focus();
  });

  $scope.logout = function(){
    Auth.logout();
  };

});
