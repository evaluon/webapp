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
      $ionicLoading.show({
                template: 'Cargando...'
      });
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
        $ionicLoading.show({
                  template: 'Cargando...'
        });

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
.factory('evaluationKnowledgeArea', function($http, $ionicLoading, $state, $ionicPopup, localStorageService, api, access){
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
      });
    }
  }
})
.factory('evaluationTest', function($http, $ionicLoading, $q, $state, localStorageService, api, access){
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
                sendData = _.extend({ answer_id: d.answer }, send_data);
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
    getTestAnswersByArea: function(test, $ionicNavBarDelegate){
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
        $ionicNavBarDelegate.back();
        console.log(success);
      }).catch(function(error){
        $ionicLoading.hide();
        console.log(error);
      });
    }
  };
});
