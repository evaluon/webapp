angular.module('starter.services', [])

.factory('Auth', function($http, $ionicLoading, api, access, $state) {

    var API = {
        authClient: function(success, error, data){
            $http({
                method: 'post',
                url: api.url + api.credentials,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param(data)
            }).success(success).error(error);
        },
        login: function(success, error, data){
            $http({
                method: ''
            });
        }
    };

    return {
        authClient: function(){
            $ionicLoading.show({
                template: 'Cargando...'
            });

            var success = function(success){
                $ionicLoading.hide();
                console.log('success ' + success);
            };
            var error = function(error){
                $ionicLoading.hide();
                console.log('error ' + error);
            };

            API.authClient(success, error, access);
        },
        auth: function(user, password){
            $ionicLoading.show({
                template: 'Cargando...'
            });

            var success = function(success){
                $ionicLoading.hide();
                console.log('success ' + success);
                $state.go('home');
            };
            var error = function(error){
                $ionicLoading.hide();
                console.log('error ' + error);
            };
        }
    }
})
.constant('api', {
    devUrl: '',
    url: 'http://evaluon.boolinc.co:80',
    credentials: '/auth/token',
})
.constant('access', {
    grantType: 'client_credentials',
    clientId: 'administrator',
    clientSecret: 'tM/k1rfbPG168en8RllBUmMMbVbLI5k2sFgvGFjKkeM='
});
