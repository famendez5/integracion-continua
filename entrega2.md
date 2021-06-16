# Entrega 2


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


## Referencias:
 - https://www.jenkins.io/doc/book/installing/war-file/

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
