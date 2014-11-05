'use strict';
angular.module('starter.evaluation.services', [])
.factory('evaluationInstitutes', function($http, $ionicLoading, localStorageService, api, access){
  var API ={
    getAllInstitutes: function(){
      return $http({
        method: 'get',
        url: api.url + api.institution,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token
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
    }
  };
})
.factory('evaluationGroups', function($http, $ionicLoading, localStorageService, api, access){
  var API = {
    getGroupsByInstitutionId: function(institutionId){
      return $http({
        method: 'get',
        url: api.url + api.group + '/' + institutionId,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        }
      });
    }
  };

  return {
    getGroupsByInstitutionId: function(institutionId){
      $ionicLoading.show({
                template: 'Cargando...'
            });
      return API.getGroupsByInstitutionId(institutionId).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
      });
    },
  };
})
.factory('evaluationTests',function($http, $ionicLoading, localStorageService, api, access){
  var API ={
    getTestsByGroupId: function(groupId){
      return $http({
        method: 'get',
        url: api.url + api.test + api.group + '/' + groupId + '/all',
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        }
      });
    }
  };

  return {
    getTestsByGroupId: function(groupId){
      $ionicLoading.show({
                template: 'Cargando...'
      });
      return API.getTestsByGroupId(groupId).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
      });
    }
  };
})
.factory('evaluationKnowledgeArea', function($http, $ionicLoading, localStorageService, api, access){
  var API = {
    getAllKnowledgeArea: function(testId){
      return $http({
        method: 'get',
        url: api.url + api.test + '/' +testId + api.knowledgeArea,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        }
      });
    }
  };

  return {
    getAllKnowledgeArea: function(testId){
      $ionicLoading.show({
                template: 'Cargando...'
      });
      return API.getAllKnowledgeArea(testId).then(function(success){
        $ionicLoading.hide();
        return success
      }).catch(function(error){
        $ionicLoading.hide();
      })
    }
  }
})
.factory('evaluationTest', function($http, $ionicLoading, $q, localStorageService, api, access){
  var API = {
    getTestAnswersByArea: function(test){
      return $http({
        method: 'get',
        url: api.url + api.test + '/' +test.id + api.testQuestions + '/' + test.area,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        }
      });
    },
    getTestById: function(testId){
      return $http({
        method: 'get',
        url: api.url + api.test + '/' +testId,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        }
      });
    },
    sendAnswers: function(test, data){

      var qs = [];

      for(var i = 0; i < data.length; i++){
        qs.push(
          (function(d){
            return $http({
              method: 'post',
              url: api.url + api.response,
              headers: {
                Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
                'Content-Type': 'application/json'
              },
              data: {
                test_id: test,
                question_id: d.id,
                answer_id: d.answer
              }
            });
          })(data[i])
        );

      }

      return $q.all(qs).then(function(responses){
        var qSent = _.reduce(responses, function(a, r){ return a + r }, 0);
        if(qSent === qs.length){
          console.log("All questions sent");
        } else {
          console.log("%d/%d questions sent", qSent, qs.length);
        }
      });

    }
  };

  return {
    getTestAnswersByArea: function(test){
      $ionicLoading.show({
          template: 'Cargando...'
      });
      return API.getTestAnswersByArea(test).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(){
        $ionicLoading.hide();
      });
    },
    getTestById: function(testId){
      $ionicLoading.show({
          template: 'Cargando...'
      });
      return API.getTestAnswersByArea(test).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(){
        $ionicLoading.hide();
      });
    },
    sendAnswers: function(testId, data){
      $ionicLoading.show({
          template: 'Cargando...'
      });
      API.sendAnswers(testId, data).then(function(success){
        $ionicLoading.hide();
        console.log(success);
      }).catch(function(error){
        $ionicLoading.hide();
        console.log(error);
      });
    }
  };
});
