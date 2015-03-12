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
        url: api.url + api.evaluee + api.group,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token
        },
        params: {
          institution: institutionId
        }
      });
    }
  };

  return {

    getGroupsByInstitutionId: function(institutionId){

      return API.getGroupsByInstitutionId(institutionId).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
      });
    },
  };
})
.factory('evaluationTests',function($http, $ionicLoading, $ionicNavBarDelegate, localStorageService, api, access){
  var API ={
    getTestsByGroupId: function(groupId){
      return $http({
        method: 'get',
        url: api.url + api.test + api.group + '/' + groupId  + api.active,
        headers: {
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        }
      });
    }
  };

  return {
    getTestsByGroupId: function(groupId){

      return API.getTestsByGroupId(groupId).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(error){
        $ionicLoading.hide();
        if(error.status === 404){
          $ionicNavBarDelegate.back();
        }
      });
    }
  };
})
.factory('evaluationPassword', function($http, $ionicLoading, $state, $ionicPopup, localStorageService, api, access){
  var API = {
    openTest: function(testId, hotp){
      return $http({
        method: 'post',
        url: api.url + api.test + api.id(testId) + api.open,
        headers:{
          Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
          'Content-Type': 'application/json'
        },
        data:{
          hotp: hotp
        }
      });
    }
  };

  return {
    loginTest: function(testId, hotp){

        return API.openTest(testId, hotp).then(function(success){
          $ionicLoading.hide();
          $state.go('evaluation-knowledge-area', {id: testId});
          return success;
        }).catch(function(error){
          $ionicLoading.hide();
        });
    }
  };
})
.factory('evaluationKnowledgeArea', function($http, $ionicLoading, $state, $ionicPopup, $alert, localStorageService, api, access){
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
          $ionicLoading.hide();
          return success;
        }
        else{
          API.closeTest(testId).then(function(success){
            $ionicLoading.hide();
            $alert.show('Mensaje', 'Prueba finalizada exitosamente');
            $state.go('home');
          });
        }
      }).catch(function(error){
        $ionicLoading.hide();
      });
    }
  }
})
.factory('evaluationTest', function($http, $ionicLoading, $q, $state, $alert, localStorageService, api, access, $ionicNavBarDelegate){
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

            var sendData = {
                test_id: test,
                question_id: d.id
            };

            if(d.open){
                sendData = _.extend(
                    { answer_id: null, text: d.answer }, sendData
                );
            } else {
                sendData = _.extend({ answer_id: d.answer }, sendData);
            }

            return $http({
              method: 'post',
              url: api.url + api.response,
              headers: {
                Authorization:  localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
                'Content-Type': 'application/json'
              },
              data: sendData
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
        $ionicLoading.hide();
        return success;
      }).catch(function(){
        $ionicLoading.hide();
      });
    },
    getTestById: function(testId){

      return API.getTestAnswersByArea(test).then(function(success){
        $ionicLoading.hide();
        return success;
      }).catch(function(){
        $ionicLoading.hide();
      });
    },
    sendAnswers: function(testId, data){

      API.sendAnswers(testId, data).then(function(success){
        $ionicLoading.hide();
        $alert.show('Exito','Area enviada');
        $ionicNavBarDelegate.back();
      }).catch(function(error){
        $ionicLoading.hide();
      });
    }
  };
});
