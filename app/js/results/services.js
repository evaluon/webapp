'use strict';
angular.module('starter.results.services', []).
factory('resultsInstitutes', function($http, $ionicLoading, localStorageService, api, access){
  var API = {
    getAllInstitutes: function(){
      return $http({
              method: 'get',
              url: api.url + api.result,
              headers: {
                Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
              }
            });
    }
  };

  return {
    getAllInstitutes: function(){

      return API.getAllInstitutes().then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
      })
    }
  };
})
.factory('results', function($http, $ionicLoading, localStorageService, api, access){
  var API = {
    getAllResultsByInstitute: function(instituteId){
      return $http({
              method: 'get',
              url: api.url + api.result+ api.id(instituteId),
              headers: {
                Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
              }
            });
    }
  };

  return {
    getAllResultsByInstitute: function(instituteId){

      return API.getAllResultsByInstitute(instituteId).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
      })
    }
  };
});
