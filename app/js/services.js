'use strict';
angular.module('starter.services', [])

.factory('Auth', function($http, $ionicLoading, $ionicPopup, $state, api, access, ipCookie, routingConfig) {

    var API = {
        authClient: function(data){
            return $http({
                method: 'post',
                url: api.url + api.login,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param(data)
            });
        },
        login: function(data){
            console.log('cookie');
            console.log(ipCookie(CryptoJS.SHA1(access.tokens.client).toString()).token_type);
            return $http({
                method: 'post',
                url: api.url + api.login,
                headers:{
                    'Authorization' : ipCookie(CryptoJS.SHA1(access.tokens.client).toString()).token_type + ' ' + ipCookie(CryptoJS.SHA1(access.tokens.client).toString()).access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param(data)
            });
        }
    };

    var error = function(error){
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
            title: 'Alerta',
            template: 'Error desconocido, verifica tu conexión a internet',
            okType: 'button-inci'
        });
    };

    return {
        authClient: function(){
            $ionicLoading.show({
                template: 'Cargando...'
            });

            var success = function(success){
                $ionicLoading.hide();
                ipCookie(CryptoJS.SHA1(access.tokens.client).toString(), success.data, { expires: 30 });
            };

            API.authClient(access.client).then(success,error);
        },
        isAuth: function(){

        },
        isLoggedIn: function(){
            if(ipCookie(CryptoJS.SHA1(access.tokens.client).toString())){
                return true;
            }
            else{
                return false;
            }
        },
        login: function(username, password){
            $ionicLoading.show({
                template: 'Cargando...'
            });

            var success = function(success){
                $ionicLoading.hide();
                success.data.role = routingConfig.userRoles.user;
                ipCookie(CryptoJS.SHA1(access.tokens.user).toString(), success.data, { expires: 30 });
                $state.go('home');
            };
            var error = function(error){
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: 'Alerta',
                    template: 'Correo o contraseña incorrectos',
                    okType: 'button-inci'
                });
            };
            var data = {
                grant_type:'password',
                username: username,
                password: CryptoJS.SHA1(password).toString()
            }
            API.login(data).then(success,error);
        }
    }
})
.provider('routingConfig', function routingConfig(){
    this.userRoles = {
        public: 1,
        user: 2,
        admin: 4
    };
    this.accessLevels = {
        public: this.userRoles.public | this.userRoles.user | this.userRoles.admin,
        anon: this.userRoles.public,
        user: this.userRoles.user | this.userRoles.admin,
        admin: this.userRoles.admin
    };

    this.$get = function(){
        var that = this;
        return {
            userRoles: that.userRoles,
            accessLevels: that.accessLevels
        };
    };
})
.constant('api', {
    url2: 'http://192.168.43.171:3004',
    url: 'http://evaluon.boolinc.co:80',
    login: '/auth/token',
})
.constant('access', {
    client: {
        grant_type: 'client_credentials',
        client_id: 'administrator',
        client_secret: 'kv0Ls8xoIFPdE2GXMK5fodQsAEBV5GzzINZOA0NX99E=',
    },
    tokens: {
        client: 'alv236c0',
        user: 'ams43ksl'
    }
});
