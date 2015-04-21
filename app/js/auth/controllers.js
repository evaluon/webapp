'use strict';
angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Auth, updateUser) {
    $scope.user = {};
    $scope.login = function(event){
        event.preventDefault();
        Auth.login(
            $scope.user.username, $scope.user.password
        ).then(function(){
            return updateUser.getUser();
        }).then(function(user){
            if(user.role <= 1){
                $state.go('home');
            }
        });
    };

})
.controller('RegistroCtrl', function($scope, $filter, Auth, $alert){

  $scope.$on('$viewContentLoaded', function() {
    $('#textInit').focus();
  });

  var now = new Date();
  now.setFullYear(now.getFullYear() - 3);
  $scope.maxDate = $filter('date')(now, 'yyyy-MM-dd');

  $scope.disabilities = [{"id":0,"description":"Sin discapacidad"},{"id":1,"description":"Persona ciega"},{"id":2,"description":"Persona con baja visión"},{"id":3,"description":"Persona sordociega"}];
  $scope.types = [{"id":1,"description":"Estudiante"},{"id":2,"description":"Empleado"},{"id":3,"description":"Aspirante universitario"},{"id":4,"description":"Aspirante empleado"},{"id":5,"description":"Otro"}];
  $scope.levels = [{"id":1,"description":"Educación Básica Primaria"},{"id":2,"description":"Educación Básica Secundaria"},{"id":3,"description":"Empleo con el Estado"},{"id":4,"description":"Universidad"},{"id":5,"description":"Otro"}];
  $scope.genders = [{"id": 1, "description": "Hombre"},{"id": 2, "description": "Mujer"}];


  $scope.registrar = function($event, user, form){

    if(form.$valid){
        var date = user.birth_date.toString(10)
                    .replace(/(\d\d)(?=(\d\d)+(?!\d\d))/g, "$1,").split(',');

        user.birth_date = new Date(date[0]+date[1], date[2]-1, date[3]);

        user.middle_name = '';
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
    }
    else{
        var errorTitle = "Tienes errores en los siguientes campos:";
        var errorMessage = '';
        if(form.id.$invalid)
            errorMessage = errorMessage + "\ncédula";
        if(form.name.$invalid)
            errorMessage = errorMessage + "\nnombres";
        if(form.lastName.$invalid)
            errorMessage = errorMessage + "\napellidos";
        if(form.birth_date.$invalid)
            errorMessage = errorMessage + "\nfecha de nacimiento";
        if(form.gender.$invalid)
            errorMessage = errorMessage + "\ngenero";
        if(form.disabilitie.$invalid)
            errorMessage = errorMessage + "\ncondición visual";
        if(form.type.$invalid)
            errorMessage = errorMessage + "\ntipo de usuario";
        if(form.level.$invalid)
            errorMessage = errorMessage + "\nnivel de formación";
        if(form.email.$invalid)
            errorMessage = errorMessage + "\ncorreo";
        if(form.password.$invalid)
            errorMessage = errorMessage + "\ncontraseña";
        else if(user.password != user.password2)
            errorMessage = errorMessage + "\nlas contraseñas no coinciden";

        $alert.show(errorTitle, errorMessage);
    }
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

  $scope.logout = function(){
    Auth.logout();
  };

})
.controller('LogoutCtrl', function($scope, Auth){
    Auth.logout();
});
