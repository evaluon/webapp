angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/auth/home.tpl.html","<ion-view title=\"Menú Principal\" hide-back-button=\"true\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <h2>Evaluación</h2>\n        <a ui-sref=\"evaluation\"><img src=\"./img/1.svg\" alt=\"Encuentra las pruebas que debes presentar según su asignatura\"></a>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <h2>Evalúate</h2>\n        <a ui-sref=\"selfEvaluation\"><img src=\"./img/2.svg\" alt=\"Reta tu conocimiento y prepárate para tus pruebas\"></a>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <h2>Resultados</h2>\n        <a ui-sref=\"resultsInstitutes\"><img src=\"./img/3.svg\" alt=\"Revisa el puntaje en poco tiempo y la retroalimentación para mejorar \"></a>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <h2>Promedio Aprendizaje</h2>\n        <a ui-sref=\"indicators\"><img src=\"./img/4.svg\" alt=\"Conoce los avances de tus conocimiento\"></a>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <h2>Configuraciones</h2>\n        <a ui-sref=\"configurations\"><img src=\"./img/5.svg\" alt=\"Configura tu aplicación\"></a>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <h2>Cerrar Sesión</h2>\n        <a href=\"\" ng-click=\"logout()\"><img src=\"./img/9.svg\" alt=\"Cierra esta sesión\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/auth/login.tpl.html","<ion-view title=\"Iniciar Sesión\" hide-back-button=\"true\" >\n  <ion-content class=\"padding\">\n    <form class=\"list\" name=\"loginForm\" ng-submit=\"login($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Correo</span>\n        <input type=\"email\" aria-describedby=\"login-user-input-text\" ng-model=\"user.username\" required>\n        <p id=\"login-user-input-text\" class=\"aria-description\">Ingrese el correo</p>\n      </label>\n      <input type=\"submit\" ng-disabled=\"loginForm.$invalid\" class=\"button button-block button-inci\" value=\"Iniciar Sesion\" ng-model=\"user.password\">\n    </form>\n    <a ui-sref=\"registro\" ><button class=\"button button-block button-inci\">Registrarse</button></a>\n    <a ui-sref=\"recover\" ><button class=\"button button-block button-inci\">Olvidaste la contraseña</button></a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/auth/recover.tpl.html","<ion-view title=\"Recordar contraseña\">\n    <ion-content class=\"padding\">\n        <form class=\"list\" name=\"recoverForm\" ng-submit=\"recover($event)\">\n            <label for=\"email\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\" >Correo</span>\n                <input name=\"email\" ng-pattern=\"/^[a-z][\\w.-]+@\\w[\\w.-]+\\.[\\w.-]*[a-z][a-z]$/i\" type=\"email\" aria-describedby=\"registro-user-mail\" ng-model=\"mail\"  required>\n                <p id =\"registro-user-mail\" class=\"aria-description\">Digite su correo</p>\n                <span ng-if=\"validate(recoverForm, \'email\')\" class=\"text-assertive\">Tiene que ser un correo válido</span>\n            </label>\n            <input type=\"submit\" ng-disabled=\"recoverForm.$invalid\" class=\"button button-block button-inci\" value=\"Aceptar\">\n        </form>\n    </ion-content>\n</ion-view>\ns\n");
$templateCache.put("views/auth/registro.tpl.html","<ion-view title=\"Registro\" hide-back-button=\"false\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" name=\"registryForm\" ng-submit=\"registrar($event, user)\">\n      <label for=\"id\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Número de documento</span>\n        <input name=\"id\" type=\"number\"  aria-describedby=\"registro-user-document\" ng-model=\"user.id\" required>\n        <p id= \"registro-user-document\" class=\"aria-description\">Digite su número de documento</p>\n        <span ng-if=\"validate(registryForm, \'id\')\" class=\"text-assertive\">Tiene que ser un número</span>\n      </label>\n      <label for=\"name\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Nombres</span>\n        <input name=\"name\" type=\"text\"  aria-describedby=\"registro-user-name\" ng-model=\"user.names\"  required>\n        <p id= \"registro-user-name\" class=\"aria-description\">Digite su nombre</p>\n        <span ng-if=\"validate(registryForm, \'name\')\" class=\"text-assertive\">Campo obligatorio</span>\n      </label>\n      <label for=\"lastName\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Apellidos</span>\n        <input name=\"lastName\" type=\"text\" aria-describedby=\"registro-user-surname\" ng-model=\"user.last_name\"  required>\n        <p id=\"registro-user-surname\" class=\"aria-description\">Digite sus apellidos</p>\n        <span ng-if=\"validate(registryForm, \'lastName\')\" class=\"text-assertive\">Campo obligatorio</span>\n      </label>\n      <label for=\"birth_date\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Fecha de nacimiento</span>\n        <input name=\"birth_date\" type=\"date\"  aria-describedby=\"registro-user-birthdate\" ng-model=\"user.birth_date\"  required>\n        <p id=\"registro-user-birthdate\" class=\"aria-description\">Ingrese su fecha de nacimiento</p>\n        <span ng-if=\"validate(registryForm, \'birth_date\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"gender\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Sexo</span>\n        <ion-radio name=\"gender\" ng-repeat=\"gender in genders\" ng-model=\"user.gender_id\" ng-value=\"{{gender.id}}\" name=\"disabilities\">{{gender.description}}</ion-radio>\n        <span ng-if=\"validate(registryForm, \'gender\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"disabilitie\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Condición visual</span>\n        <ion-radio name=\"disabilitie\" ng-repeat=\"disabilitie in disabilities\" ng-model=\"user.evaluee.disability_id\" ng-value=\"{{disabilitie.id}}\" name=\"disabilities\">{{disabilitie.description}}</ion-radio>\n        <span ng-if=\"validate(registryForm, \'disabilitie\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"type\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Nivel de formación</span>\n        <ion-radio name=\"type\" ng-repeat=\"type in types\" ng-model=\"user.evaluee.evaluee_type\" ng-value=\"{{type.id}}\" name=\"types\">{{type.description}}</ion-radio>\n        <span ng-if=\"validate(registryForm, \'type\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"level\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Tipo de usuario</span>\n        <ion-radio name=\"level\" ng-repeat=\"level in levels\" ng-model=\"user.evaluee.level_id\" ng-value=\"{{level.id}}\" name=\"levels\">{{level.description}}</ion-radio>\n        <span ng-if=\"validate(registryForm, \'level\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"email\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" >Correo</span>\n        <input name=\"email\" ng-pattern=\"/^[a-z][\\w.-]+@\\w[\\w.-]+\\.[\\w.-]*[a-z][a-z]$/i\" type=\"email\" aria-describedby=\"registro-user-mail\" ng-model=\"user.mail\"  required>\n        <p id =\"registro-user-mail\" class=\"aria-description\">Digite su correo</p>\n        <span ng-if=\"validate(registryForm, \'email\')\" class=\"text-assertive\">Tiene que ser un correo válido</span>\n      </label>\n      <label name=\"password\" class=\"item item-input item-stacked-label\"  required>\n        <span class=\"input-label\">Contraseña</span>\n        <input name=\"password\" type=\"password\"  ng-minlength=\"6\" aria-describedby=\"registro-user-id\" ng-model=\"user.password\"  required>\n        <span id =\"registro-user-id\" class=\"aria-description\">Digite su contraseña</span>\n        <span ng-if=\"validate(registryForm, \'password\')\" class=\"text-assertive\">Tiene que tener mínimo 6 carácteres</span>\n      </label>\n      <label name=\"password2\" class=\"item item-input item-stacked-label\"  required>\n        <span class=\"input-label\">Repite la contraseña</span>\n        <input name=\"password2\" type=\"password\" aria-describedby=\"registro-user-id\" ng-model=\"password2\"  required>\n        <span id =\"registro-user-id\" class=\"aria-description\">Por último, repita su contraseña</span>\n        <span ng-if=\"(user.password != password2) && registryForm.password2.$dirty\" class=\"text-assertive\">Las contraseñas no coinciden</span>\n      </label>\n      </label>\n\n      <h5 style=\"text-align: center\" ng-if=\"registryForm.$invalid || (user.password != password2)\" class=\"text-assertive\">Tu formulario contiene campos inválidos</h5>\n      <input ng-disabled=\"registryForm.$invalid || (user.password != password2) \" type=\"submit\" class=\"button button-block button-inci\" value=\"Registrar\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/about.tpl.html","<ion-view title=\"Acerca de\">\n    <ion-content class=\"padding\">\n\n        <div class=\"card\">\n            <div class=\"item\">\n                <h1 class=\"text-center\">Evaluon <small>1.0</small> </h1>\n\n            </div>\n            <h4 class=\"text-center\">Instituto Nacional Para Ciegos <br><small>©2014 - Derechos Reservados</small></h4>\n            <p class=\"text-center\">Tenga en cuenta que esta aplicación requiere\n            acceso a internet y puede consumir recursos de su\n            plan de datos</p>\n            <br><br>\n\n            <div class=\"row\">\n                <div class=\"col col-50 text-center\"><img src=\"http://www.inci.gov.co/templates/inci/images/logo-inci.png\" alt=\"Instituto nacional para ciegos\" class=\"img-responsive\"></div>\n                <div class=\"col col-50 text-center\"><img src=\"http://www.planteso.edu.co/hometeso/wp-content/uploads/sites/22/2014/10/mintic.jpg\" alt=\"MinTic\" class=\"img-responsive\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col text-center\"></div>\n            </div>\n\n            <div class=\"item item-avatar text-center\">\n                <p class=\"text-center\">\n                    Johana Salinas Quintana <br>\n                    Pablo Andres Dorado <br>\n                    Carlos Sebastián Osorio <br>\n                    <img src=\"/img/logos/bool.png\" alt=\"Bool inc\" class=\"img-responsive\">\n                </p>\n            </div>\n        </div>\n\n    </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/changePassword.tpl.html","<ion-view title=\"Cambiar contraseña\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" name=\"changePasswordForm\" ng-submit=\"changePassword($event)\">\n      <label for=\"password1\" class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Nueva contraseña</span>\n        <input name=\"password1\" type=\"password\" ng-minlength=\"6\" aria-describedby=\"login-user-input-pass\" ng-model=\"user.password1\" required>\n        <p id=\"login-user-input-pass\" class=\"aria-description\">Ingrese la nueva contraseña</p>\n        <span ng-if=\"validate(changePasswordForm, \'password1\')\" class=\"text-assertive\">Tiene que tener mínimo 6 carácteres</span>\n      </label>\n      <label for=\"password2\" class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Repite la contraseña</span>\n        <input name=\"password2\" type=\"password\" aria-describedby=\"login-user-input-pass2\" ng-model=\"user.password2\" required>\n        <p id=\"login-user-input-pass2\" class=\"aria-description\">Ingrese de nuevo la nueva contraseña</p>\n        <span ng-if=\"(user.password1 != user.password2) && changePasswordForm.password2.$dirty\" class=\"text-assertive\">Las contraseñas no coinciden</span>\n      </label>\n      <input ng-disabled=\"changePasswordForm.$invalid  || (user.password1 != user.password2)\" type=\"submit\" class=\"button button-block button-inci\" value=\"Cambiar contraseña\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/configurations.tpl.html","<ion-view title=\"Configuraciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\">\n      <div class=\"col col-50 divIcon item-avatar\">\n        <h2>Cambiar contraseña</h2>\n        <a ui-sref=\"configurations-changePassword\"><img src=\"./img/6.svg\" alt=\"Cambia tu contraseña\"></a>\n      </div>\n      <div class=\"col col-50 divIcon item-avatar\">\n        <h2>Ayuda</h2>\n        <a ui-sref=\"configurations-help\"><img src=\"./img/7.svg\" alt=\"Entra a ayuda\"></a>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col col-50 divIcon item-avatar\">\n        <h2>Acerca de</h2>\n        <a ui-sref=\"configurations-about\"><img src=\"./img/9.svg\" alt=\"Entra al Acerca de\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/help.tpl.html","<ion-view title=\"Ayuda\">\n    <ion-content class=\"padding\">\n    \n    </ion-content>\n</ion-view>\n");
$templateCache.put("views/errors/403.tpl.html","<ion-view title=\"403\">\n  <ion-content class=\"padding\">\n    <div class=\"card\">\n      <center><h4>No tienes permisos para acceder a este contenido</h4></center>\n      <br><br>\n    </div>\n\n\n    <button class=\"button button-block button-inci\" ui-sref=\"login\">Ir a inicio</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/errors/404.tpl.html","<ion-view title=\"404\">\n  <ion-content class=\"padding\">\n    <div class=\"card\">\n      <center><h4>El recurso que buscas no se ha encontrado :c </h4></center>\n      <br><br>\n    </div>\n    <button class=\"button button-block button-inci\" ui-sref=\"login\">Ir a inicio</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/groups.tpl.html","<ion-view title=\"Menu Grupos\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"groups in rowGroups\">\n      <div class=\"col col-50 divIcon item-avatar\" ng-repeat=\"group in groups\">\n        <h2 class=\"titleInci\">{{group.id}} - {{group.user.first_name}} {{group.user.last_name}}</h2>\n        <a ui-sref=\"{{routes.test}}({id: {{group.id}}})\"><img src=\"img/bank/10.svg\" alt=\"{{group.id}} - {{group.user.first_name}} {{group.user.last_name}}\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/institutions.tpl.html","<ion-view title=\"Instituciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"institutes in rowInstitutes\">\n      <div class=\"col col-50 divIcon item-avatar\" ng-repeat=\"institute in institutes\">\n        <h2 class=\"titleInci\">{{institute.name}}</h2>\n        <a ui-sref=\"{{routes.groups}}({id: {{institute.id}}})\"><img ng-src=\"http://cdn.boolinc.co/evaluon/{{institute.image.location}}\n          \" alt=\"{{institute.name}}\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/knowledge-area.tpl.html","<ion-view title=\"Areas de Conocimiento\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"tests in rowTestsDetails\">\n      <div class=\"col col-50 divIcon item-avatar\" ng-repeat=\"test in tests\">\n\n        <h2 class=\"titleInci\">{{test.id}}</h2>\n        <a ui-sref=\"{{routes.test}}({id: {{routes.testId}}, area: {{\'test.id\'}} })\"><img ng-src=\"http://cdn.boolinc.co/evaluon/{{test.image.location}}\" alt=\"{{test.description}}\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/password.tpl.html","<ion-view title=\"Contraseña\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"loginTest($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Contraseña</span>\n        <input type=\"number\" aria-describedby=\"login-user-input-text\" ng-model=\"password.data\" required>\n        <p id=\"login-user-input-text\" class=\"aria-description\">Ingrese la contraseña de el examen</p>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Iniciar Examen\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/test.tpl.html","<ion-view title=\"Examen de {{params.area}}\">\n  <ion-content class=\"padding\">\n    <div class=\"card\">\n      <div class=\"item item-text-wrap\">\n        <h3>Examen evaluon</h3>\n        <p>Ten en cuenta que el examen se anulará al cerrar la aplicación</p>\n        <br>\n        <h3>Tipos de preguntas</h3>\n        <p>En el examen se utilizan preguntas de selección múltiple con única respuesta y preguntas abiertas de respuesta corta.</p>\n        <p>Las preguntas de selección múltiple con única respuesta están conformadas por un enunciado, la formulación de una tarea de evaluación y cuatro opciones de respuesta, codificadas como A, B, C y D, de las cuales sólo una es correcta o válida dada la tarea planteada.</p>\n        <p>Las preguntas abiertas de respuesta corta no presentan opciones de respuesta. El estudiante construye (produce, elabora, escribe) una respuesta de acuerdo con la tarea que se le ha asignado, en el espacio definido.</p>\n        <p>Puedes desplazarte por las preguntas y respuestas, cuándo quieras responder acertadamente a una opción solo basta un doble click.</p>\n      </div>\n    </div>\n    <h2>Preguntas:</h2>\n\n    <div class=\"list\">\n      <div class=\"answer\" ng-repeat=\"question in questions\">\n        <div class=\"item\">\n          <h3 id =\"answer-{{$index}}\">{{$index + 1}}.</h3>\n          <p>{{question.description_text}}</p>\n        </div>\n        <div class=\"row\" ng-if=\"question.image\">\n          <div class=\"col col-80 col-offset-10 text-center\" >\n            <img ng-src=\"http://cdn.boolinc.co/evaluon/{{question.image.location}}\" alt=\"{{question.image.description}}\" class=\"img-responsive\">\n          </div>\n        </div>\n        <label ng-if=\"question.open == 1\" class=\"item item-input\">\n          <textarea placeholder=\"Ingrese su respuesta\" ng-model=\"question.answer\"></textarea>\n        </label>\n        <ion-radio ng-if=\"question.open == 0\" ng-repeat = \"answer in question.answers\" ng-value=\"\'{{answer.id}}\'\" ng-model=\"question.answer\"   name=\"answer{{answer.id}}\"><p><strong>{{\'abcdefghijklmnopqrstuvwxyz\'[$index]}}.</strong>  {{answer.description_text}} </p></ion-radio>\n      </div>\n    </div>\n\n    <!--<div class=\"list card\" ng-repeat = \"question in questions\">\n      <div class=\"item\">\n        <h3 id =\"answer-{{$index}}\">{{$index + 1}}.</h3>\n        <p>{{question.description_text}}</p>\n      </div>\n\n      <div class=\"list\">\n        <ion-radio ng-model=\"question.answer\" ng-repeat =\" answer in question.answers\" ng-value=\"\'{{answer.id}}\'\" ><p><strong>{{\'abcdefghijklmnopqrstuvwxyz\'[$index]}}.</strong>  {{answer.description_text}} </p></ion-radio>\n      </div>\n    </div>-->\n\n    <button class=\"button button-full button-inci\" ng-click=\"verifyAnswers()\">Preguntas no contestadas</button>\n    <button class=\"button button-full button-inci\" ng-click=\"rollbackAnswers()\" ng-if=\"rollbackAnswersFlag\">Volver al original</button>\n    <button class=\"button button-full button-inci\" ng-click=\"sendAnswers()\">Enviar</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/tests.tpl.html","<ion-view title=\"Evaluaciones\">\n  <ion-content class=\"padding\">\n    <div class=\"list\" ng-repeat=\"test in rowTests\">\n      <div class=\"item item-divider\">\n        <h2 class=\"titleInci\">{{test.id}}</h2>\n      </div>\n      <div class=\"item item-text-wrap\">\n        <span>{{test.description}}</span>\n        <br>\n      </div>\n      <a class=\"item item-icon-left\" ui-sref=\"{{routes.testsDetails}}({id: {{test.id}}})\">\n        <i class=\"icon ion-edit\" alt=\"Empezar prueba\"></i>\n        Empezar prueba\n      </a>\n    </div>\n    <!--\n    <div class=\"row padding item\" ng-repeat=\"tests in rowTests\">\n      <div class=\"col divIcon item-avatar\" ng-repeat=\"test in tests\">\n\n        <h2 class=\"titleInci\">{{test.id}}</h2>\n        <a ui-sref=\"{{routes.testsDetails}}({id: {{test.id}}})\"><img src=\"http://cdn.boolinc.co/evaluon/{{test.image.location}}\" alt=\"{{test.description}}\"></a>\n      </div>\n    </div>\n  -->\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/indicators/indicators.tpl.html","<ion-view title=\"Promedio de Aprendizaje\">\n  <ion-content class=\"padding\">\n    <div class=\"list card\">\n\n      <div class=\"item item-avatar\">\n        <h2>{{user.first_name}} {{user.last_name}}</h2>\n        <p> Desde: {{user.register_date | date: \'MMM d, yyyy\' : \'cot\'}}</p>\n      </div>\n\n      <div class=\"item item-body\">\n        <img class=\"full-image\" src=\"img/indicators/{{indicators.levelName}}.svg\" alt=\"Grado {{levels[indicators.levelName]}}\">\n        <p>\n          Grado {{levels[indicators.levelName]}}, descripción\n        </p>\n      </div>\n\n      <a class=\"item item-icon-left assertive\" href=\"\">\n        <i class=\"icon ion-checkmark-round\" alt=\"Preguntas acertadas\"></i>\n          {{indicators.questions}} Preguntas acertadas\n      </a>\n      <a class=\"item item-icon-left assertive\" href=\"\">\n        <i class=\"icon ion-stats-bars\" alt=\"Promedio\"></i>\n          Promedio:  {{indicators.average}}\n      </a>\n      <a class=\"item item-icon-left assertive\" href=\"\">\n        <i class=\"icon ion-ios7-star-half\" alt=\"Preguntas para el próximo grado\"></i>\n          {{indicators.remainingQuestions}} Preguntas para el próximo grado\n      </a>\n\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/results/institutions.tpl.html","<ion-view title=\"Instituciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"institutes in rowInstitutes\">\n      <div class=\"col col-50 divIcon item-avatar\" ng-repeat=\"institute in institutes\">\n        <h2 class=\"titleInci\">{{institute.name}}</h2>\n        <a  ui-sref=\"results({id: {{institute.id}}})\"><img src=\"http://cdn.boolinc.co/evaluon/{{institute.image.location}}\" alt=\"Colegio Inem de Bucaramamnga\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/results/results.tpl.html","<ion-view title=\"Resultados\">\n  <ion-content >\n    <div class=\"list\">\n      <a class=\"item item-avatar\" ng-repeat=\"result in results\">\n        <h2>{{result.description}}</h2>\n        <p>Resultado: {{result.note}}</p>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n");}]);