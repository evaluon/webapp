'use strict';

angular.module('starter.configuration.services', [])
.factory('changePassword', function($http, $ionicLoading, $state, $alert, localStorageService, api, access){
  var API = {
    changePassword: function(password){
      return $http({
        method: 'put',
        url: api.url + api.user,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        },
        data: {
          password: CryptoJS.SHA1(password).toString()
        }
      });
    }
  };

  return {
    changePassword: function(password){
      $ionicLoading.show({
                template: 'Cargando...'
      });

      return API.changePassword(password).then(function(success){
        $ionicLoading.hide();
        $alert.show('Exito', 'Contraseña cambiada satisfactoriamente');
        $state.go('home');
        success;
      }).catch(function(error){
        $ionicLoading.hide();
      });
    }
  };
}).factory('updateUser', function($http, $ionicLoading, $alert, localStorageService, api, access){
    var API = {
      getUser: function(){
        return $http({
          method: 'GET',
          url: api.url + api.user,
          headers: {
            Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          }
        });
      },
      updateUser: function(){
        return $http({

        });
      }
    };

    return {
      getUser: function(){
        $ionicLoading.show({
          template: 'Cargando...'
        });

        return API.getUser().then(function(success){

          $ionicLoading.hide();
          return success.data.data;
        }).catch(function(){
          console.log('Error');
          $ionicLoading.hide();
        })
      },
      updateUser: function(){

      }
    }
});
