'use strict';
angular.module('starter.selfEvaluation.services', [])
.factory('selfEvaluationTests',function($http, $ionicLoading, localStorageService, api, access){
  var API ={
    getTestsByGroupId: function(){
      return $http({
        method: 'get',
        url: api.url + api.test + api.self,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        },
        data: {
          nonErrorMessage: true
        }
      });
    },
    createSelfTest: function(){
      return $http({
        method: 'post',
        url: api.url + api.test + api.self,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token
        }
      });
    }
  };

  return {
    getTestsByGroupId: function(){
      var these = this;

      return API.getTestsByGroupId().then(function(success){
        return success;
      });
    },
    createSelfTest: function(){
      var these = this;
      return API.createSelfTest().then(function(success){
        return success;
      });
    }
  };
})
.factory('selfEvaluationKnowledgeArea', function($http, $alert, $ionicLoading, $ionicPopup, $state, localStorageService, api, access){
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
    },
    closeTest: function(testId){
      return $http({
        method: 'post',
        url: api.url + api.test + api.id(testId) + api.close,
        headers:{
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token
        }
      });
    }
  };

  return {
    getAllKnowledgeArea: function(testId){

      return API.getAllKnowledgeArea(testId).then(function(success){
        if(success.data.data.length > 0){
          return success;
        }
        else{
          $alert.show('Mensaje', 'Prueba finalizada exitosamente');
          $state.go('home');
        }
      }).catch(function(error){
      })
    }
  }
})
.factory('selfEvaluationTest', function($http, $alert, $ionicLoading, $q, $state, localStorageService, api, $ionicNavBarDelegate, access){
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

      return API.getTestAnswersByArea(test).then(function(success){
        return success;
      }).catch(function(){
      });
    },

    getTestById: function(testId){

      return API.getTestAnswersByArea(test).then(function(success){
        return success;
      }).catch(function(){
      });
    },
    sendAnswers: function(testId, data){

      API.sendAnswers(testId, data).then(function(success){
        $alert.show('Exito','Area enviada');
        $ionicNavBarDelegate.back();
      }).catch(function(error){
      });
    }
  };
});
