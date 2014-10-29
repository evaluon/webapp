'use strict';
angular.module('starter.evaluation.services', [])
.factory('evaluationServices', function($http, $ionicLoading, localStorageService, api, access){
  var API ={
    getAllInstitutes: function(){
      return $http({
        method: 'get',
        url: api.url + api.institution,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token
        }
      });
    },
    getGroupsByInstitutionId: function(institutionId){
      return $http({
        method: 'get',
        url: api.url + api.group + '/' + institutionId,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        }
      });
    },
    getTestsByGroupId: function(groupId){
      return $http({
        method: 'get',
        url: api.url,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        }
      });
    }
  };



  return {
    getAll: function(){

      $ionicLoading.show({
                template: 'Cargando...'
            });

      return API.getAllInstitutes().then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();

      });
    },
    getGroupsByInstitutionId: function(institutionId){
      $ionicLoading.show({
                template: 'Cargando...'
            });
      return API.getGroupsByInstitutionId(institutionId).then(function(success){
        $ionicLoading.hide();
        return success
      }).catch(function(error){
        $ionicLoading.hide();
      });
    },
    getTestsByGroupId: function(groupId){
      $ionicLoading.show({
                template: 'Cargando...'
      });
      return API.getTestsByGroupId(groupId).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
      })
    }
  };
});
