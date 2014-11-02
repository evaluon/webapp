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
    console.log(error);
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
    console.log(error);
  });
})
.controller('EvaluationTestsCtrl', function($scope, $stateParams, evaluationTests){
  $scope.rowTests = [];
  $scope.routes = {
    testsDetails: 'evaluation-knowledge-area'
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
    if(success) $scope.rowTests = doubled(success.data.data);
  }).catch(function(error){
    console.log(error);
  })
})
.controller('EvaluationKnowledgeAreaCtrl', function($scope, $stateParams, evaluationKnowledgeArea){
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
    console.log(error);
  });
})
.controller('EvaluationTestCtrl', function($scope, $stateParams, evaluationTest){
  $scope.test = {};
  $scope.questions = [];
  $scope.params = $stateParams;

  evaluationTest.getTestAnswersByArea($stateParams).then(function(success){
    if(success) $scope.questions = success.data.data
    console.log($scope.questions);
  }).catch(function(error){
    console.log(error);
  });
});
