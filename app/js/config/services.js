'use strict';

angular.module('config.services', [])
.factory('httpInterceptor', function($q){

  var alertError = function (title, message){
    if(navigator && navigator.notification){
      navigator.notification.alert(message, alertDismissed, title, 'Aceptar');
    }
    else{
      alert(message);
    }
  };

  var errors ={
    500: 'Error desconocido, verifica tu conexión a internet y reinicia la aplicación',
    404: 'Recurso no encontrado',
    403: 'Usuario y contraseña no coinciden'
  };

  return {
    responseError: function(response) {
          if(errors[response.status]) alertError('Alerta', errors[response.status]);
          else alertError('Alerta', 'Error desconocido, verifica tu conexión a internet y reinicia la aplicación');
          return $q.reject(response);
    }
  };

})

.constant('api', {
    url3: 'http://localhost:3004',
    url2: 'http://192.168.43.171:3004',
    url: 'http://evaluon.boolinc.co:80',
    login: '/auth/token',
    institution: '/institution',
    group: '/group',
    test: '/test',
    self: '/self',
    knowledgeArea: '/knowledgearea',
    testQuestions: '/question',
    response: '/response',
    user: '/user',
    result: '/results',
    evaluee: '/evaluee',
    close: '/close',
    open: '/open',
    indicator: '/indicator',
    active: '/active',
    id: function(id){
      return '/' + id;
    }
})
.constant('access', {
    client: {
        grant_type: 'client_credentials',
        client_id: 'administrator',
        client_secret: 'kv0Ls8xoIFPdE2GXMK5fodQsAEBV5GzzINZOA0NX99E=',
    },
    tokens: {
        client: 'alv236c0',
        user: 'ams43ksl',
        redirect: 'qoelzc',
        params: 'amco194'
    }
});
