angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/evaluacion-materia.tpl.html","<ion-view title=\"Materias\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Ciencias</h2>\n        <a href=\"\"><img src=\"img/9.png\" alt=\"Entra a realizar una nueva evaluación de Ciencias\"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Química</h2>\n        <a href=\"\"><img src=\"./img/10.png\" alt=\"Entra a realizar una nueva evaluación de Química\"></a>\n      </div>\n    </div>\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Matemáticas</h2>\n        <a href=\"\"><img src=\"./img/11.png\" alt=\"Entra a realizar una nueva evaluación de Matemáticas\"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Biología</h2>\n        <a ui-sref=\"test\"><img src=\"./img/12.png\" alt=\"Entra a realizar una nueva evaluación de Biología\"></a>\n      </div>\n    </div>\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Física</h2>\n        <a href=\"\"><img src=\"./img/13.png\" alt=\"Entra a realizar una nueva evaluación de Física\"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Literatura</h2>\n        <a href=\"\"><img src=\"./img/14.png\" alt=\"Entra a realizar una nueva evaluación de Literatura\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/evaluacion-menu.tpl.html","<ion-view title=\"Menu Evaluación\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Colegio Inem</h2>\n        <a ui-sref=\"evaluacion-materias\"><img src=\"./img/5.png\" alt=\"Colegio Inem de Bucaramamnga\"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Sena</h2>\n        <a ui-sref=\"evaluacion-materias\"><img src=\"./img/6.png\" alt=\"ICFES año 2014\"></a>\n      </div>\n    </div>\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Icfes </h2>\n        <a ui-sref=\"evaluacion-materias\"><img src=\"./img/7.png\" alt=\"SENA Colombia seccional Bucaramanga\"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Pre-Universitario</h2>\n        <a ui-sref=\"evaluacion-materias\"><img src=\"./img/8.png\" alt=\"Pre-icfes instituto CIIE\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/home.tpl.html","<ion-view title=\"Menú Principal\">\n  <ion-content class=\"padding\">\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Evaluación</h2>\n        <a><img src=\"./img/1.png\" alt=\"Encuentra las pruebas que debes presentar según su asignatura\"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Evalúate</h2>\n        <a ui-sref=\"evaluacion-menu\"><img src=\"./img/2.png\" alt=\"Reta tu conocimiento y prepárate para tus pruebas\"></a>\n      </div>\n    </div>\n    <div class=\"row padding\">\n      <div class=\"col divIcon\">\n        <h2>Resultados</h2>\n        <a href=\"\"><img src=\"./img/3.png\" alt=\"Revisa el puntaje en poco tiempo y la retroalimentación para mejorar \"></a>\n      </div>\n      <div class=\"col divIcon\">\n        <h2>Promedio Aprendizaje</h2>\n        <a href=\"\"><img src=\"./img/4.png\" alt=\"Conoce los avances de tu conocimiento\"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/login.tpl.html","<ion-view title=\"Iniciar Sesión\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"login($event)\">\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Correo</span>\n        <input type=\"email\" aria-describedby=\"login-user-input-text\" ng-model=\"user.username\" required>\n        <p id=\"login-user-input-text\" class=\"aria-description\">Ingrese el correo</p>\n      </label>\n      <label class=\"item item-input\">\n        <span class=\"input-label\" tabindex=\"-1\">Contraseña</span>\n        <input type=\"password\" aria-describedby=\"login-user-input-pass\" ng-model=\"user.password\" required>\n        <p id=\"login-user-input-pass\" class=\"aria-description\">Ingrese la contraseña</p>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Iniciar Sesion\" ng-model=\"user.password\">\n    </form>\n    <a ui-sref=\"registro\" ><button class=\"button button-block button-inci\">Registrarse</button></a>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/registro.tpl.html","<ion-view title=\"Registro\">\n  <ion-content class=\"padding\">\n    <form class=\"list\" ng-submit=\"registrar()\">\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Nombres</span>\n        <input type=\"text\"  aria-describedby=\"registro-user-name\">\n        <p id= \"registro-user-name\" class=\"aria-description\">Digite su nombre</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Apellidos</span>\n        <input type=\"text\"  aria-describedby=\"registro-user-surname\">\n        <p id=\"registro-user-surname\" class=\"aria-description\">Digite sus apellidos</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\" >Correo</span>\n        <input type=\"email\" aria-describedby=\"registro-user-mail\">\n        <p id =\"registro-user-mail\" class=\"aria-description\">Digite su correo</p>\n      </label>\n      <label class=\"item item-input item-stacked-label\">\n        <span class=\"input-label\">Documento</span>\n        <input type=\"number\" aria-describedby=\"registro-user-id\">\n        <span id =\"registro-user-id\" class=\"aria-description\">Por último, digite su correo</span>\n      </label>\n      </label>\n      <input type=\"submit\" class=\"button button-block button-inci\" value=\"Registrar\">\n    </form>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/test.tpl.html","<ion-view title=\"Examen\">\n  <ion-content class=\"padding\">\n    <h2 id=\"testTitle\">Prueba de Biología - Colegio</h2>\n    <div class=\"card\">\n      <div class=\"item item-text-wrap\">\n        <br>\n        <h3>Tipos de preguntas</h3>\n        <p>En el examen se utilizan preguntas de selección múltiple con única respuesta y preguntas abiertas de respuesta corta.</p>\n        <p>Las preguntas de selección múltiple con única respuesta están conformadas por un enunciado, la formulación de una tarea de evaluación y cuatro opciones de respuesta, codificadas como A, B, C y D, de las cuales sólo una es correcta o válida dada la tarea planteada.</p>\n        <p>Las preguntas abiertas de respuesta corta no presentan opciones de respuesta. El estudiante construye (produce, elabora, escribe) una respuesta de acuerdo con la tarea que se le ha asignado, en el espacio definido.</p>\n        <p>Puedes desplazarte por las preguntas y respuestas, cuándo quieras responder acertadamente a una opción solo basta un doble click.</p>\n      </div>\n    </div>\n    <h2>Preguntas:</h2>\n    <div class=\"list card\" ng-repeat = \"question in questions\">\n\n      <div class=\"item\">\n        <h3>{{question.id}}.</h3>\n        <p>{{question.text}}</p>\n      </div>\n\n      <div class=\"item item-image\">\n      </div>\n\n      <div class=\"list\">\n\n        <label class=\"item item-radio\">\n          <input type=\"radio\" name=\"group\">\n          <div class=\"item-content\">\n            <p><strong>a.</strong>  {{question.answerOptions[0].text}}</p>\n          </div>\n          <i class=\"radio-icon ion-checkmark\"></i>\n        </label>\n        <label class=\"item item-radio\">\n          <input type=\"radio\" name=\"group\">\n          <div class=\"item-content\">\n            <p><strong>b.</strong>  {{question.answerOptions[1].text}}</p>\n          </div>\n          <i class=\"radio-icon ion-checkmark\"></i>\n        </label>\n        <label class=\"item item-radio\">\n          <input type=\"radio\" name=\"group\">\n          <div class=\"item-content\">\n            <p><strong>c.</strong>  {{question.answerOptions[2].text}}</p>\n          </div>\n          <i class=\"radio-icon ion-checkmark\"></i>\n        </label>\n        <label class=\"item item-radio\">\n          <input type=\"radio\" name=\"group\">\n          <div class=\"item-content\">\n            <p><strong>d.</strong>  {{question.answerOptions[3].text}}</p>\n          </div>\n          <i class=\"radio-icon ion-checkmark\"></i>\n        </label>\n      </div>\n    </div>\n    <button class=\"button button-full button-inci\">Verificar respuestas</button>\n    <a ui-sref=\"home\"><button class=\"button button-full button-inci\" ng-click=\"alert(\'Gracias\');\">Enviar</button></a>\n  </ion-content>\n</ion-view>\n");}]);