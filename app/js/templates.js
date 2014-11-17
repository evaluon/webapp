angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/home.tpl.html","<ion-view title=\"Menú Principal\" hide-back-button=\"true\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <h2>Evaluación</h2>\n        <a ui-sref=\"evaluation\"><img src=\"./img/1.png\" alt=\"Encuentra las pruebas que debes presentar según su asignatura\"></a>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <h2>Evalúate</h2>\n        <a ui-sref=\"selfEvaluation\"><img src=\"./img/2.png\" alt=\"Reta tu conocimiento y prepárate para tus pruebas\"></a>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <h2>Resultados</h2>\n        <a ui-sref=\"resultsInstitutes\"><img src=\"./img/3.png\" alt=\"Revisa el puntaje en poco tiempo y la retroalimentación para mejorar \"></a>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <h2>Promedio Aprendizaje</h2>\n        <a ui-sref=\"indicators\"><img src=\"./img/4.png\" alt=\"Conoce los avances de tus conocimiento\"></a>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <h2>Configuraciones</h2>\n        <a ui-sref=\"configurations\"><img src=\"./img/3.png\" alt=\"Configura tu aplicación\"></a>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <h2>Cerrar Sesión</h2>\n        <a href=\"\" ng-click=\"logout()\"><img src=\"./img/4.png\" alt=\"Cierra esta sesión\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/login.tpl.html","<ion-view title=\"Iniciar Sesión\" hide-back-button=\"true\" >\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"login($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Correo</span>\n        <input type=\"email\" aria-describedby=\"login-user-input-text\" ng-model=\"user.username\" required>\n        <p id=\"login-user-input-text\" class=\"aria-description\">Ingrese el correo</p>\n      </label>\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Contraseña</span>\n        <input type=\"password\" aria-describedby=\"login-user-input-pass\" ng-model=\"user.password\" required>\n        <p id=\"login-user-input-pass\" class=\"aria-description\">Ingrese la contraseña</p>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Iniciar Sesion\" ng-model=\"user.password\">\n    </form>\n    <a ui-sref=\"registro\" ><button class=\"button button-block button-inci\">Registrarse</button></a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/registro.tpl.html","<ion-view title=\"Registro\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"registrar($event, user)\">\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Número de documento</span>\n        <input type=\"number\"  aria-describedby=\"registro-user-document\" ng-model=\"user.id\" ng-required required>\n        <p id= \"registro-user-document\" class=\"aria-description\">Digite su número de documento</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Nombres</span>\n        <input type=\"text\"  aria-describedby=\"registro-user-name\" ng-model=\"user.names\" ng-required required>\n        <p id= \"registro-user-name\" class=\"aria-description\">Digite su nombre</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Apellidos</span>\n        <input type=\"text\"  aria-describedby=\"registro-user-surname\" ng-model=\"user.last_name\" ng-required required>\n        <p id=\"registro-user-surname\" class=\"aria-description\">Digite sus apellidos</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Fecha de nacimiento</span>\n        <input type=\"date\"  aria-describedby=\"registro-user-birthdate\" ng-model=\"user.birth_date\" ng-required required>\n        <p id=\"registro-user-birthdate\" class=\"aria-description\">Ingrese su fecha de nacimiento</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Nivel de formación</span>\n        <ion-radio ng-repeat=\"disabilitie in disabilities\" ng-model=\"user.evaluee.disability_id\" ng-value=\"{{disabilitie.id}}\" name=\"disabilities\">{{disabilitie.description}}</ion-radio>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Condición visual</span>\n        <ion-radio ng-repeat=\"type in types\" ng-model=\"user.evaluee.evaluee_type\" ng-value=\"{{type.id}}\" name=\"types\">{{type.description}}</ion-radio>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Tipo de usuario</span>\n        <ion-radio ng-repeat=\"level in levels\" ng-model=\"user.evaluee.level_id\" ng-value=\"{{level.id}}\" name=\"levels\">{{level.description}}</ion-radio>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" >Correo</span>\n        <input type=\"email\" aria-describedby=\"registro-user-mail\" ng-model=\"user.mail\" ng-required required>\n        <p id =\"registro-user-mail\" class=\"aria-description\">Digite su correo</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\" ng-required required>\n        <span class=\"input-label\">Contraseña</span>\n        <input type=\"password\" aria-describedby=\"registro-user-id\" ng-model=\"user.password\" ng-required required>\n        <span id =\"registro-user-id\" class=\"aria-description\">Por último, digite su contraseña</span>\n      </label>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Registrar\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/changePassword.tpl.html","<ion-view title=\"Cambiar contraseña\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"changePassword($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Nueva contraseña</span>\n        <input type=\"password\" aria-describedby=\"login-user-input-pass\" ng-model=\"user.password1\" required>\n        <p id=\"login-user-input-pass\" class=\"aria-description\">Ingrese la nueva contraseña</p>\n      </label>\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Repite la contraseña</span>\n        <input type=\"password\" aria-describedby=\"login-user-input-pass\" ng-model=\"user.password2\" required>\n        <p id=\"login-user-input-pass\" class=\"aria-description\">Ingrese de nuevo la nueva contraseña</p>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Cambiar contraseña\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/configurations.tpl.html","<ion-view title=\"Configuraciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <h2>Cambiar contraseña</h2>\n        <a ui-sref=\"configurations-changePassword\"><img src=\"./img/1.png\" alt=\"Cambia tu contraseña\"></a>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <h2>Ayuda</h2>\n        <a ui-sref=\"configurations-help\"><img src=\"./img/2.png\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <h2>Acerca de</h2>\n        <a ui-sref=\"configurations-about\"><img src=\"./img/3.png\" alt=\"\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/errors/403.tpl.html","<ion-view title=\"403\">\n  <ion-content class=\"padding\">\n    <span>No tienes permisos para acceder a este contenido</span>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/errors/404.tpl.html","<ion-view title=\"404\">\n  <ion-content class=\"padding\">\n    <span>Recursos no encontrados</span>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/groups.tpl.html","<ion-view title=\"Menu Grupos\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"groups in rowGroups\">\n      <div class=\"col divIcon item-avatar\" ng-repeat=\"group in groups\">\n        <h2 class=\"titleInci\">{{group.id}}</h2>\n        <a ui-sref=\"{{routes.test}}({id: {{group.id}}})\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"Colegio Inem de Bucaramamnga\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/institutions.tpl.html","<ion-view title=\"Instituciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"institutes in rowInstitutes\">\n      <div class=\"col divIcon item-avatar\" ng-repeat=\"institute in institutes\">\n        <h2 class=\"titleInci\">{{institute.name}}</h2>\n        <a ui-sref=\"{{routes.groups}}({id: {{institute.id}}})\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"Colegio Inem de Bucaramamnga\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/knowledge-area.tpl.html","<ion-view title=\"Areas de Conocimiento\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"tests in rowTestsDetails\">\n      <div class=\"col divIcon item-avatar\" ng-repeat=\"test in tests\">\n\n        <h2 class=\"titleInci\">{{test.id}}</h2>\n        <a ui-sref=\"{{routes.test}}({id: {{routes.testId}}, area: {{\'test.id\'}} })\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"{{test.description}}\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/password.tpl.html","<ion-view title=\"Contraseña\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"loginTest($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Contraseña</span>\n        <input type=\"number\" aria-describedby=\"login-user-input-text\" ng-model=\"password.data\" required>\n        <p id=\"login-user-input-text\" class=\"aria-description\">Ingrese la contraseña de el examen</p>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Iniciar Examen\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/test.tpl.html","<ion-view title=\"Examen de {{params.area}}\">\n  <ion-content class=\"padding\">\n    <div class=\"card\">\n      <div class=\"item item-text-wrap\">\n        <h3>Examen evaluon</h3>\n        <p>Ten en cuenta que el examen se anulará al cerrar la aplicación</p>\n        <br>\n        <h3>Tipos de preguntas</h3>\n        <p>En el examen se utilizan preguntas de selección múltiple con única respuesta y preguntas abiertas de respuesta corta.</p>\n        <p>Las preguntas de selección múltiple con única respuesta están conformadas por un enunciado, la formulación de una tarea de evaluación y cuatro opciones de respuesta, codificadas como A, B, C y D, de las cuales sólo una es correcta o válida dada la tarea planteada.</p>\n        <p>Las preguntas abiertas de respuesta corta no presentan opciones de respuesta. El estudiante construye (produce, elabora, escribe) una respuesta de acuerdo con la tarea que se le ha asignado, en el espacio definido.</p>\n        <p>Puedes desplazarte por las preguntas y respuestas, cuándo quieras responder acertadamente a una opción solo basta un doble click.</p>\n      </div>\n    </div>\n    <h2>Preguntas:</h2>\n\n    <div class=\"list\">\n      <div class=\"answer\" ng-repeat=\"question in questions\">\n        <div class=\"item\">\n          <h3 id =\"answer-{{$index}}\">{{$index + 1}}.</h3>\n          <p>{{question.description_text}}</p>\n        </div>\n        <div class=\"row padding item\" ng-if=\"question.image\">\n          <div class=\"col divIcon item-avatar\" >\n            <img src=\"{{question.image.location}}\" alt=\"{{question.image.description}}\">\n          </div>\n        </div>\n        <label ng-if=\"question.open == 1\" class=\"item item-input\">\n          <textarea placeholder=\"Ingrese su respuesta\" ng-model=\"question.answer\"></textarea>\n        </label>\n        <ion-radio if=\"question.open == 0\"ng-repeat =\" answer in question.answers\" ng-value=\"\'{{answer.id}}\'\" ng-model=\"question.answer\"   name=\"answer{{answer.id}}\"><p><strong>{{\'abcdefghijklmnopqrstuvwxyz\'[$index]}}.</strong>  {{answer.description_text}} </p></ion-radio>\n      </div>\n    </div>\n\n    <!--<div class=\"list card\" ng-repeat = \"question in questions\">\n      <div class=\"item\">\n        <h3 id =\"answer-{{$index}}\">{{$index + 1}}.</h3>\n        <p>{{question.description_text}}</p>\n      </div>\n\n      <div class=\"list\">\n        <ion-radio ng-model=\"question.answer\" ng-repeat =\" answer in question.answers\" ng-value=\"\'{{answer.id}}\'\" ><p><strong>{{\'abcdefghijklmnopqrstuvwxyz\'[$index]}}.</strong>  {{answer.description_text}} </p></ion-radio>\n      </div>\n    </div>-->\n\n    <button class=\"button button-full button-inci\" ng-click=\"verifyAnswers()\">Preguntas no contestadas</button>\n    <button class=\"button button-full button-inci\" ng-click=\"rollbackAnswers()\" ng-if=\"rollbackAnswersFlag\">Volver al original</button>\n    <button class=\"button button-full button-inci\" ng-click=\"sendAnswers()\">Enviar</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/tests.tpl.html","<ion-view title=\"Evaluaciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"tests in rowTests\">\n      <div class=\"col divIcon item-avatar\" ng-repeat=\"test in tests\">\n\n        <h2 class=\"titleInci\">{{test.id}}</h2>\n        <a ui-sref=\"{{routes.testsDetails}}({id: {{test.id}}})\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"{{test.description}}\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/indicators/indicators.tpl.html","<ion-view title=\"Promedio de Aprendizaje\">\n  <ion-content class=\"padding\">\n    <div class=\"list card\">\n\n      <div class=\"item item-avatar\">\n        <h2>{{user.first_name}} {{user.last_name}}</h2>\n        <p> Desde: {{user.register_date | date: \'MMM d, yyyy\' : \'cot\'}}</p>\n      </div>\n\n      <div class=\"item item-body\">\n        <img class=\"full-image\" src=\"img/1.png\" alt=\"Grado {{levels[indicators.levelName]}}\">\n        <p>\n          Grado {{levels[indicators.levelName]}}, descripción\n        </p>\n      </div>\n\n      <a class=\"item item-icon-left assertive\" href=\"\">\n        <i class=\"icon ion-checkmark-round\"></i>\n          {{indicators.questions}} Preguntas acertadas\n      </a>\n      <a class=\"item item-icon-left assertive\" href=\"\">\n        <i class=\"icon ion-ios7-star-half\"></i>\n          {{indicators.remainingQuestions}} Preguntas para el próximo grado\n      </a>\n\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/results/institutions.tpl.html","<ion-view title=\"Instituciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"institutes in rowInstitutes\">\n      <div class=\"col divIcon item-avatar\" ng-repeat=\"institute in institutes\">\n        <h2 class=\"titleInci\">{{institute.name}}</h2>\n        <a  ui-sref=\"results({id: {{institute.id}}})\"><img src=\"http://devbool.blob.core.windows.net/evaluon/7.png\" alt=\"Colegio Inem de Bucaramamnga\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/results/results.tpl.html","<ion-view title=\"Resultados\">\n  <ion-content >\n    <div class=\"list\">\n      <a class=\"item item-avatar\" ng-repeat=\"result in results\">\n        <img src=\"http://cdn.boolinc.co/evaluon/7.png\" alt=\"Area de {{area.areaName}}\">\n        <h2>{{result.description}}</h2>\n        <p>Resultado: {{result.note}}</p>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n");}]);