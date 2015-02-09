'use strict';
angular.module('starter.selfEvaluation.controllers', [])
.controller('SelfEvaluationTestsCtrl', function($scope, $ionicLoading, selfEvaluationTests){
  $scope.rowTests = [];
  $scope.routes = {
    testsDetails: 'selfEvaluation-knowledge-area'
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

  var getSelfEvaluation = function(){
    selfEvaluationTests.getTestsByGroupId().then(function(success){
      $scope.rowTests = success.data.data;
    }).catch(function(error){
      if(error.status == 404){
        selfEvaluationTests.createSelfTest().then(function(success){
          getSelfEvaluation();
        }).catch(function(error){
          $ionicLoading.hide();
        });
      }
      else $ionicLoading.hide();
    });
  };

  getSelfEvaluation();

})
.controller('SelfEvaluationKnowledgeAreaCtrl', function($scope, $stateParams, $alert, $state, selfEvaluationKnowledgeArea){
  $scope.rowTestsDetails = [];
  $scope.routes ={
    test: 'selfEvaluation-test-area',
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

  selfEvaluationKnowledgeArea.getAllKnowledgeArea($stateParams.id).then(function(success){
    if(success) $scope.rowTestsDetails = doubled(success.data.data);
  }).catch(function(error){
    console.log(error);
  });

  $scope.exit = function(){
    $alert.confirm('Alerta', 'Tu examen será tomado como no enviado', function(){
      $state.go('home');
    });
  };

})
.controller('SelfEvaluationTestCtrl', function($scope, $stateParams, $alert, $ionicNavBarDelegate, selfEvaluationTest, localStorageService){
  $scope.test = {};
  $scope.questions = [];
  $scope.params = $stateParams;
  $scope.respuesta = {};
  $scope.rollbackAnswersFlag = false;

  console.log($stateParams);

  var getArea = function(){
    if(localStorageService.get($scope.params.id + $scope.params.area)){
      $scope.questions = localStorageService.get($scope.params.id + $scope.params.area);
    }
    else {
      selfEvaluationTest.getTestAnswersByArea($stateParams).then(function(success){
        if(success) $scope.questions = success.data.data

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
          console.log(error);
        });
    }
  };

  getArea();

  $scope.verifyAnswers = function(){
   $scope.rollbackAnswersFlag = true;
   var firstUnanswered = null;

   _.each($scope.questions, function(question, index){
     if(question.answer){
       $('#answer-'+index).replaceWith('<p id="answer-'+index+'">'+(index+1)+'.</p>');
     } else {
        if (firstUnanswered === null){
          firstUnanswered = index;
          $('#answer-'+index).focus();
        }
      }
    });
  };

  $scope.rollbackAnswers = function(){
    $scope.rollbackAnswersFlag = false;
    _.each($scope.questions, function(question, index){
      $('#answer-'+index).replaceWith('<h3 id="answer-'+index+'">'+(index+1)+'.</h3>');
    });
  };

  $scope.sendAnswers = function(){
    selfEvaluationTest.sendAnswers($stateParams.id, $scope.questions);
    localStorageService.remove($scope.params.id + $scope.params.area);
  };

  $scope.exit = function(){
    localStorageService.set($scope.params.id + $scope.params.area, $scope.questions);
    $alert.confirm('Alerta', 'El área será tomada como no enviada', function(){
      $ionicNavBarDelegate.back();
    });
  };

});
