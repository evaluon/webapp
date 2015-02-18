angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/auth/home.tpl.html","<ion-view title=\"Menú Principal\" hide-back-button=\"true\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <a ui-sref=\"evaluation\"><h2>Evaluación</h2></a>\n        <menu-icon ref=\"evaluation\" img=\"./img/1.svg\" description=\"Encuentra las pruebas que debes presentar según su asignatura\"></menu-icon>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <a ui-sref=\"selfEvaluation\"><h2>Evalúate</h2></a>\n        <menu-icon ref=\"selfEvaluation\" img=\"./img/2.svg\" description=\"Reta tu conocimiento y prepárate para tus pruebas\"></menu-icon>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <a ui-sref=\"resultsInstitutes\"><h2>Resultados</h2></a>\n        <menu-icon ref=\"resultsInstitutes\" img=\"./img/3.svg\" description=\"Revisa el puntaje en poco tiempo y la retroalimentación para mejorar\"></menu-icon>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <a ui-sref=\"indicators\"><h2>Promedio</h2></a>\n        <menu-icon ref=\"indicators\" img=\"./img/4.svg\" description=\"Conoce los avances de tus conocimientos\"></menu-icon>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col divIcon item-avatar\">\n        <a ui-sref=\"configurations\"><h2>Configuraciones</h2></a>\n        <menu-icon ref=\"configurations\" img=\"./img/5.svg\" description=\"Configura tu aplicación\"></menu-icon>\n      </div>\n      <div class=\"col divIcon item-avatar\">\n        <a ng-click=\"logout()\"><h2>Cerrar Sesión</h2></a>\n        <menu-icon ref=\"home\" ng-click=\"logout()\" img=\"./img/9.svg\" description=\"Cierra esta sesión\"></menu-icon>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/auth/login.tpl.html","<ion-view title=\"Iniciar Sesión\" hide-back-button=\"true\" >\n  <ion-content class=\"padding\">\n    <form class=\"list\" name=\"loginForm\" ng-submit=\"login($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Correo</span>\n        <input type=\"email\" aria-describedby=\"login-user-input-text\" ng-model=\"user.username\" required>\n        <p id=\"login-user-input-text\" class=\"aria-description\">Ingrese el correo</p>\n      </label>\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Contraseña</span>\n        <input type=\"password\" aria-describedby=\"login-user-input-pass\" ng-model=\"user.password\" required>\n        <p id=\"login-user-input-pass\" class=\"aria-description\">Ingrese la contraseña</p>\n      </label>\n      <input type=\"submit\" ng-disabled=\"loginForm.$invalid\" class=\"button button-block button-inci\" value=\"Iniciar Sesion\" ng-model=\"user.password\">\n    </form>\n    <a ui-sref=\"registro\" ><button class=\"button button-block button-inci\">Registrarse</button></a>\n    <a ui-sref=\"recover\" ><button class=\"button button-block button-inci\">Olvidaste la contraseña</button></a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/auth/recover.tpl.html","<ion-view title=\"Recordar contraseña\">\n    <ion-content class=\"padding\">\n        <form class=\"list\" name=\"recoverForm\" ng-submit=\"recover($event, user.mail)\">\n            <label for=\"email\" class=\"item item-input\">\n                <span class=\"input-label\" >Correo</span>\n                <input name=\"email\" ng-pattern=\"/^[a-z][\\w.-]+@\\w[\\w.-]+\\.[\\w.-]*[a-z][a-z]$/i\" type=\"email\" aria-describedby=\"registro-user-mail\" ng-model=\"user.mail\"  required>\n                <p id =\"registro-user-mail\" class=\"aria-description\">Digite su correo</p>\n                <span ng-if=\"validate(recoverForm, \'email\')\" class=\"text-assertive\">Tiene que ser un correo válido</span>\n            </label>\n            <input type=\"submit\" ng-disabled=\"recoverForm.$invalid\" class=\"button button-block button-inci\" value=\"Aceptar\">\n        </form>\n    </ion-content>\n</ion-view>\ns\n");
$templateCache.put("views/auth/registro.tpl.html","<ion-view title=\"Registro\" hide-back-button=\"false\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" name=\"registryUserForm\" ng-submit=\"registrar($event, user)\">\n      <label for=\"id\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Número de documento</span>\n        <input name=\"id\" type=\"number\"  aria-describedby=\"registro-user-document\" ng-model=\"user.id\" required>\n        <p id= \"registro-user-document\" class=\"aria-description\">Digite su número de documento</p>\n        <span ng-if=\"validate(registryUserForm, \'id\')\" class=\"text-assertive\">Tiene que ser un número</span>\n      </label>\n      <label for=\"name\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Nombres</span>\n        <input name=\"name\" type=\"text\"  aria-describedby=\"registro-user-name\" ng-model=\"user.names\"  required>\n        <p id= \"registro-user-name\" class=\"aria-description\">Digite su nombre</p>\n        <span ng-if=\"validate(registryUserForm, \'name\')\" class=\"text-assertive\">Campo obligatorio</span>\n      </label>\n      <label for=\"lastName\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Apellidos</span>\n        <input name=\"lastName\" type=\"text\" aria-describedby=\"registro-user-surname\" ng-model=\"user.last_name\"  required>\n        <p id=\"registro-user-surname\" class=\"aria-description\">Digite sus apellidos</p>\n        <span ng-if=\"validate(registryUserForm, \'lastName\')\" class=\"text-assertive\">Campo obligatorio</span>\n      </label>\n      <label for=\"birth_date\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Fecha de nacimiento</span>\n        <input name=\"birth_date\" type=\"date\"  aria-describedby=\"registro-user-birthdate\" ng-model=\"user.birth_date\" required>\n        <p id=\"registro-user-birthdate\" class=\"aria-description\">Ingrese su fecha de nacimiento</p>\n        <span ng-if=\"validate(registryUserForm, \'birth_date\')\" class=\"text-assertive\">Fecha de nacimiento no válida</span>\n        <span ng-if=\"user.birth_date > maxDate\" class=\"text-assertive\">Fecha de nacimiento no válida</span>\n\n      </label>\n      <label for=\"gender\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" tabindex=\"0\">Género</span>\n        <ion-radio name=\"gender\" ng-repeat=\"gender in genders\" ng-model=\"user.gender_id\" ng-value=\"{{gender.id}}\" name=\"disabilities\" required tabindex=\"0\">{{gender.description}}</ion-radio>\n        <span ng-if=\"validate(registryUserForm, \'gender\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"disabilitie\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" tabindex=\"0\">Condición visual</span>\n        <ion-radio name=\"disabilitie\" ng-repeat=\"disabilitie in disabilities\" ng-model=\"user.evaluee.disability_id\" ng-value=\"{{disabilitie.id}}\" name=\"disabilities\" required tabindex=\"0\">{{disabilitie.description}}</ion-radio>\n        <span ng-if=\"validate(registryUserForm, \'disabilitie\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"type\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" tabindex=\"0\">Tipo de usuario</span>\n        <ion-radio name=\"type\" ng-repeat=\"type in types\" ng-model=\"user.evaluee.evaluee_type\" ng-value=\"{{type.id}}\" name=\"types\" required tabindex=\"0\">{{type.description}}</ion-radio>\n        <span ng-if=\"validate(registryUserForm, \'type\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"level\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" tabindex=\"0\">Nivel de formación</span>\n        <ion-radio name=\"level\" ng-repeat=\"level in levels\" ng-model=\"user.evaluee.level_id\" ng-value=\"{{level.id}}\" name=\"levels\" required tabindex=\"0\">{{level.description}}</ion-radio>\n        <span ng-if=\"validate(registryUserForm, \'level\')\" class=\"text-assertive\">Campo obligatorio/span>\n      </label>\n      <label for=\"email\" class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" tabindex=\"0\">Correo</span>\n        <input name=\"email\" ng-pattern=\"/^[a-z][\\w.-]+@\\w[\\w.-]+\\.[\\w.-]*[a-z][a-z]$/i\" type=\"email\" aria-describedby=\"registro-user-mail\" ng-model=\"user.mail\"  required>\n        <p id =\"registro-user-mail\" class=\"aria-description\">Digite su correo</p>\n        <span ng-if=\"validate(registryUserForm, \'email\')\" class=\"text-assertive\">Tiene que ser un correo válido</span>\n      </label>\n      <label name=\"password\" class=\"item item-input item-stacked-label\"  required>\n        <span class=\"input-label\">Contraseña</span>\n        <input name=\"password\" type=\"password\"  ng-minlength=\"6\" aria-describedby=\"registro-user-id\" ng-model=\"user.password\"  required>\n        <span id =\"registro-user-id\" class=\"aria-description\">Digite su contraseña</span>\n        <span ng-if=\"validate(registryUserForm, \'password\')\" class=\"text-assertive\">Tiene que tener mínimo 6 carácteres</span>\n      </label>\n      <label name=\"password2\" class=\"item item-input item-stacked-label\"  required>\n        <span class=\"input-label\">Repite la contraseña</span>\n        <input name=\"password2\" type=\"password\" aria-describedby=\"registro-user-id\" ng-model=\"password2\"  required>\n        <span id =\"registro-user-id\" class=\"aria-description\">Por último, repita su contraseña</span>\n        <span ng-if=\"(user.password != password2) && registryUserForm.password2.$dirty\" class=\"text-assertive\">Las contraseñas no coinciden</span>\n      </label>\n      </label>\n\n      <h5 style=\"text-align: center\" ng-if=\"registryUserForm.$invalid || (user.password != password2) || user.birth_date > maxDate\" class=\"text-assertive\">Tu formulario contiene campos inválidos</h5>\n      <input ng-disabled=\"registryUserForm.$invalid || (user.password != password2) || user.birth_date > maxDate\" type=\"submit\" class=\"button button-block button-inci\" value=\"Registrar\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/about.tpl.html","<ion-view title=\"Acerca de\">\n    <ion-content class=\"padding\">\n\n        <div class=\"card\">\n            <div class=\"item\">\n                <h1 class=\"text-center\">Evaluon <small>1.0</small> </h1>\n\n            </div>\n            <h4 class=\"text-center\">Instituto Nacional Para Ciegos <br><small>©2014 - Derechos Reservados</small></h4>\n            <p class=\"text-center\">Tenga en cuenta que esta aplicación requiere\n            acceso a internet y puede consumir recursos de su\n            plan de datos</p>\n            <br><br>\n\n            <div class=\"row\">\n                <div class=\"col text-center\"><img src=\"./img/logos/inci.png\" class=\"img-responsive img-about\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col text-center\"><img src=\"./img/logos/mintic.jpg\" alt=\"MinTic\" class=\"img-responsive img-center img-about\"></div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col text-center\"><img src=\"./img/logos/gobierno.jpg\" alt=\"Gobierno Colombiano\" class=\"img-responsive img-center img-about\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col text-center\">\n                    <p class=\"text-center\">\n                        Johana Salinas Quintana <br>\n                        Pablo Andres Dorado <br>\n                        Carlos Sebastián Osorio <br>\n                        <img src=\"./img/logos/bool.png\" alt=\"Bool inc\" class=\"img-responsive\">\n                    </p>\n                </div>\n            </div>\n        </div>\n\n    </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/changePassword.tpl.html","<ion-view title=\"Cambiar contraseña\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" name=\"changePasswordForm\" ng-submit=\"changePassword($event)\">\n      <label for=\"password1\" class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Nueva contraseña</span>\n        <input name=\"password1\" type=\"password\" ng-minlength=\"6\" aria-describedby=\"login-user-input-pass\" ng-model=\"user.password1\" required>\n        <p id=\"login-user-input-pass\" class=\"aria-description\">Ingrese la nueva contraseña</p>\n        <span ng-if=\"validate(changePasswordForm, \'password1\')\" class=\"text-assertive\">Tiene que tener mínimo 6 carácteres</span>\n      </label>\n      <label for=\"password2\" class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Repite la contraseña</span>\n        <input name=\"password2\" type=\"password\" aria-describedby=\"login-user-input-pass2\" ng-model=\"user.password2\" required>\n        <p id=\"login-user-input-pass2\" class=\"aria-description\">Ingrese de nuevo la nueva contraseña</p>\n        <span ng-if=\"(user.password1 != user.password2) && changePasswordForm.password2.$dirty\" class=\"text-assertive\">Las contraseñas no coinciden</span>\n      </label>\n      <input ng-disabled=\"changePasswordForm.$invalid  || (user.password1 != user.password2)\" type=\"submit\" class=\"button button-block button-inci\" value=\"Cambiar contraseña\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/configurations.tpl.html","<ion-view title=\"Configuraciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\">\n      <div class=\"col col-50 divIcon item-avatar\">\n        <a ui-sref=\"configurations-changePassword\"><h2>Cambiar contraseña</h2></a>\n        <menu-icon ref=\"configurations-changePassword\" img=\"./img/6.svg\" description=\"Cambia tu contraseña\"></menu-icon>\n      </div>\n      <div class=\"col col-50 divIcon item-avatar\">\n        <a ui-sref=\"configurations-update\"><h2>Actualizar perfil</h2></a>\n        <menu-icon ref=\"configurations-update\" img=\"./img/10.svg\" description=\"Actualiza tu perfil\"></menu-icon>\n      </div>\n    </div>\n    <div class=\"row padding item\">\n      <div class=\"col col-50 divIcon item-avatar\">\n        <a ui-sref=\"configurations-help\"><h2>Ayuda</h2></a>\n        <menu-icon ref=\"configurations-help\" img=\"./img/7.svg\" description=\"Entra a ayuda\"></menu-icon>\n      </div>\n      <div class=\"col col-50 divIcon item-avatar\">\n        <a ui-sref=\"configurations-about\"><h2>Acerca de</h2></a>\n        <menu-icon ref=\"configurations-about\" img=\"./img/9.svg\" description=\"Entra al Acerca de\"></menu-icon>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/help.tpl.html","<ion-view title=\"Ayuda\">\n    <ion-content class=\"padding\">\n        <div class=\"list card\">\n\n            <div class=\"item\">\n                <h2>Accesibilidad</h2>\n            </div>\n\n            <div class=\"item item-body\">\n                <p>\n                    Puedes utiliza la navegación por encabezados, hará más ágil el uso de esta aplicación.\n                </p>\n            </div>\n\n            <div class=\"item \">\n                <h2>Evaluación</h2>\n            </div>\n\n            <div class=\"item item-body\">\n                <p>\n                    Presenta el listado de instituciones o organizaciones la cual la persona con discapacidad visual se encuentre inscrita, y dentro a cada una de ellas encontraremos el grupo al que pertenece cada persona, donde encontrará el examen que debe presentar ingresando el código que proveerá el docente o director de la prueba.\n                </p>\n                <h3>Accesibilidad:</h3>\n                <p>\n                    En el momento de presentar la evaluación puedes desplazarte por los encabezados de las preguntas, cuándo utilices la opción de preguntas no contestadas los encabezados de las preguntas contestadas desaparecerán.\n                </p>\n            </div>\n\n            <div class=\"item \">\n                <h2>Evalúate</h2>\n            </div>\n\n\n            <div class=\"item item-body\">\n                <p>\n                    Presenta el banco de preguntas por área de conocimiento donde las personas podrán practicar y prepararse para sus pruebas evaluativas eso genera un promedio de aprendizaje.\n                </p>\n                <h3>Accesibilidad:</h3>\n                <p>\n                    En el momento de presentar la evaluación puedes desplazarte por los encabezados de las preguntas, cuándo utilices la opción de preguntas no contestadas los encabezados de las preguntas contestadas desaparecerán.\n                </p>\n            </div>\n\n            <div class=\"item \">\n                <h2>Resultados</h2>\n            </div>\n\n            <div class=\"item item-body\">\n                <p>\n                    Observaran los resultados de las pruebas que se va presentado y se encontraran por periodos.\n\n                </p>\n            </div>\n\n            <div class=\"item \">\n                <h2>Promedio Aprendizaje</h2>\n            </div>\n\n            <div class=\"item item-body\">\n                <p>Es el ponderado de las practicas que has realizado en el banco de preguntas de evalúate. Veras el número de preguntas que has acertado, así como tu promedio, el número de preguntas que te faltan para alcanzar el próximo nivel de estatus. Entre más practiques, más aumentaras tu promedio.</p>\n                <p>Evaluon cuenta con 6 niveles de estatus, que irás alcanzando a medida de que hayas resuelto más preguntas:</p>\n                <ul>\n                    <li>Bronce: Es el primer estatus por llegar a los  8 puntos, es muy fácil de llegar allí, sigue respondiendo preguntas de diferentes asignaturas y llega a Plata</li>\n                    <li>Plata: Solo un poco de tiempo para llegar hasta aquí con 64 puntos, pero desafía tu conocimiento y sigue practicando.</li>\n                    <li>Oro: Ahora tienes 512  puntos cada vez te vas convirtiendo en un sabelo todo, que esperas quieres ser el mejor? y ganar puntos extras con tus evaluadores? sigue en marcha.</li>\n                    <li>Platino: Debes tener entre 512 y 4096 puntos no es tarea facil pero confiamos en ti, así que no te rindas, el banco de preguntas son infinitas para lograr este puntaje.</li>\n                    <li>Diamante: Entre 4.096 y 32.768 puntos. Ya eres un berraco poder llegar hasta aquí muy buen trabajo eres un honorable estudiante que podrás generar un gran impacto entre sus compañeros y evaluadores, te has ganado el reconocimiento que mereces.</li>\n                    <li>Ultimate: Animate para tener 32.768 y 262.144 puntos, o más, quieres ser el gurú de tu institución llega a este nivel y logra el desafío más honorable de nuestro pais.</li>\n                </ul>\n            </div>\n\n            <div class=\"item \">\n                <h2>Configuraciones</h2>\n            </div>\n\n            <div class=\"item item-body\">\n                <p>\n                    Permite los cambio de contraseña, solicitar ayuda, y conocer un poco más sobre la aplicación.\n\n                </p>\n            </div>\n\n        </div>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("views/configurations/updateUser.tpl.html","<ion-view title=\"Actualizar perfil\">\n    <ion-content class=\"padding\">\n        <form class=\"list\" name=\"updateUserForm\" ng-submit=\"update($event, user)\">\n            <label class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\">Número de documento</span>\n                <input disabled type=\"number\" aria-describedby=\"registro-user-document\" ng-model=\"id\">\n                <p id= \"registro-user-document\" class=\"aria-description\">Número del documento de identidad</p>\n            </label>\n            <label for=\"name\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\">Nombres</span>\n                <input name=\"name\" type=\"text\"  aria-describedby=\"registro-user-name\" ng-model=\"user.names\"  required>\n                <p id= \"registro-user-name\" class=\"aria-description\">Digite su nombre</p>\n                <span ng-if=\"validate(updateUserForm, \'name\')\" class=\"text-assertive\">Campo obligatorio</span>\n            </label>\n            <label for=\"lastName\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\">Apellidos</span>\n                <input name=\"lastName\" type=\"text\" aria-describedby=\"registro-user-surname\" ng-model=\"user.last_name\"  required>\n                <p id=\"registro-user-surname\" class=\"aria-description\">Digite sus apellidos</p>\n                <span ng-if=\"validate(updateUserForm, \'lastName\')\" class=\"text-assertive\">Campo obligatorio</span>\n            </label>\n            <label for=\"birth_date\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\">Fecha de nacimiento</span>\n                <input name=\"birth_date\" type=\"date\"  aria-describedby=\"registro-user-birthdate\" ng-model=\"user.birth_date\"  required>\n                <p id=\"registro-user-birthdate\" class=\"aria-description\">Ingrese su fecha de nacimiento</p>\n                <span ng-if=\"validate(updateUserForm, \'birth_date\')\" class=\"text-assertive\">Campo obligatorio/span>\n            </label>\n            <label for=\"gender\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\">Género</span>\n                <ion-radio name=\"gender\" ng-repeat=\"gender in genders\" ng-model=\"user.evaluee.gender_id\" ng-value=\"{{gender.id}}\" name=\"disabilities\" required>{{gender.description}}</ion-radio>\n                <span ng-if=\"validate(updateUserForm, \'gender\')\" class=\"text-assertive\">Campo obligatorio/span>\n            </label>\n            <label for=\"disabilitie\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\">Condición visual</span>\n                <ion-radio name=\"disabilitie\" ng-repeat=\"disabilitie in disabilities\" ng-model=\"user.evaluee.disability_id\" ng-value=\"{{disabilitie.id}}\" name=\"disabilities\" required>{{disabilitie.description}}</ion-radio>\n                <span ng-if=\"validate(updateUserForm, \'disabilitie\')\" class=\"text-assertive\">Campo obligatorio/span>\n            </label>\n            <label for=\"type\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\">Tipo de usuario</span>\n                <ion-radio name=\"type\" ng-repeat=\"type in types\" ng-model=\"user.evaluee.evaluee_type\" ng-value=\"{{type.id}}\" name=\"types\" required>{{type.description}}</ion-radio>\n                <span ng-if=\"validate(updateUserForm, \'type\')\" class=\"text-assertive\">Campo obligatorio/span>\n            </label>\n            <label for=\"level\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\">Nivel de formación</span>\n                <ion-radio name=\"level\" ng-repeat=\"level in levels\" ng-model=\"user.evaluee.level_id\" ng-value=\"{{level.id}}\" name=\"levels\" required>{{level.description}}</ion-radio>\n                <span ng-if=\"validate(updateUserForm, \'level\')\" class=\"text-assertive\">Campo obligatorio/span>\n            </label>\n            <label for=\"email\" class=\"item item-input item-stacked-label\">\n                <span class=\"input-label\" >Correo</span>\n                <input name=\"email\" ng-pattern=\"/^[a-z][\\w.-]+@\\w[\\w.-]+\\.[\\w.-]*[a-z][a-z]$/i\" type=\"email\" aria-describedby=\"registro-user-mail\" ng-model=\"user.mail\"  required>\n                <p id =\"registro-user-mail\" class=\"aria-description\">Digite su correo</p>\n            <span ng-if=\"validate(updateUserForm, \'email\')\" class=\"text-assertive\">Tiene que ser un correo válido</span>\n            </label>\n            <h5 style=\"text-align: center\" ng-if=\"updateUserForm.$invalid\" class=\"text-assertive\">Tu formulario contiene campos inválidos</h5>\n            <input ng-disabled=\"updateUserForm.$invalid\" type=\"submit\" class=\"button button-block button-inci\" value=\"Actualizar\">\n        </form>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("views/errors/403.tpl.html","<ion-view title=\"403\">\n  <ion-content class=\"padding\">\n    <div class=\"card\">\n      <center><h4>No tienes permisos para acceder a este contenido</h4></center>\n      <br><br>\n    </div>\n\n\n    <button class=\"button button-block button-inci\" ui-sref=\"login\">Ir a inicio</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/errors/404.tpl.html","<ion-view title=\"404\">\n  <ion-content class=\"padding\">\n    <div class=\"card\">\n      <center><h4>El recurso que buscas no se ha encontrado :c </h4></center>\n      <br><br>\n    </div>\n    <button class=\"button button-block button-inci\" ui-sref=\"login\">Ir a inicio</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/groups.tpl.html","<ion-view title=\"Grupos\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"groups in rowGroups\">\n      <div class=\"col col-50 divIcon item-avatar\" ng-repeat=\"group in groups\">\n        <a ui-sref=\"{{routes.test}}({id: {{group.id}}})\"h2 class=\"titleInci\">{{group.id}} - {{group.user.first_name}} {{group.user.last_name}}</h2></a>\n        <menu-icon ref=\"{{routes.test}}({id: {{group.id}}})\" img=\"http://placehold.it/180/FFFFFF/00427a&text={{group.user.first_name[0]}}{{group.user.last_name[0]}}\" description=\"{{group.id}} - {{group.user.first_name}} {{group.user.last_name}}\"></menu-icon>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/institutions.tpl.html","<ion-view title=\"Instituciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"institutes in rowInstitutes\">\n      <div class=\"col col-50 divIcon item-avatar\" ng-repeat=\"institute in institutes\">\n        <a ui-sref=\"{{routes.groups}}({id: {{institute.id}}})\"><h2 class=\"titleInci\">{{institute.name}}</h2></a>\n        <menu-icon ref=\"{{routes.groups}}({id: {{institute.id}}})\" img=\"http://cdn.boolinc.co/evaluon/{{institute.image.location}}\" description=\"{{institute.name}}\"></menu-icon>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/knowledge-area.tpl.html","<ion-view title=\"Areas de Conocimiento\" hide-back-button=\"true\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"tests in rowTestsDetails\">\n      <div class=\"col col-50 divIcon item-avatar\" ng-repeat=\"test in tests\">\n        <a ui-sref=\"{{routes.test}}({id: {{routes.testId}}, area: {{\'test.id\'}} })\"><h2 class=\"titleInci\">{{test.id}}</h2></a>\n        <menu-icon ref=\"{{routes.test}}({id: {{routes.testId}}, area: {{\'test.id\'}} })\" img=\"http://cdn.boolinc.co/evaluon/{{test.image.location}}\" description=\"{{test.id}}\"></menu-icon>\n      </div>\n    </div>\n    <button class=\"button button-block button-inci\" ng-click=\"exit()\">Salir</button>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/password.tpl.html","<ion-view title=\"Contraseña\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"loginTest($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Contraseña</span>\n        <input type=\"number\" aria-describedby=\"login-user-input-text\" ng-model=\"password.data\" required>\n        <p id=\"login-user-input-text\" class=\"aria-description\">Ingrese la contraseña de el examen</p>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Iniciar Examen\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/test.tpl.html","<ion-view title=\"Examen de {{params.area}}\" hide-back-button=\"true\">\n  <ion-content class=\"padding\">\n    <div class=\"card\">\n      <div class=\"item item-text-wrap\">\n        <h3 tabindex=\"0\">Examen evaluon</h3>\n        <p tabindex=\"0\">Ten en cuenta que el examen se anulará al cerrar la aplicación</p>\n        <br>\n        <h3 tabindex=\"0\">Tipos de preguntas</h3>\n        <div>\n          <p tabindex=\"0\">En el examen se pueden utilizan preguntas de selección múltiple con única respuesta y preguntas abiertas de respuesta corta.</div> </p>\n          <p ng-if=\"close\" tabindex=\"0\">Las preguntas de selección múltiple con única respuesta están conformadas por un enunciado, la formulación de una tarea de evaluación y cuatro opciones de respuesta, codificadas como A, B, C y D, de las cuales sólo una es correcta o válida dada la tarea planteada.</p>\n          <p ng-if=\"close\" tabindex=\"0\">Puedes desplazarte por las preguntas y respuestas, cuándo quieras responder acertadamente a una opción solo basta un doble click.</p>\n          <p ng-if=\"open\" tabindex=\"0\">Las preguntas abiertas de respuesta corta no presentan opciones de respuesta. El estudiante construye (produce, elabora, escribe) una respuesta de acuerdo con la tarea que se le ha asignado, en el espacio definido.</p>\n          <p ng-if=\"open\" tabindex=\"0\">Puedes resplazarte por las preguntas y respuestas, cuándo quieras responder solo basta llenar el campo de texto</p>\n        </div>\n      </div>\n    </div>\n    <h2 tabindex=\"0\">Preguntas:</h2>\n\n    <div class=\"list card\">\n      <div class=\"answer\" ng-repeat=\"question in questions\">\n        <div class=\"item item-text-wrap\">\n          <h3 id =\"answer-{{$index}}\" tabindex=\"0\">{{$index + 1}}.</h3>\n          <p tabindex=\"0\">{{question.description_text}}</p>\n        </div>\n        <div class=\"row\" ng-if=\"question.image\">\n          <div class=\"col col-80 col-offset-10 text-center\" >\n            <img ng-src=\"http://cdn.boolinc.co/evaluon/{{question.image.location}}\" alt=\"{{question.image.description}}\" class=\"img-responsive\" tabindex=\"0\">\n          </div>\n        </div>\n        <label ng-if=\"question.open == 1\" class=\"item item-input\" tabindex=\"0\">\n          <textarea placeholder=\"Ingrese su respuesta\" ng-model=\"question.answer\" tabindex=\"0\"></textarea>\n        </label>\n\n        <ion-radio class=\"item-text-wrap\" tabindex=\"0\" ng-if=\"question.open == 0\" ng-repeat = \"answer in question.answers\" ng-value=\"\'{{answer.id}}\'\" ng-model=\"question.answer\"   name=\"answer{{answer.id}}\"><p><strong>{{\'abcdefghijklmnopqrstuvwxyz\'[$index]}}.</strong>  {{answer.description_text}} </p></ion-radio>\n\n      </div>\n    </div>\n\n    <!--\n\n    <div class=\"list card\" ng-repeat = \"question in questions\">\n      <div class=\"item item-text-wrap\" style=\"height: auto; width: auto;\">\n        <h3 id =\"answer-{{$index}}\">{{$index + 1}}.</h3>\n        <p>{{question.description_text}}</p>\n      </div>\n\n      <div class=\"list item item-text-wrap\">\n        <ion-radio ng-model=\"question.answer\" ng-repeat =\" answer in question.answers\" ng-value=\"\'{{answer.id}}\'\" ><p><strong>{{\'abcdefghijklmnopqrstuvwxyz\'[$index]}}.</strong>  {{answer.description_text}} </p></ion-radio>\n      </div>\n    </div>\n  -->\n\n    <button class=\"button button-full button-inci\" ng-click=\"verifyAnswers()\">Preguntas no contestadas</button>\n    <button class=\"button button-full button-inci\" ng-click=\"rollbackAnswers()\" ng-if=\"rollbackAnswersFlag\">Volver al original</button>\n    <button class=\"button button-full button-inci\" ng-click=\"sendAnswers()\">Enviar</button>\n    <button class=\"button button-full button-inci\" ng-click=\"exit()\">Volver</button>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluation/tests.tpl.html","<ion-view title=\"Evaluaciones\">\n  <ion-content class=\"padding\">\n    <div class=\"list\" ng-repeat=\"test in rowTests\">\n      <div class=\"item item-divider\">\n        <h2 class=\"titleInci\">{{test.id}}</h2>\n      </div>\n      <div class=\"item item-text-wrap\">\n        <span>{{test.description}}</span>\n        <br>\n      </div>\n      <a class=\"item item-icon-left\" ui-sref=\"{{routes.testsDetails}}({id: {{test.id}}})\">\n        <i class=\"icon ion-edit\" alt=\"Empezar prueba\"></i>\n        Empezar prueba\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/indicators/indicators.tpl.html","<ion-view title=\"Promedio de Aprendizaje\">\n  <ion-content class=\"padding\">\n    <div class=\"list card\">\n\n      <div class=\"item item-avatar\">\n        <h2>{{user.first_name}} {{user.last_name}}</h2>\n        <p> Desde: {{user.register_date | date: \'MMM d, yyyy\' : \'cot\'}}</p>\n      </div>\n\n      <div class=\"item item-body\" class=\"text-center\">\n        <div class=\"row\">\n          <div class=\"col col-80 col-offset-10 text-center\">\n            <i ng-if=\"!indicators.levelName\" class=\"ion-load-a\"></i>\n            <img ng-if=\"indicators.levelName\" class=\"full-image\" src=\"img/indicators/{{indicators.levelName}}.svg\" alt=\"Grado {{levels[indicators.levelName]}}\">\n          </div>\n        </div>\n        <p>\n          <h2 class=\"text-center\">Al completar tus evaluaciones has conseguido el grado {{levels[indicators.levelName]}}</h2> {{indicators.description}}\n        </p>\n      </div>\n\n      <p class=\"item item-icon-left assertive\" href=\"\">\n        <i class=\"icon ion-checkmark-round\" alt=\"Preguntas acertadas\"></i>\n          {{indicators.questions}} Preguntas acertadas\n      </p>\n      <p class=\"item item-icon-left assertive\" href=\"\">\n        <i class=\"icon ion-stats-bars\" alt=\"Promedio\"></i>\n          Promedio:  {{indicators.average}}\n      </p>\n      <p class=\"item item-icon-left assertive\" href=\"\">\n        <i class=\"icon ion-ios7-star-half\" alt=\"Preguntas para el próximo grado\"></i>\n          {{indicators.remainingQuestions}} Preguntas para el próximo grado\n      </p>\n\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/results/institutions.tpl.html","<ion-view title=\"Instituciones\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding item\" ng-repeat=\"institutes in rowInstitutes\">\n      <div class=\"col col-50 divIcon item-avatar\" ng-repeat=\"institute in institutes\">\n        <h2 class=\"titleInci\">{{institute.name}}</h2>\n        <menu-icon ref=\"results({id: {{institute.id}}})\" img=\"http://cdn.boolinc.co/evaluon/{{institute.image.location}}\" description=\"{{institute.name}}\"></menu-icon>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/results/results.tpl.html","<ion-view title=\"Resultados\">\n  <ion-content >\n    <div class=\"list\">\n      <a class=\"item item-avatar\" ng-repeat=\"result in results\">\n        <h2>{{result.description}}</h2>\n        <p>{{result.rightQuestions}} preguntas acertadas de {{result.totalQuestions}}<p>\n        <p ng-if=\"result.feedback\">Comentarios: {{result.feedback}}</p>\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n");}]);