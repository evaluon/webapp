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

  $scope.disabilities = [{"id":0,"description":"Sin discapacidad"},{"id":1,"description":"Persona ciega"},{"id":2,"description":"Persona con baja visión"},{"id":3,"description":"Persona sordociega"}];
  $scope.types = [{"id":1,"description":"Estudiante"},{"id":2,"description":"Empleado"},{"id":3,"description":"Aspirante universitario"},{"id":4,"description":"Aspirante empleado"},{"id":5,"description":"Otro"}];
  $scope.levels = [{"id":1,"description":"Educación Básica Primaria"},{"id":2,"description":"Educación Básica Secundaria"},{"id":3,"description":"Empleo con el Estado"},{"id":4,"description":"Universidad"},{"id":5,"description":"Otro"}];
  $scope.genders = [{"id": 1, "description": "Hombre"},{"id": 2, "description": "Mujer"}]
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
    }, user.evaluee);
  };

})
.controller('RecoverPasswordCtrl', function($scope, $state, $alert, Auth) {

  $scope.recover = function(event, mail){

    event.preventDefault()
    Auth.recoverPassword(mail).then(function(success){
      if(success){
        $alert.show('Exito','Revise su correo electrónico');
      }
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
