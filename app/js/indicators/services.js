'use strict';

angular.module('starter.indicators.services', [])
.factory('indicators', function($http, $ionicLoading, localStorageService, api, access){
  var API = {
    getIndicators: function(){
    return $http({
        method: 'get',
        url: api.url + api.indicator,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token
        }
      });
    },
    getUser: function(){
      return $http({
        method: 'get',
        url: api.url + api.user,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token
        }
      });
    }
  };

  return {
    getIndicators: function(){

      return API.getIndicators().then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
      });
    },
    getUser: function(){

      return API.getUser().then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
      });
    }
  };
});
