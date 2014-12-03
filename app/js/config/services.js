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

  var errors = {
    400: {
      missing_fields: 'Solicitud incompleta'
    },
    403: {
      invalid_permissions: 'No tienes permiso para acceder a estos recursos.',
      is_evaluee: "User tries to identify itself as an evaluee, but it's not.",
      not_an_evaluee: "User tries to make a request enabled for evaluees, but is an evaluator.",
      is_evaluator: "User tries to identify itself as an evaluator, but it's not.",
      not_an_evaluator: "User tries to make a request enabled for evaluators, but is an evaluee.",
      not_evaluees: "Some users try to identify themselves as evaluees, but they are not.",
      test_unopened: "Este test aún no está abierto",
      unabled_institution: "User tries to do an operation over an existing institution where isn't related to.",
      insuficient_privileges: 'No tienes permiso para acceder a estos recursos',
      invalid_hotp_code: 'Clave de acceso inválida',
      invalid_grant: 'Usuario y contraseña no coinciden'
    },
    404: {
      no_active_groups: 'No hay grupos activos',
      no_active_period: 'No hay algún un periodo activo para este grupo',
      no_active_test: 'No hay test activos para este grupo',
      test_unavailable: 'La prueba seleccionada no está disponible',
      client_not_found: "Cliente de aplicación no encontrado",
      results_not_found: "Los resultados del evaluado son muy pocos para hacer una estadística o no se encontraron. Posiblemente el evaluado es inválido"
    }
  };

  return {
    responseError: function(response) {

      console.log(response);

      var message;

      if(response.status == 500){
          messsage = "Ha ocurrido un error en el servidor";
        }
        else if(errors[response.status]){
          if(errors[response.status][response.data.error.message]){
            message = errors[response.status][response.data.error.message];
          }
          else{
            message = 'Error desconocido, si este persigue contáctanos';
          }
        }
        else{
          message = 'Error desconocido, verifica tu conexión a internet y reinicia la aplicación';
        }

        alert(message);

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
