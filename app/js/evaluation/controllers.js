'use strict';
angular.module('starter.evaluation.controllers', [])
.controller('EvaluationInstitutesCtrl', function($scope, evaluationServices){
  $scope.rowInstitutes = [];

  var doubled =  function(list, newL) {
    if(!newL) newL = [];
    return list.length == 0 ?
    newL :
    doubled(
      _.tail(list, 2),
      _.union(newL, [_.head(list, 2)])
    );
  };

  evaluationServices.getAll().then(function(success){
    if(success){
      $scope.rowInstitutes = doubled(success.data.data);
    }

  }).catch(function(error){
    console.log(error);
  });
})
.controller('EvaluationGroupsCtrl', function($scope, $stateParams, evaluationServices){
  $scope.rowGroups = [];

  var doubled =  function(list, newL) {
    if(!newL) newL = [];
    return list.length == 0 ?
    newL :
    doubled(
      _.tail(list, 2),
      _.union(newL, [_.head(list, 2)])
    );
  };

  evaluationServices.getGroupsByInstitutionId($stateParams.id).then(function(success){
    if(success) $scope.rowGroups = doubled(success.data.data);
    console.log($scope.rowGroups);
  }).catch(function(error){
    console.log(error);
  });
  console.log($stateParams.id);
})
.controller('EvaluationTestsCtrl', function($scope, $stateParams, evaluationServices){
  $scope.rowTests = [];

  var doubled =  function(list, newL) {
    if(!newL) newL = [];
    return list.length == 0 ?
    newL :
    doubled(
      _.tail(list, 2),
      _.union(newL, [_.head(list, 2)])
    );
  };

  evaluationServices.getTestsByGroupId($stateParams.id).then(function(success){
    if(success) $scope.rowTests = doubled(success.data.data);
  }).catch(function(error){
    console.log(error);
  })
});
