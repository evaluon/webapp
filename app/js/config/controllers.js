'use strict';

angular.module('config.controllers', [])
.controller('AuthCtrl', function($state, Auth, access, localStorageService){

    var rtoken = CryptoJS.SHA1(access.tokens.redirect).toString(),
        utoken = CryptoJS.SHA1(access.tokens.user).toString(),
        ptoken = CryptoJS.SHA1(access.tokens.params).toString(),

        redirect = localStorageService.get(rtoken),
        user = localStorageService.get(utoken);

        if((redirect.name == "auth") || (redirect.name == "login" && user)) {
        $state.go('home');
    } else if(redirect.data.access & user.role){
        $state.go(redirect.name, localStorageService.get(ptoken) || {});
    } else {
        $state.go('403');
    }
}
);
