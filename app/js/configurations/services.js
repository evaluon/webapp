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

      return API.changePassword(password).then(function(success){
        $alert.show('Exito', 'Contraseña cambiada satisfactoriamente');
        $state.go('home');
        success;
      }).catch(function(error){
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
      updateUser: function(user){
        return $http({
          method: 'PUT',
          url: api.url + api.user,
          headers: {
            Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          },
          data: user
        });
      },
      updateEvalue: function(evaluee){
        return $http({
          method: 'PUT',
          url: api.url + api.evaluee,
          headers: {
            Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          },
          data: evaluee
        });
      }
    };

    return {

      getUser: function(){

        return API.getUser().then(function(success){

          return success.data.data;
        }).catch(function(){

        })
      },

      updateUser: function(user){

        return API.updateUser(user).then(function(success){
          return success;
        }).catch(function(){
        })
      },

      updateEvaluee: function(evaluee){

        return API.updateEvalue(evaluee).then(function(success){

          $alert.show('Exito', 'Actualizado correctamente');
          return success;

        }).catch(function(){
        })
      }
    };
});
