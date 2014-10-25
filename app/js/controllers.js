angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Auth) {
    $scope.user = {};
    $scope.login = function(event){
        event.preventDefault();
    };

})
.controller('RegistroCtrl', function($scope){
  $scope.$on('$viewContentLoaded', function() {
    $('#textInit').focus();
  });

  $scope.registrar = function(){
    event.preventDefault();
  }
})
.controller('HomeCtrl', function($scope){
  $scope.$on('$viewContentLoaded', function() {
    $('#textInit').focus();
  });
})
.controller('TestCtrl', function($scope, $http){
  $scope.test = {};
  $scope.questions = {};

  $http({
    method: 'GET',
    url: 'http://evaluon.boolinc.co/test/2',
    headers: {
      'Authorization': 'Bearer iZk8xILkUTADFRGiUwFkduDmWLv1OvUrCPlSi7ppmogd+IV+6sPAvtlCNy6VnLgLh3V0pDHAcAWpEnpjrEu7kw==',
      'Cache-Control': 'no-cache'
    }
  }).success(function(success){
    $scope.test = success.data;
    $scope.questions = $scope.test[0].questions;

    $('#testTitle').focus();
  }).error(function(error){
    alert('Ha ocurrido un error');
  });


});
