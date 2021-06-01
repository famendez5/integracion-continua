# Integración Continua

## Justificación

Se implementará una aplicación web usando tecnlogías HTML5, CSS y JS para crear un formulario que permita convertir documentos haciendo uso de una aplicación servidor que se encarga de convertir los documentos usando el software [LibreOffice](https://libreoffice.org).

## Arquitectura

En el siguiente diagrama se evidencia la arquitectua que tendrá la solución:

![imagen](https://user-images.githubusercontent.com/63758241/120250059-6d298600-c242-11eb-9dea-809f6a7a3ee2.png)


El usuario accederá a la aplicación web usando un navegador web, allí encontrará un formulario en el que puede seleccionar un documento y el formato al que desea convertirlo, esta aplicación web enviará el documento seleccionado al servidor que convierte el documento y una vez finalizado el proceso descargará el documento convertido.

## Ejecutar contenedores

### 1. Contenedor LibreOfficeConvert

Esta imagen está publicada en dockerhub y por lo tanto basta con ejecutar el siguiente comando para correr el servicio:

```bash
docker run --rm -p 9090:8080 fabianmendez/libreofficeconvert:0.1.0
```

En este ejemplo, se mapea el puerto `9090` de la maquina host al puerto `8080` del contenedor, en el cual el servicio está a la escucha.


### 2. Contenedor AppWeb

Primero se debe compilar la aplicación, ejecutando el siguiente comando en el directorio `app`:

```bash
VITE_CONVERTER_SERVER=http://localhost:9090 npm run build
```

La aplicación compilada queda en el directorio `dist`.

Ahora se ejecuta el siguiente comando para genera la imagen docker:

```bash
docker build -t convertirdocumentos:0.1.0 .
```

Finalmente, se inicia el contenedor con el siguiente comando:
```bash
docker run --rm -p 9091:5000 convertirdocumentos:0.1.0
```
En este ejemplo, se mapea el puerto `9091` de la maquina host al puerto `5000` del contenedor, en el cual el servicio HTTP está a la escucha.

### Uso

Se debe ingresar a la url `http://localhost:9091`:

![imagen](https://user-images.githubusercontent.com/63758241/120249446-8e897280-c240-11eb-94cf-3dc3cb7c9f1b.png)

Seleccionar el documento y el formato:

![imagen](https://user-images.githubusercontent.com/63758241/120249470-a2cd6f80-c240-11eb-9919-fe87e7b4f505.png)

Al hacer clic en el botón aceptar, después de unos segundos se obtiene el documento convertido:

![imagen](https://user-images.githubusercontent.com/63758241/120249502-bd9fe400-c240-11eb-9bcb-2f4930da8de5.png)

Adicionalmente, en los logs del servicio `libreofficeconvert` se evidencia que se ha procesado el documento:

![imagen](https://user-images.githubusercontent.com/63758241/120249563-f5a72700-c240-11eb-86f5-2180c218d198.png)
