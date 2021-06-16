# Entrega 2
Cómo instalar Jenkins. Tutorial básico
Para instalar Jenkins en tu servidor primero te tienes que bajar una versión desde su página web oficial: https://jenkins.io/download/

Como ves, hay dos versiones, la LTS y la Weekly, la versión LTS la sacan anualmente de tal forma que sea lo más estable posible, si por el contrario, quieres estar siempre a la última escoge la Weekly, aunque puede tener ciertos bugs.

Lo bueno es que para ambas versiones ofrecen descargas para todo tipo de servidores y sistemas por lo que no vas a tener problema en ningún servidor, incluso hay una versión en docker por si lo quieres tener en un contenedor aislado.

Para instalarlo, depende del sistema en el que lo vayas a ejecutar, pero básicamente se resume en descargar el paquete disponible desde tu repositorio de paquetes de la distro en el que se instale, o si lo preferimos, descargar el .war y ejecutarlo de la siguiente manera:

java -jar jenkins*.war
De todas formas te dejo un enlace oficial en inglés de como instalarlo en los diferentes sistemas: https://jenkins.io/doc/book/installing/

Para ello simplemente he descargado la imagen de docker desde Kitematic (una GUI de docker que recomiendo) y la he ejecutado.

Configuración de Jenkins y cómo instalar plugins
Tras ejecuta Jenkins nos dirigimos a la ruta en local donde lo hayamos configurado, en mi caso, http://localhost:32769/ y nos aparecerá una imagen tal que así:

Pantalla de bienvenida de Jenkins

Como ves lo que tienes que hacer es dirigirte a la ruta que indica para poner la contraseña del administrador, en mi caso, al ser en docker, el asistente de instalación ya me dió la contraseña en consola:

Salida de consola de docker con la clave de Jenkins

Tras poner la consola nos preguntará si queremos instalar los plugins recomendados:

¿Instalar plugins en Jenkins?

Yo voy a seleccionarlos manualmente para ver que opciones tenemos y poder decidir mejor. En la siguiente pantalla aparecerá algo tal que así:

Cómo instalar plugins en Jenkins

Como puedes ver hay un montón de opciones ordenados en categorías junto a su descripción. Los que aparecer marcados por defecto son los recomendados. Esta parte es subjetiva, cada uno instala los que considere mejor para su caso de uso.

A mi personalmente me gusta mucho build-name-setter para poder poner nombres a los builds por ejemplo si queremos diferenciar ciertos builds y econtrarlos con facilidad. También me gusta mucho rebuilder para volver a ejecutar un build anterior con los mismos parámetros. En cuanto a las build tools marco nodejs y desmarco gradle ya que personalmente no lo voy a utilizar. El de cobertura lo instalo por si quiero pasar tests en un proyecto. Por último en Source Code Management selecciono Github que es con lo que suelo trabajar y desmarco suversion. Estos son los que a mí, personalmente, me parecen los mejores plugins de Jenkins, pero como he dicho antes, aquí cada uno que seleccione lo que más le interese.

Hacemos clic en install y esperamos a que instale Jenkins y los plugins que hemos seleccionado. Tranquilo porque si posteriormete quieres añadir plugins nuevos lo puedes hacer desde el panel de control.

Pantalla de instalación de Jenkins

Por último nos va a pedir un usuario para usar con Jenkins, aunque también podemos continuar como admin. Y listo ya tenemos Jenkins instalado y listo para empezar a usar.

Primeros pasos con Jenkins: Tutorial para empezar a usarlo
Lo que vas a leer a continuación no se trata de un manual exhaustivo ni de un tutorial de Jenkins en profundidad, simplemente es una aproximación y una guia básica de funcionamiento. Tanto si eres usuario con conocimientos básicos o una persona que se dedique en específico al devops, te recomiendo que leas este tutorial de cómo funciona Jenkins por si te sirve algo para tu caso de uso particular.

Tras instalarlo la pantalla principal que aparecerá es como esta:

Panel de control de Jenkins

