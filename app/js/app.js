// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'app.templates'])

.run(function($ionicPlatform, $rootScope, Auth) {


  $ionicPlatform.ready(function() {
    Auth.authClient();
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
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
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

  .state('login', {
      url: '/',
      templateUrl: "views/login.tpl.html",
      controller: 'LoginCtrl'
  })
  .state('registro', {
      url: '/registro',
      templateUrl: 'views/registro.tpl.html',
      controller: 'RegistroCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.tpl.html',
    controller: 'HomeCtrl'
  })
  .state('evaluacion-menu', {
    url: '/evaluacion-menu',
    templateUrl: 'views/evaluacion-menu.tpl.html'
  })
  .state('evaluacion-materias', {
    url: '/evaluacion-materia',
    templateUrl: 'views/evaluacion-materia.tpl.html'
  })
  .state('test', {
    url: '/test',
    templateUrl: 'views/test.tpl.html',
    controller: 'TestCtrl'
  });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(false);
});
