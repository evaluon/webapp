angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/home.tpl.html","<ion-view title=\"Menú Principal\" hide-back-button=\"true\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Evaluación</h2>\n        <a ui-sref=\"evaluation\"><img src=\"./img/1.png\" alt=\"Encuentra las pruebas que debes presentar según su asignatura\"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Evalúate</h2>\n        <a ui-sref=\"evaluate\"><img src=\"./img/2.png\" alt=\"Reta tu conocimiento y prepárate para tus pruebas\"></a>\n      </div>\n    </div>\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Resultados</h2>\n        <a href=\"\"><img src=\"./img/3.png\" alt=\"Revisa el puntaje en poco tiempo y la retroalimentación para mejorar \"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Promedio Aprendizaje</h2>\n        <a href=\"\"><img src=\"./img/4.png\" alt=\"Conoce los avances de tus conocimiento\"></a>\n      </div>\n    </div>\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Configuraciones</h2>\n        <a href=\"\"><img src=\"./img/3.png\" alt=\"Configura tu aplicación\"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Cerrar Sesión</h2>\n        <a href=\"\" ng-click=\"logout()\"><img src=\"./img/4.png\" alt=\"Cierra esta sesión\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/login.tpl.html","<ion-view title=\"Iniciar Sesión\" hide-back-button=\"true\" >\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"login($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Correo</span>\n        <input type=\"email\" aria-describedby=\"login-user-input-text\" ng-model=\"user.username\" required>\n        <p id=\"login-user-input-text\" class=\"aria-description\">Ingrese el correo</p>\n      </label>\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Contraseña</span>\n        <input type=\"password\" aria-describedby=\"login-user-input-pass\" ng-model=\"user.password\" required>\n        <p id=\"login-user-input-pass\" class=\"aria-description\">Ingrese la contraseña</p>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Iniciar Sesion\" ng-model=\"user.password\">\n    </form>\n    <a ui-sref=\"registro\" ><button class=\"button button-block button-inci\">Registrarse</button></a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/registro.tpl.html","<ion-view title=\"Registro\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"registrar($event, user)\">\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Número de documento</span>\n        <input type=\"number\"  aria-describedby=\"registro-user-document\" ng-model=\"user.id\" ng-required required>\n        <p id= \"registro-user-document\" class=\"aria-description\">Digite su número de documento</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Nombres</span>\n        <input type=\"text\"  aria-describedby=\"registro-user-name\" ng-model=\"user.names\" ng-required required>\n        <p id= \"registro-user-name\" class=\"aria-description\">Digite su nombre</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Apellidos</span>\n        <input type=\"text\"  aria-describedby=\"registro-user-surname\" ng-model=\"user.last_name\" ng-required required>\n        <p id=\"registro-user-surname\" class=\"aria-description\">Digite sus apellidos</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Fecha de nacimiento</span>\n        <input type=\"date\"  aria-describedby=\"registro-user-birthdate\" ng-model=\"user.birth_date\" ng-required required>\n        <p id=\"registro-user-birthdate\" class=\"aria-description\">Ingrese su fecha de nacimiento</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" >Correo</span>\n        <input type=\"email\" aria-describedby=\"registro-user-mail\" ng-model=\"user.mail\" ng-required required>\n        <p id =\"registro-user-mail\" class=\"aria-description\">Digite su correo</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\" ng-required required>\n        <span class=\"input-label\">Contraseña</span>\n        <input type=\"password\" aria-describedby=\"registro-user-id\" ng-model=\"user.password\" ng-required required>\n        <span id =\"registro-user-id\" class=\"aria-description\">Por último, digite su contraseña</span>\n      </label>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Registrar\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/test.tpl.html","<ion-view title=\"Examen\">\n  <ion-content class=\"padding\">\n    <h2 id=\"testTitle\">Prueba de Biología - Colegio</h2>\n    <div class=\"card\">\n      <div class=\"item item-text-wrap\">\n        <br>\n        <h3>Tipos de preguntas</h3>\n        <p>En el examen se utilizan preguntas de selección múltiple con única respuesta y preguntas abiertas de respuesta corta.</p>\n        <p>Las preguntas de selección múltiple con única respuesta están conformadas por un enunciado, la formulación de una tarea de evaluación y cuatro opciones de respuesta, codificadas como A, B, C y D, de las cuales sólo una es correcta o válida dada la tarea planteada.</p>\n        <p>Las preguntas abiertas de respuesta corta no presentan opciones de respuesta. El estudiante construye (produce, elabora, escribe) una respuesta de acuerdo con la tarea que se le ha asignado, en el espacio definido.</p>\n        <p>Puedes desplazarte por las preguntas y respuestas, cuándo quieras responder acertadamente a una opción solo basta un doble click.</p>\n      </div>\n    </div>\n    <h2>Preguntas:</h2>\n    <div class=\"list card\" ng-repeat = \"question in questions\">\n\n      <div class=\"item\">\n        <h3>{{question.id}}.</h3>\n        <p>{{question.text}}</p>\n      </div>\n\n      <div class=\"item item-image\">\n      </div>\n\n      <div class=\"list\">\n\n        <label class=\"item item-radio\">\n          <input type=\"radio\" name=\"group\">\n          <div class=\"item-content\">\n            <p><strong>a.</strong>  {{question.answerOptions[0].text}}</p>\n          </div>\n          <i class=\"radio-icon ion-checkmark\"></i>\n        </label>\n        <label class=\"item item-radio\">\n          <input type=\"radio\" name=\"group\">\n          <div class=\"item-content\">\n            <p><strong>b.</strong>  {{question.answerOptions[1].text}}</p>\n          </div>\n          <i class=\"radio-icon ion-checkmark\"></i>\n        </label>\n        <label class=\"item item-radio\">\n          <input type=\"radio\" name=\"group\">\n          <div class=\"item-content\">\n            <p><strong>c.</strong>  {{question.answerOptions[2].text}}</p>\n          </div>\n          <i class=\"radio-icon ion-checkmark\"></i>\n        </label>\n        <label class=\"item item-radio\">\n          <input type=\"radio\" name=\"group\">\n          <div class=\"item-content\">\n            <p><strong>d.</strong>  {{question.answerOptions[3].text}}</p>\n          </div>\n          <i class=\"radio-icon ion-checkmark\"></i>\n        </label>\n      </div>\n    </div>\n    <button class=\"button button-full button-inci\">Verificar respuestas</button>\n    <a ui-sref=\"home\"><button class=\"button button-full button-inci\" ng-click=\"alert(\'Gracias\');\">Enviar</button></a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/groups.tpl.html","<ion-view title=\"Menu Grupos\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding\" ng-repeat=\"groups in rowGroups\">\n      <div class=\"col divIcon\" ng-repeat=\"group in groups\">\n        <h2 class=\"titleInci\">{{group.id}}</h2>\n        <a ui-sref=\"{{routes.test}}({id: {{group.id}}})\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"Colegio Inem de Bucaramamnga\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/institutions.tpl.html","<ion-view title=\"Instituciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding\" ng-repeat=\"institutes in rowInstitutes\">\n      <div class=\"col divIcon\" ng-repeat=\"institute in institutes\">\n        <h2 class=\"titleInci\">{{institute.name}}</h2>\n        <a ui-sref=\"{{routes.groups}}({id: {{institute.id}}})\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"Colegio Inem de Bucaramamnga\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/knowledge-area.tpl.html","<ion-view title=\"Areas de Conocimiento\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding\" ng-repeat=\"tests in rowTestsDetails\">\n      <div class=\"col divIcon\" ng-repeat=\"test in tests\">\n\n        <h2 class=\"titleInci\">{{test.id}}</h2>\n        <a ui-sref=\"{{routes.test}}({id: {{routes.testId}}, area: {{\'test.id\'}} })\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"{{test.description}}\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/test.tpl.html","<ion-view title=\"Examen de {{params.area}}\">\n  <ion-content class=\"padding\">\n    <div class=\"card\">\n      <div class=\"item item-text-wrap\">\n        <h3>Examen evaluon</h3>\n        <p>Ten en cuenta que el examen se anulará al cerrar la aplicación</p>\n        <br>\n        <h3>Tipos de preguntas</h3>\n        <p>En el examen se utilizan preguntas de selección múltiple con única respuesta y preguntas abiertas de respuesta corta.</p>\n        <p>Las preguntas de selección múltiple con única respuesta están conformadas por un enunciado, la formulación de una tarea de evaluación y cuatro opciones de respuesta, codificadas como A, B, C y D, de las cuales sólo una es correcta o válida dada la tarea planteada.</p>\n        <p>Las preguntas abiertas de respuesta corta no presentan opciones de respuesta. El estudiante construye (produce, elabora, escribe) una respuesta de acuerdo con la tarea que se le ha asignado, en el espacio definido.</p>\n        <p>Puedes desplazarte por las preguntas y respuestas, cuándo quieras responder acertadamente a una opción solo basta un doble click.</p>\n      </div>\n    </div>\n    <h2>Preguntas:</h2>\n\n    <div class=\"list\">\n      <div class=\"answer\" ng-repeat=\"question in questions\">\n        <div class=\"item item-divider\">\n          <h3 id =\"answer-{{$index}}\">{{$index + 1}}.</h3>\n          <p>{{question.description_text}}</p>\n        </div>\n        <ion-radio ng-repeat =\" answer in question.answers\" ng-value=\"\'{{answer.id}}\'\" ng-model=\"question.answer\"   name=\"answer{{answer.id}}\"><p><strong>{{\'abcdefghijklmnopqrstuvwxyz\'[$index]}}.</strong>  {{answer.description_text}} </p></ion-radio>\n      </div>\n    </div>\n\n    <!--<div class=\"list card\" ng-repeat = \"question in questions\">\n      <div class=\"item\">\n        <h3 id =\"answer-{{$index}}\">{{$index + 1}}.</h3>\n        <p>{{question.description_text}}</p>\n      </div>\n\n      <div class=\"list\">\n        <ion-radio ng-model=\"question.answer\" ng-repeat =\" answer in question.answers\" ng-value=\"\'{{answer.id}}\'\" ><p><strong>{{\'abcdefghijklmnopqrstuvwxyz\'[$index]}}.</strong>  {{answer.description_text}} </p></ion-radio>\n      </div>\n    </div>-->\n\n    <button class=\"button button-full button-inci\" ng-click=\"verifyAnswers()\">Preguntas no contestadas</button>\n    <button class=\"button button-full button-inci\" ng-click=\"rollbackAnswers()\" ng-if=\"rollbackAnswersFlag\">Volver al original</button>\n    <button class=\"button button-full button-inci\" ng-click=\"sendAnswers()\">Enviar</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/tests.tpl.html","<ion-view title=\"Evaluaciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding\" ng-repeat=\"tests in rowTests\">\n      <div class=\"col divIcon\" ng-repeat=\"test in tests\">\n\n        <h2 class=\"titleInci\">{{test.id}}</h2>\n        <a ui-sref=\"{{routes.testsDetails}}({id: {{test.id}}})\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"{{test.description}}\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");}]);