Jenkins se basa en tareas. Como su nombre indica una tarea es un trabajo o un conjunto de instrucciones que podemos programar para que ocurran con una determinada acción. Si pinchas en crear una nueva tarea:

Cómo crear una tarea en Jenkins

Voy a crear una tarea de ejemplo para ver como funciona este sistema. Para ello pongo un nombre a la tarea y selecciono crear proyecto estilo libre para poder configurarlo a mi gusto:

Cómo crear una tarea en Jenkins

Si has elegido plugins distintos al mío seguramente te salgan otras opciones. La primera sección es para la configuración básica como el nombre del proyecto la descripción, cómo vamos a querer las ejecuciones si queremos desechar las antiguas automáticamente, etc.

Más abajo podrás encontrar el origen del código, en mi caso he puesto git y he pegado la dirección del repositorio de Gihub, como ves, puedes seleccionar el origen de la rama, credenciales y qué disparador vamos a querer. Las ejecuciones pueden ser desde scripts, cuando se haga otro build, periódicamente (en cuyo caso hay que indicar cada cuanto tiempo), disparadores para gitscm y periódicamente consultando el repositorio. Yo voy a escoger consultar repositorio y voy a introducir H/15** para que se ejecute si hay un cambio en el repositorio cada 15 minutos. Si no sabes lo que significa H/15** esta expresión no te preocupes porque te voy a dejar un generador de estas expresiones, para que sepas cómo programar tareas en Jenkins: https://crontab.guru/

Selección del código fuente

Al final encontramos dónde queremos que se ejecuten las tareas y qué queremos ejecutar antes y despues. Desde las opciones de entorno de ejecución podemos configurar cómo se van a ejecutar los build, si vamos a poner ficheros de configuración, por ejemplo, o si vamos a indicar rutas para los PATH de node y npm, o de si vamos a darle un nombre específico a la ejecución (si tenemos instalado el plugin), etc.

Entorno de ejecución

Para decidir qué queremos ejecutar hay muchas opciones dependiendo del tipo de proyecto que vayamos a ejecutar, pueden ser comandos de línea de comandos, comandos nodejs, comandos de windows, etc. Como ves se puede adaptar a todo tipo de proyectos y topdavía se puede ampliar más con plugins. También se pueden encadenar distintos pasos por ejemplo ejecutar un script de shell y luego uno de windows.

Seleccion de lo que queremos ejecutar

Por último decidir que hacemos despues, si notificar usuarios, guardar logs, imprimir resultados, hacer commit, publicar cobertura etc.

Tras crear la tarea tendrás acceso al panel de control de la tarea, desde aquí podrás seleccionar si lanzarla manualmente, ver los logs, las builds anteriores, volver a configurar la tarea, etc. En mi caso sale el icono del último build en rojo indicando que algo ha fallado:

Entorno de ejecución

Si hacemos clic sobre el build, podemos ver su estado y la salida de consola para ver exactamente que ha fallado.

Blue ocean el mejor plugin para Jenkins para crear pipelines
Con esto ya seríamos capaces de tener tareas automatizadas funcionando pero como la creación de tareas es algo tediosa, hay un plugin muy famoso el cual recomiendo encarecidamente que se llama Blue Ocean. Este plugin sirve para crear pipelines al completo gestionando mucho mejor la conexión con el repositorio. Para instalarlo te tienes que dirigir a la configuración de Jenkins > Andministración de plugins > Todos los plugins, buscas Blue ocean y lo instalas.

Cómo crear una pipeline con Blue Ocean

Como ves la interfaz de usuario es mucho más amigable y más pensada para todo el mundo. Desde aquí vas a poder configurar los pipelines mucho mas fácil. Además te permite seleccionar mejor cuando saltan los builds, por ejemplo, al crear un pull request, al aceptarlo, al crear una rama, etc, que hasta ahora no lo habíamos hecho.

Cómo crear una pipeline con Blue Ocean



<!-- Aquí desarrollar la entrega -->

## Pasos para el despliegue

### Instalación

