'use strict';
angular.module('starter.evaluation.controllers', [])
.controller('EvaluationInstitutesCtrl', function($scope, evaluationInstitutes){
  $scope.rowInstitutes = [];
  $scope.routes ={
    groups: 'evaluation-groups'
  };

  var doubled =  function(list, newL) {
    if(!newL) newL = [];
    return list.length == 0 ?
    newL :
    doubled(
      _.tail(list, 2),
      _.union(newL, [_.head(list, 2)])
    );
  };

  evaluationInstitutes.getAll().then(function(success){
     if(success){
         $scope.rowInstitutes = doubled(success.data.data);
         }
     });
})
.controller('EvaluationGroupsCtrl', function($scope, $stateParams, evaluationGroups){
  $scope.rowGroups = [];
  $scope.routes = {
    test:'evaluation-tests'
  }

  var doubled =  function(list, newL) {
    if(!newL) newL = [];
    return list.length == 0 ?
    newL :
    doubled(
      _.tail(list, 2),
      _.union(newL, [_.head(list, 2)])
    );
  };

  evaluationGroups.getGroupsByInstitutionId($stateParams.id).then(function(success){
    if(success) $scope.rowGroups = doubled(success.data.data);
  }).catch(function(error){
  });
})
.controller('EvaluationTestsCtrl', function($scope, $stateParams, evaluationTests){
  $scope.rowTests = [];
  $scope.rowTest2 = [];
  $scope.routes = {
    testsDetails: 'evaluation-password'
  }

  var doubled =  function(list, newL) {
    if(!newL) newL = [];
    return list.length == 0 ?
    newL :
    doubled(
      _.tail(list, 2),
      _.union(newL, [_.head(list, 2)])
    );
  };

  evaluationTests.getTestsByGroupId($stateParams.id).then(function(success){
    if(success){
      $scope.rowTests2 = doubled(success.data.data);
      $scope.rowTests = success.data.data;
    }
  }).catch(function(error){

  })
})
.controller('EvaluationKnowledgeAreaCtrl', function($scope, $stateParams, $state, $alert, evaluationKnowledgeArea){

  $scope.rowTestsDetails = [];
  $scope.routes ={
    test: 'evaluation-test-area',
    testId: $stateParams.id
  };

  var doubled =  function(list, newL) {
    if(!newL) newL = [];
    return list.length == 0 ?
    newL :
    doubled(
      _.tail(list, 2),
      _.union(newL, [_.head(list, 2)])
    );
  };

  evaluationKnowledgeArea.getAllKnowledgeArea($stateParams.id).then(function(success){
    if(success) $scope.rowTestsDetails = doubled(success.data.data);
  }).catch(function(error){
  });

  $scope.exit = function(){
    $alert.confirm('Alerta', 'Tu examen será tomado como no enviado', function(){
      $state.go('home');
    });
  };
})
.controller('EvaluationPasswordCtrl', function($scope, $stateParams, evaluationPassword){
  $scope.password = {};
  $scope.loginTest = function(event){
    event.preventDefault();
    evaluationPassword.loginTest($stateParams.id, $scope.password.data);
  }
})
.controller('EvaluationTestCtrl', function($scope, $stateParams, $alert, $ionicNavBarDelegate, evaluationTest, localStorageService){

  $scope.test = {};
  $scope.questions = [];
  $scope.params = $stateParams;
  $scope.respuesta = {};
  $scope.rollbackAnswersFlag = false;
  $scope.open = false;
  $scope.close = false;

  var getArea = function(){
    if(localStorageService.get($scope.params.id + $scope.params.area)){
      $scope.questions = localStorageService.get($scope.params.id + $scope.params.area);
    }
    else{
      evaluationTest.getTestAnswersByArea($stateParams).then(function(success){

        if(success) $scope.questions = success.data.data;

        for(var p in $scope.questions){

          if($scope.questions[p].open == 0){
            $scope.close = true;
            $scope.questions[p].answers = _.shuffle($scope.questions[p].answers);
          }
          if($scope.questions[p].open == 1){
            $scope.open = true;
          }
        }

      }).catch(function(error){
      });
    }
  };

  getArea();

  $scope.verifyAnswers = function(){
   $scope.rollbackAnswersFlag = true;

   _.each($scope.questions, function(question, index){
     if(question.answer){
       question.invisible = true;
     }
    });

  };

  $scope.rollbackAnswers = function(){
    $scope.rollbackAnswersFlag = false;

    _.each($scope.questions, function(question, index){
      question.invisible = false;
    });

  };

  $scope.sendAnswers = function(){
    evaluationTest.sendAnswers($stateParams.id, $scope.questions);
    localStorageService.remove($scope.params.id + $scope.params.area);
  };

  $scope.exit = function(){
    localStorageService.set($scope.params.id + $scope.params.area, $scope.questions);
    $alert.confirm('Alerta', 'El área será tomada como no enviada', function(){
      $ionicNavBarDelegate.back();
    });
  };

  $scope.toggleRadio = function(value){
      value = !value;
  };
});
