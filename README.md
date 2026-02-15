 ##BITACORA DEL PROYECTO

# HERRAMIENTAS

gestor: MySql -maria db

express: Framework node js => gestionar APIS protocolo http
node js: js standalone - instalado en mi pc --> en consola: node -v
nodemon: plugin para usar en desarrollo - No se usa en produccion
mysql2: gestionar las interacciones con la bd
cors: plugin para la gestion de cors en diferentes ambientes de programacion o IPS
env: variables globales del proyecto

##HERRAMIENTAS FRONT

CSS:Framework Boostrap
Bundler: Vite --(webpack)
Vanilla js


##Paso a paso BackEnd
-iniciar el proyecto con node js -npm init
-Instalaar los paquetes requeridos : npm install nodemon mysql2 cors env express
-configurar el control de versiones del codigo:Crear el .gitignore
-Iniciar el seguimiento del repositorio: git init, git add .
-creamos el repo en la nube: github
-conectamos el repo de la nube con el repo local
-Revision del package.json: verificar las dependencias
-modifcamos el package para ejecuccion del proyecto:
"start" : "node index.js" - Que es para el modo produccion, es decir para ejecutar el proyecto en un entorno real, sin necesidad de estar monitoreando los cambios en el codigo.
"dev" : "nodemon index.js" - Es para el modo desarrollo, es decir para ejecutar el proyecto en un entorno de desarrollo, donde se monitorean los cambios en el codigo y se reinicia automaticamente el servidor cada vez que se detecta un cambio.

## codificacion del proyecto

-crear el archivo principal: index.js
-configurar los pluggings: nodemon,cors, hacer la primera prueba npm run dev (modo desarrollador) npm start (modo producction)

## Creacion del modulo conexion a la base de datos

-importamos la libreria mysql2 y hacemos la conexion de acuerdo al ejemplo

## Implementacion de arquitectura por capas (N_TIER)
Controller: controlador del modulo,maneja la logica de peticiones y respuestas
Router: se encarga de construir los endpoints o rutas de la API,En ella podemos inyectar los middleware 
Models: Se encarga de la interaccion (Consultas) con el sistema gestor de base de datos SGBD, implementa la logica dele negocio
Middleware: Es una capa intermedia entre el cliente y la API(ejemplo validar token,validar IP mediante cors)
Helpers:ayudas, ayudante, clases o funciones reusables del sistema. Por ejemplo, un sistema de errores.