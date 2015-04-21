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
.controller('UpdateUserCtrl', function($scope, $filter, updateUser, $state, $alert){

  $scope.disabilities = [{'id':0,'description':'Sin discapacidad'},{'id':1,'description':'Persona ciega'},{'id':2,'description':'Persona con baja visión'},{'id':3,'description':'Persona sordociega'}];
  $scope.types = [{'id':1,'description':'Estudiante'},{'id':2,'description':'Empleado'},{'id':3,'description':'Aspirante universitario'},{'id':4,'description':'Aspirante empleado'},{'id':5,'description':'Otro'}];
  $scope.levels = [{'id':1,'description':'Educación Básica Primaria'},{'id':2,'description':'Educación Básica Secundaria'},{'id':3,'description':'Empleo con el Estado'},{'id':4,'description':'Universidad'},{'id':5,'description':'Otro'}];
  $scope.genders = [{'id': 1, 'description': 'Hombre'},{'id': 2, 'description': 'Mujer'}];

  updateUser.getUser().then(function(data){
    $scope.user = data;
    $scope.id = Number(data.id);
    $scope.user.birth_date = parseInt($filter('date')(new Date(data.birth_date), 'yyyyMMdd'));

    if(data.middle_name) $scope.user.names = data.first_name + ' ' + data.middle_name;
    else $scope.user.names = data.first_name;

  });

  $scope.update = function($event, user, form){

    if(form.$valid){
        var date = user.birth_date.toString(10)
                    .replace(/(\d\d)(?=(\d\d)+(?!\d\d))/g, "$1,").split(',');

        user.birth_date = new Date(date[0]+date[1], date[2]-1, date[3]);

        user.middle_name = '';
        _.map(user.names.split(' '), function(name, index){
          if(index === 0) user.first_name = name;
          else  user.middle_name = user.middle_name + ' ' + name;
        });
        var update = {
          id: user.id,
          first_name: user.first_name,
          middle_name: user.middle_name,
          last_name: user.last_name,
          birth_date: user.birth_date,
          mail: user.mail
        };

        updateUser.updateUser(update).then(function(success){
          updateUser.updateEvaluee(user.evaluee).then(function(success){
            $state.go('home');
          });
        });
    }

    else{
        var errorTitle = "Tienes errores en los siguientes campos:";
        var errorMessage = '';
        if(form.name.$invalid)
            errorMessage = errorMessage + " nombres";
        if(form.lastName.$invalid)
            errorMessage = errorMessage + " apellidos";
        if(form.birth_date.$invalid)
            errorMessage = errorMessage + " fecha de nacimiento";
        if(form.gender.$invalid)
            errorMessage = errorMessage + " genero";
        if(form.disabilitie.$invalid)
            errorMessage = errorMessage + " condición visual";
        if(form.type.$invalid)
            errorMessage = errorMessage + " tipo de usuario";
        if(form.level.$invalid)
            errorMessage = errorMessage + " nivel de formación";
        if(form.email.$invalid)
            errorMessage = errorMessage + " correo";

        $alert.show(errorTitle, errorMessage);
    }



  };

});
