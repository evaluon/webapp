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

  }).catch(function(error){
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
.controller('EvaluationTestCtrl', function($scope, $stateParams, $alert, $ionicNavBarDelegate, evaluationTest){

  $scope.test = {};
  $scope.questions = [];
  $scope.params = $stateParams;
  $scope.respuesta = {};
  $scope.rollbackAnswersFlag = false;
  $scope.open = false;
  $scope.close = false;



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
    evaluationTest.sendAnswers($stateParams.id, $scope.questions);
  };

  $scope.exit = function(){
    $alert.confirm('Alerta', 'El área será tomada como no enviada', function(){
      $ionicNavBarDelegate.back();
    });
  };
});
