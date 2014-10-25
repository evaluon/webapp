angular.module('starter.services', [])

.factory('login', function($http) {

    var api = {
        login: function(){
            $http({
                method: '',
                url: ''
            });
        }
    };
    return {
        login: function(){

        }
    }
})
.constant('api', {
    devUrl: '',
    url: ''
})
.constant('access', {
    grantType: 'client_credentials',
    clientId: 'administrator',
    clientSecret: 'pCIS7ykLWaggP+94JzRa6Ls3bZMXkd+MSaInNNzdS3Q='
});
