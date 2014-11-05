'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
'ionic',
'starter.controllers',
'starter.services',
'app.templates',
'starter.evaluation.controllers',
'starter.evaluation.services',
'starter.results.controllers',
'starter.results.services',
'starter.configuration.controllers',
'LocalStorageModule'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, routingConfigProvider, localStorageServiceProvider, $httpProvider){

  //Routing
  //Public routes
  $stateProvider
  .state('public',{
    abstract: true,
    data: {
      access: routingConfigProvider.accessLevels.public
    }
  });

  //Anon routes
  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'views/login.tpl.html',
    controller: 'LoginCtrl',
    data: {
      access: routingConfigProvider.accessLevels.anon
    }
  })
  .state('registro', {
    url: '/registro',
    templateUrl: 'views/registro.tpl.html',
    controller: 'RegistroCtrl',
    data: {
      access: routingConfigProvider.accessLevels.anon
    }
  });

  //User routes
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.tpl.html',
    controller: 'HomeCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  });

  //Evaluation routes
  $stateProvider
  .state('evaluation',{
    url:'/evaluation/institutions',
    templateUrl:'views/evaluation/institutions.tpl.html',
    controller: 'EvaluationInstitutesCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('evaluation-groups',{
    url:'/evaluation/groups/:id',
    templateUrl:'views/evaluation/groups.tpl.html',
    controller: 'EvaluationGroupsCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('evaluation-tests',{
    url:'/evaluation/tests/:id',
    templateUrl: 'views/evaluation/tests.tpl.html',
    controller: 'EvaluationTestsCtrl',
    data:{
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('evaluation-knowledge-area', {
    url: '/evaluation/knowledge-area/:id',
    templateUrl: 'views/evaluation/knowledge-area.tpl.html',
    controller: 'EvaluationKnowledgeAreaCtrl',
    data:{
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('evaluation-test-area', {
    url: '/evaluation/test/:id/area/:area',
    templateUrl: 'views/evaluation/test.tpl.html',
    controller: 'EvaluationTestCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  });

  //Evaluate routes
  $stateProvider
  .state('selfEvaluation',{
    url:'/evaluate/institutions',
    templateUrl:'views/evaluation/institutions.tpl.html',
    controller: 'EvaluationInstitutesCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('selfEvaluation-groups',{
    url:'/evaluate/groups/:id',
    templateUrl:'views/evaluation/groups.tpl.html',
    controller: 'EvaluationGroupsCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('selfEvaluation-test',{
    url:'/evaluation/evaluation/:id',
    templateUrl: 'views/evaluation/tests.tpl.html',
    controller: 'EvaluationTestsCtrl',
    data:{
      access: routingConfigProvider.accessLevels.user
    }
  });

  //Results routes
  $stateProvider
  .state('results',{
    url:'/results',
    templateUrl:'views/results/results.tpl.html',
    controller: 'ResultsCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(false);

  //Local Storage conf
  localStorageServiceProvider
  .setPrefix('Evaluon');

  //Interceptor
  var alertDismissed = function(){};

  var interceptor = ['$q', function($q, $ionicPopup) {
    var alertError = function (title, message){
      if(navigator && navigator.notification){
        navigator.notification.alert(message, alertDismissed, title, 'Aceptar');
      }
      else{
        alert(message);
      }
    };

    function success(response) {
      return response;
    }

    function error(response) {

      switch(response.status) {
        case 500:
          alertError('Alerta', 'Error desconocido, verifica tu conexión a internet y reinicia la aplicación');
          break;
        case 404:
          alertError('Alerta', 'Error desconocido, verifica tu conexión a internet y reinicia la aplicación');
          break;
        case 403:
          alertError('Alerta', 'Usuario y contraseña no coinciden');
          break;
        default:
            alertError('Alerta', 'Error desconocido, verifica tu conexión a internet y reinicia la aplicación');
        }

      return $q.reject(response);
    }

    return function(promise) {
      return promise.then(success, error);
    }
}];

$httpProvider.responseInterceptors.push(interceptor);
})

.run(function($ionicPlatform, $rootScope, Auth, routingConfig) {
  $ionicPlatform.ready(function() {
    Auth.authClient();

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(navigator && navigator.notification){
      //navigator.notification.alert('Ganamos la prueba!', alertDismissed, 'Prueba', 'Aceptar');
    }
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(window.MobileAccessibility){
      $rootScope.access =  MobileAccessibility;
    }
    else{
    }
    });

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
  });
});
