'use strict';
angular.module('starter.selfEvaluation.controllers', [])
.controller('SelfEvaluationTestsCtrl', function($scope, selfEvaluationTests){
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

  selfEvaluationTests.getTestsByGroupId().then(function(success){
    if(success) $scope.rowTests = success.data.data
  }).catch(function(error){
    console.log(error);
  })
})
.controller('SelfEvaluationKnowledgeAreaCtrl', function($scope, $stateParams, selfEvaluationKnowledgeArea){
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
})
.controller('SelfEvaluationTestCtrl', function($scope, $stateParams, selfEvaluationTest){
  $scope.test = {};
  $scope.questions = [];
  $scope.params = $stateParams;
  $scope.respuesta = {};
  $scope.rollbackAnswersFlag = false;

  selfEvaluationTest.getTestAnswersByArea($stateParams).then(function(success){
    if(success) $scope.questions = success.data.data
  }).catch(function(error){
    console.log(error);
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
    selfEvaluationTest.sendAnswers($stateParams.id, $scope.questions);
  };
});
