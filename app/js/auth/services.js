'use strict';
angular.module('starter.services', [])

.factory('Auth', function($http, $ionicLoading, $ionicPopup, $state, $alert, localStorageService, api, access, routingConfig) {

    var uToken = localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString());

    var API = {
        authClient: function(data){
            return $http({
                method: 'post',
                url: api.url + api.login,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param(data)
            }).then(function(data){
                return data.data;
            });
        },
        login: function(data){
            data.grant_type = 'password';
            return $http({
                method: 'post',
                url: api.url + api.login,
                headers:{
                    'Authorization' : localStorageService.get(CryptoJS.SHA1(access.tokens.client).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.client).toString()).access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param(data)
            });
        },
        createUser: function(data){
            return $http({
                method: 'post',
                url: api.url + api.user,
                headers:{
                    'Authorization' : localStorageService.get(CryptoJS.SHA1(access.tokens.client).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.client).toString()).access_token,
                    'Content-Type': 'application/json'
                },
                data: data
            });
        },
        createEvaluee: function(data){
            return $http({
                method: 'post',
                url: api.url + api.evaluee,
                headers: {
                    'Authorization' : localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
                    'Content-Type': 'application/json'
                },
                data: data
            });
        },
        recoverPassword: function(mail){

            return $http({
                method: 'delete',
                url: api.url + api.user,
                headers: {
                    Authorization: localStorageService.get(CryptoJS.SHA1(access.tokens.client).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.client).toString()).access_token,
                    'Content-Type': 'application/json'
                },
                data: {
                    mail: mail
                }
            });
        }
    };

    var error = function(error){
        $ionicLoading.hide();
    };

    return {
        authClient: function(){
            $ionicLoading.show({
                template: 'Cargando...'
            });

            return API.authClient(access.client).then(function(success){
                $ionicLoading.hide();
                localStorageService.set(CryptoJS.SHA1(access.tokens.client), success.data);
                return success;
            });
        },
        isAuth: function(){

        },
        isLoggedIn: function(){
            if(localStorageService.get(CryptoJS.SHA1(access.tokens.client).toString())){
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
                localStorageService.set(CryptoJS.SHA1(access.tokens.user).toString(), success.data);
                $state.go('home');
            };
            var error = function(error){
                $ionicLoading.hide();
            };
            var data = {
                grant_type:'password',
                username: username,
                password: CryptoJS.SHA1(password).toString()
            }
            API.login(data).then(success,error);
        },
        createUser: function(data, dataEvaluee){
            $ionicLoading.show({
                template: 'Cargando...'
            });

            API.createUser(data).then(function(success){
                var loginData = {
                    username: data.mail,
                    password: data.password
                };
                API.login(loginData).then(function(success){
                    success.data.role = routingConfig.userRoles.user;
                    localStorageService.set(CryptoJS.SHA1(access.tokens.user).toString(), success.data);
                    API.createEvaluee(dataEvaluee).then(function(success){
                        $ionicLoading.hide();
                        $alert.show('Exito', 'Usuario creado satisfactoriamente');
                        $state.go('home');
                    }).catch(function(error){
                        $ionicLoading.hide();
                    });
                }).catch(function(error){
                    $ionicLoading.hide();
                });

            }).catch(function(error){
                $ionicLoading.hide();
            });
        },
        recoverPassword: function(mail){

            $ionicLoading.show({
                template: 'Cargando...'
            });

            return API.recoverPassword(mail).then(function(success){
                $ionicLoading.hide();

                return success;
            }).catch(function(error){
                $ionicLoading.hide();
            });
        },
        logout: function(){
            localStorageService.remove(CryptoJS.SHA1(access.tokens.user).toString());
            $state.go('login');
        },
        userLogged: function(){
            return localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString());
        }
    };
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
});
