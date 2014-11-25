'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
'ionic',
'config.services',
'starter.controllers',
'starter.services',
'app.templates',
'starter.evaluation.controllers',
'starter.evaluation.services',
'starter.selfEvaluation.controllers',
'starter.selfEvaluation.services',
'starter.results.controllers',
'starter.results.services',
'starter.configuration.controllers',
'starter.configuration.services',
'starter.indicators.controllers',
'starter.indicators.services',
'LocalStorageModule'
])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, routingConfigProvider, localStorageServiceProvider, $httpProvider){

  //Routing
  //Public routes
  $stateProvider
  .state('404',{
    url: '/404',
    templateUrl: 'views/errors/404.tpl.html',
    data: {
      access: routingConfigProvider.accessLevels.public
    }
  })
  .state('403',{
    url: '/403',
    templateUrl: 'views/errors/403.tpl.html',
    data: {
      access: routingConfigProvider.accessLevels.public
    }
  });

  //Anon routes
  $stateProvider
  .state('login', {
    url: '/login',
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
  })
  .state('auth', {
    url: '/auth',
    controller: 'AuthCtrl',
    data: {
      access: routingConfigProvider.accessLevels.anon
    }
  });

  //User routes
  $stateProvider
  .state('home', {
    url: '/',
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
  .state('evaluation-password', {
    url: '/evaluation/password/:id',
    templateUrl: 'views/evaluation/password.tpl.html',
    controller: 'EvaluationPasswordCtrl',
    data: {
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

  // Self Evaluation routes

  $stateProvider
  .state('selfEvaluation',{
    url:'/evaluate/tests',
    templateUrl: 'views/evaluation/tests.tpl.html',
    controller: 'SelfEvaluationTestsCtrl',
    data:{
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('selfEvaluation-knowledge-area', {
    url: '/evaluate/knowledge-area/:id',
    templateUrl: 'views/evaluation/knowledge-area.tpl.html',
    controller: 'SelfEvaluationKnowledgeAreaCtrl',
    data:{
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('selfEvaluation-test-area', {
    url: '/evaluate/test/:id/area/:area',
    templateUrl: 'views/evaluation/test.tpl.html',
    controller: 'SelfEvaluationTestCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  });

  //Results routes
  $stateProvider
  .state('resultsInstitutes',{
    url:'/results-institutes',
    templateUrl:'views/results/institutions.tpl.html',
    controller: 'ResultsInstitutesCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('results',{
    url:'/results/:id',
    templateUrl:'views/results/results.tpl.html',
    controller: 'ResultsCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  });

  //Indicators routes
  $stateProvider
  .state('indicators',{
    url: '/indicators',
    templateUrl: 'views/indicators/indicators.tpl.html',
    controller: 'IndicatorsCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  });

  //Configuration routes
  $stateProvider
  .state('configurations', {
    url: '/configurations',
    templateUrl: 'views/configurations/configurations.tpl.html',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  })
  .state('configurations-changePassword', {
    url: '/configurations-changePassword',
    templateUrl: 'views/configurations/changePassword.tpl.html',
    controller: 'ChangePasswordCtrl',
    data: {
      access: routingConfigProvider.accessLevels.user
    }
  });

  $urlRouterProvider.otherwise('/404');
  $locationProvider.html5Mode(false);

  //Local Storage conf
  localStorageServiceProvider
  .setPrefix('Evaluon');

//Interceptor
$httpProvider.interceptors.push('httpInterceptor');
})

.run(function($ionicPlatform, $state, $rootScope, Auth, access, localStorageService) {
  $ionicPlatform.ready(function() {
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

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams){

      if(!localStorageService.isSupported) {
        alert('Tu equipo no es compatible con esta aplicación');
      }

      var ctoken = CryptoJS.SHA1(access.tokens.client).toString();
      if(!localStorageService.get(ctoken)){
        Auth.authClient().then(function(token){
          localStorageService.set(ctoken, token);
        });
      }

      if(!(toState.name === '404' || toState.name === '403')){
        if(!(toState.name === 'login' || toState.name === 'registro' || toState.name === '404') && !Auth.userLogged()){
          event.preventDefault();
          $state.go('403');
        }
        if((toState.name === 'login' || toState.name ==='registro') && Auth.userLogged()){
            event.preventDefault();
            $state.go('home');
          }
      }

    });


});
