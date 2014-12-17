'use strict';
angular.module('starter.configuration.controllers', [])
.controller('ChangePasswordCtrl', function($scope, $alert, changePassword){

  $scope.user = {};

  $scope.changePassword = function(){
    if($scope.user.password1 === $scope.user.password2){
      changePassword.changePassword($scope.user.password1);
    }

    else $alert.show('Error','Las contraseñas no coinciden');
  };
})
.controller('UpdateUserCtrl', function($scope, updateUser){

  $scope.disabilities = [{'id':0,'description':'Sin discapacidad'},{'id':1,'description':'Persona ciega'},{'id':2,'description':'Persona con baja visión'},{'id':3,'description':'Persona sordociega'}];
  $scope.types = [{'id':1,'description':'Estudiante'},{'id':2,'description':'Empleado'},{'id':3,'description':'Aspirante universitario'},{'id':4,'description':'Aspirante empleado'},{'id':5,'description':'Otro'}];
  $scope.levels = [{'id':1,'description':'Educación Básica Primaria'},{'id':2,'description':'Educación Básica Secundaria'},{'id':3,'description':'Empleo con el Estado'},{'id':4,'description':'Universidad'},{'id':5,'description':'Otro'}];
  $scope.genders = [{'id': 1, 'description': 'Hombre'},{'id': 2, 'description': 'Mujer'}];

  updateUser.getUser().then(function(data){
    $scope.user = data;
    $scope.user.birth_date = new Date(data.birth_date);

    if(data.middle_name) $scope.user.names = data.first_name + ' ' + data.middle_name;
    else $scope.user.names = data.first_name;
    
  });

  $scope.update = function($event, user){
    event.preventDefault();

    event.preventDefault();

    user.middle_name = ' ';
    _.map(user.names.split(' '), function(name, index){
      if(index === 0) user.first_name = name;
      else  user.middle_name = user.middle_name + ' ' + name;
    });

    console.log(user);
  };

});
