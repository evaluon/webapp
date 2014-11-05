'use strict';
angular.module('starter.results.services', []).
factory('results', function($http, $ionicLoading, localStorageService, api, access){
  var API = {
    getAll: function(){
      return $http({
              method: 'get',
              url: api.url + api.result + api.institution + '/1',
              headers: {
                Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
              }
            });
    }
  };

  return {
    getAll: function(){
      $ionicLoading.show({
        template: 'Cargando...'
      });
      return API.getAll().then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
        console.log(error);
      })
    }
  };
});
