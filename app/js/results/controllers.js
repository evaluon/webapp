'use strict';
angular.module('starter.results.controllers', [])
.controller('ResultsCtrl', function($scope, results){
  $scope.results = [];

  results.getAll().then(function(success){
    $scope.results.push(success.data.data);
    console.log($scope.results);
  }).catch(function(error){});
});
