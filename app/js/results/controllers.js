'use strict';
angular.module('starter.results.controllers', [])
.controller('ResultsInstitutesCtrl', function($scope, resultsInstitutes){
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

  resultsInstitutes.getAllInstitutes().then(function(success){
    $scope.rowInstitutes = doubled(success.data.data);
  });
})
.controller('ResultsCtrl', function($scope, $stateParams, results){
  $scope.results = [];

  results.getAllResultsByInstitute($stateParams.id).then(function(success){
    $scope.results = success.data.data;
  });

  $scope.decimals = function(result){
    return result.toFixed(2);
  };

});