1. Descargar la última versión estable desde el siguiente link: https://www.jenkins.io/download
![imagen](https://user-images.githubusercontent.com/63758241/122138100-aac60b80-ce0b-11eb-9e1a-720283d03a53.png)
2. Abrir una terminal o consola de comandos y dirigirse al directorio en el que se guardó el archivo:
![imagen](https://user-images.githubusercontent.com/63758241/122138219-e19c2180-ce0b-11eb-891e-26fb1c4e45b8.png)
3. Ejecutar el comando `java -jar jenkins.war`:
![imagen](https://user-images.githubusercontent.com/63758241/122138424-51aaa780-ce0c-11eb-86c4-211740669d9e.png)
4. Abrir la URL http://localhost:8080/ en el navegador:
![imagen](https://user-images.githubusercontent.com/63758241/122138554-959dac80-ce0c-11eb-8687-2f49d3b6166c.png)
6. Ingresar la contraseña generada en la consola:
![imagen](https://user-images.githubusercontent.com/63758241/122138580-a0f0d800-ce0c-11eb-9e0f-43b561f544e3.png)
7. Instalar los plugins recomendados:
![imagen](https://user-images.githubusercontent.com/63758241/122138685-d4cbfd80-ce0c-11eb-8c02-49db69383e25.png)
8. Crear usuario
![imagen](https://user-images.githubusercontent.com/63758241/122138930-6a678d00-ce0d-11eb-9ac7-74ef601a717f.png)
9. Finalizar instalación
![imagen](https://user-images.githubusercontent.com/63758241/122138936-6cc9e700-ce0d-11eb-9fb5-9cc6a92b8543.png)


### Configuración

1. Generar token de acceso personal de Github, ingresando al link https://github.com/settings/tokens y haciendo clic en el botón `Generate new token`:
![imagen](https://user-images.githubusercontent.com/63758241/122139559-ddbdce80-ce0e-11eb-8db3-a32ce1abb665.png)
2. Como nombre ingresar `Jenkins` y como alcance marcar la casilla `repo`:
![imagen](https://user-images.githubusercontent.com/63758241/122139649-0e056d00-ce0f-11eb-850f-c18a59cf830e.png)
3. Hacer clic en el botón `Generate token` ubicado al final de la página:
![imagen](https://user-images.githubusercontent.com/63758241/122139698-2d03ff00-ce0f-11eb-8eec-98cc32b7f73c.png)
4. Copiar el token generado:
![imagen](https://user-images.githubusercontent.com/63758241/122139750-4efd8180-ce0f-11eb-8021-082875c7886c.png)

5. En la consola de Jenkins, seleccionar el menú `Administrar Jenkins`:
![imagen](https://user-images.githubusercontent.com/63758241/122139901-9be15800-ce0f-11eb-86fa-11ff4e15a7e7.png)

6. Seleccionar la opción `Manage Credentials`:
![imagen](https://user-images.githubusercontent.com/63758241/122139933-ac91ce00-ce0f-11eb-8799-c62d85b219e8.png)

7. En el alcance, seleccionar `global`:
![imagen](https://user-images.githubusercontent.com/63758241/122139978-c206f800-ce0f-11eb-9880-4510fd493c3b.png)

8. Seleccionar la opción `Add Credentials`:
![imagen](https://user-images.githubusercontent.com/63758241/122140025-d3e89b00-ce0f-11eb-993e-54434a1bf601.png)

9. Diligenciar el formulario así: (i) en el campo `kind` seleccionar `Username and password`, (ii) en el campo `scope` seleccionar `global`, (iii) en el campo username ingresar el nombre de usuario de github, (iv) el campo `password` ingresar el token copiado anteriormente y (v) en el campo `id` ingresar un identificador de la credencial:
![imagen](https://user-images.githubusercontent.com/63758241/122140260-70ab3880-ce10-11eb-97cc-c683b58038c2.png)


10. Generar otro token de acceso siguiendo los pasos explicados anteriormente, esta vez marcando la casilla `admin:repo_hook` además de la casilla `repo`:
![imagen](https://user-images.githubusercontent.com/63758241/122140495-0777f500-ce11-11eb-9973-e6e07390c1a5.png)

![imagen](https://user-images.githubusercontent.com/63758241/122140501-0a72e580-ce11-11eb-9116-6125dbcd2e6a.png)

11. Crear otra credencial en la consola de Jenkins, esta vez seleccionando como `kind` la opción `Secret text` y pegando el token generado en el campo `Secret`:
![imagen](https://user-images.githubusercontent.com/63758241/122140607-56be2580-ce11-11eb-8bfe-e11c9f908eb3.png)


### Configuar hooks en Jenkins

1. Seleccionar la opción `Configuar sistema` en el menú `Administrar Jenkins`:

![imagen](https://user-images.githubusercontent.com/63758241/122140709-853c0080-ce11-11eb-9d28-2228c9b093c3.png)

2. En la sección `Github`, seleccionar la opción `Add GitHub Server`:
![imagen](https://user-images.githubusercontent.com/63758241/122140817-b74d6280-ce11-11eb-8ec0-98c044fd231c.png)


3. Llenar el formulario así: (i) en nombre ingresar `GitHub`, (ii) en `credentials` seleccionar la última credencial creada y (iii) marcar la casilla `Manage hooks`:
![imagen](https://user-images.githubusercontent.com/63758241/122140986-072c2980-ce12-11eb-9971-460f6c8bb54b.png)


### Configurar repositorio

1. Crear el archivo `Jenkinsfile` en el directorio raíz del repositorio:

![imagen](https://user-images.githubusercontent.com/63758241/122142352-e9ac8f00-ce14-11eb-91f7-291503101399.png)

2. Agregar una nueva tarea en la consola de Jenkins:

![imagen](https://user-images.githubusercontent.com/63758241/122141904-efee3b80-ce13-11eb-89be-19f6f46d4551.png)


3. Darle un nombre a la tarea y seleccionar `Multibranch pipeline`:

![imagen](https://user-images.githubusercontent.com/63758241/122142440-12cd1f80-ce15-11eb-844a-0824e822f480.png)

4. En la sección `Branch Sources` seleccionar Github:
![imagen](https://user-images.githubusercontent.com/63758241/122142137-6d19b080-ce14-11eb-882b-5ee8c39f507b.png)

5. Seleccionar las credenciales que empiecen con el nombre de usuario de Github, ingresar el link del repositorio y hacer click en `Save`:

![imagen](https://user-images.githubusercontent.com/63758241/122142280-bec23b00-ce14-11eb-84dc-b637b9f0a513.png)


6. Finalmente saldrá un mensaje que indica que el repositorio ha quedado configurado correctamente:

![imagen](https://user-images.githubusercontent.com/63758241/122142626-79ead400-ce15-11eb-9e27-733022cfb582.png)



## Referencias:
 - https://www.jenkins.io/doc/book/installing/war-file/
 - https://codingpotions.com/jenkins-integracion-continua

<!-- Aquí finaliza la entrega -->

## Notas

### Pregunta a responder

¿Cómo se puede integrar Jenkins como un gestor de operaciones y las características requeridas para la integración?

### Caracteristicas

 - Requisitos de software
 - Requisitos de hardware
 - Despliegue del paquete
 - Implementación del sistema
 - Configuración básica después de la instalación

**Importante**: Todo debe estar soportado por referencias (numeración, título, fuente)

 - Buscar de qué se trata Jenkins

 - Qué características necesitamos y para qué sirven

## Rúbrica

|Descripción|Nota|
|--|--|
|Mínimo 5 paginas - Máximo 20 páginas|10|
|¿Cómo se puede inegrar Jenkins como un gestor de operaciones? - (referencias - citaciones correspondientes)|20|
|¿Qué es un gestor de operaciones? - (referencias - citaciones correspondientes)|20|
|Pasos para realizar la implementación de Jenkins|30|
|Características requeridas para realizar la implementación de Jenkins|30|
|Pasos para el despliegue|10|
|Conclusiones|20|
|Referencias en formato APA/IEEE|10|
