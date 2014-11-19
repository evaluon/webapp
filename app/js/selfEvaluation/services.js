'use strict';
angular.module('starter.selfEvaluation.services', [])
.factory('selfEvaluationTests',function($http, $ionicLoading, localStorageService, api, access){
  var API ={
    getTestsByGroupId: function(){
      return $http({
        method: 'get',
        url: api.url + api.test + api.self + '/all',
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
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
      $ionicLoading.show({
                template: 'Cargando...'
      });
      return API.getTestsByGroupId().then(function(success){
        if(success.data.data.length > 0){
          $ionicLoading.hide();
          return success;
        }
        else{
          API.createSelfTest().then(function(success){
            return these.getTestsByGroupId();
          }).catch(function(error){
            console.log(error);
          });
        }

      }).catch(function(error){
        $ionicLoading.hide();
      });
    }
  };
})
.factory('selfEvaluationKnowledgeArea', function($http, $ionicLoading, localStorageService, api, access){
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

  var alertError = function (title, message){
    if(navigator && navigator.notification){
      navigator.notification.alert(message, alertDismissed, title, 'Aceptar');
    }
    else{
      var alertPopup = $ionicPopup.alert({
              title: title,
              template: message,
              okType: 'button-inci'
          });
    }
  };

  return {
    getAllKnowledgeArea: function(testId){
      $ionicLoading.show({
                template: 'Cargando...'
      });
      return API.getAllKnowledgeArea(testId).then(function(success){
        if(success.data.data.length > 0){
          $ionicLoading.hide();
          return success;
        }
        else{
          API.closeTest(testId).then(function(success){
            $ionicLoading.hide();
            alertError('Mensaje', 'Prueba finalizada exitosamente');
            $state.go('home');
          });
        }
      }).catch(function(error){
        $ionicLoading.hide();
      })
    }
  }
})
.factory('selfEvaluationTest', function($http, $ionicLoading, $q, $state, localStorageService, api, access){
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
        alert('Examen enviado');
        $state.go('home');
        console.log(success);
      }).catch(function(error){
        $ionicLoading.hide();
        console.log(error);
      });
    }
  };
});
