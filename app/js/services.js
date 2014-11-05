'use strict';
angular.module('starter.services', [])

.factory('Auth', function($http, $ionicLoading, $ionicPopup, $state, localStorageService, api, access, routingConfig) {

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
            console.log(data);
            return $http({
                method: 'post',
                url: api.url + api.evaluee,
                headers: {
                    'Authorization' : localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).token_type + ' ' + localStorageService.get(CryptoJS.SHA1(access.tokens.user).toString()).access_token,
                    'Content-Type': 'application/json'
                },
                data: data
            });
        }
    };

    var error = function(error){
        $ionicLoading.hide();
        /*var alertPopup = $ionicPopup.alert({
            title: 'Alerta',
            template: 'Error desconocido, verifica tu conexión a internet',
            okType: 'button-inci'
        });*/
    };

    return {
        authClient: function(){
            $ionicLoading.show({
                template: 'Cargando...'
            });

            var success = function(success){
                $ionicLoading.hide();
                localStorageService.set(CryptoJS.SHA1(access.tokens.client), success.data);
            };

            API.authClient(access.client).then(success,error);
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
                /*var alertPopup = $ionicPopup.alert({
                    title: 'Alerta',
                    template: 'Correo o contraseña incorrectos',
                    okType: 'button-inci'
                });*/
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
                        alert('Usuario creado satisfactoriamente');
                        $state.go('home');
                    }).catch(function(error){
                        $ionicLoading.hide();
                        console.log(error);
                    });
                }).catch(function(error){
                    $ionicLoading.hide();
                    console.log(error)
                });

            }).catch(function(error){
                $ionicLoading.hide();
                console.log(error);
            })
        },
        logout: function(){
            localStorageService.remove(CryptoJS.SHA1(access.tokens.user).toString());
            $state.go('login');
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
    institution: '/institution',
    group: '/group',
    test: '/test',
    knowledgeArea: '/knowledgearea',
    testQuestions: '/question',
    response: '/response',
    user: '/user',
    result: '/results',
    evaluee: '/evaluee'
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
