'use strict';

angular.module('starter.indicators.controllers', [])
.controller('IndicatorsCtrl', function($scope, indicators){
 $scope.indicators = {};
 $scope.user = {};
 $scope.levels = {
    bronze: 'Bronce',
    silver: 'Plata',
    gold: 'Oro',
    platinum: 'Platino',
    diamond: 'Diamante',
    master: 'Master'
};

 indicators.getIndicators().then(function(success){
   $scope.indicators = success.data.data;
});

 indicators.getUser().then(function(success){
   $scope.user = success.data.data;
 });

});
