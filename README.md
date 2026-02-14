# Hospisoft



Hospisoft es un sistema de gestión hospitalaria desarrollado en Node.js. Este proyecto está estructurado en base a la arquitectura MVC (Modelo-Vista-Controlador) y utiliza Express para la gestión de rutas y controladores. A continuación, se documenta detalladamente cada parte importante del proyecto.

## Estructura del Proyecto

```
app.js
index.js
package.json
script.sql
src/
  controllers/
    medicamento.controller.js
    medico.controller.js
  models/
    bdatos.js
    medicamento_model.js
    medico_model.js
  routes/
    medicamento.routes.js
    medico.routes.js
```

---

## Archivos Principales

### app.js

Archivo principal de configuración de la aplicación. Aquí se inicializan los middlewares, rutas y la conexión con la base de datos.

### index.js

Punto de entrada de la aplicación. Se encarga de levantar el servidor y escuchar en el puerto configurado.

### package.json

Contiene la información del proyecto y la lista de dependencias necesarias para su funcionamiento.

### script.sql

Script para la creación y configuración de la base de datos utilizada por el sistema.

---

## Carpeta `src/controllers/`

Contiene los controladores, que gestionan la lógica de negocio y la interacción entre las rutas y los modelos.

### medicamento.controller.js

Controlador encargado de la gestión de medicamentos. Sus funciones principales suelen ser:

- Crear, leer, actualizar y eliminar medicamentos (CRUD).
- Validar la información recibida desde las rutas.
- Llamar a los métodos del modelo correspondiente para interactuar con la base de datos.

### medico.controller.js

Controlador encargado de la gestión de médicos. Sus funciones principales incluyen:

- CRUD de médicos.
- Validación de datos de entrada.
- Comunicación con el modelo de médicos para operaciones en la base de datos.

---

## Carpeta `src/models/`

Contiene los modelos, que representan la estructura de los datos y gestionan la interacción directa con la base de datos.

### bdatos.js

Archivo de configuración de la conexión a la base de datos. Aquí se define cómo se conecta la aplicación a la base de datos (por ejemplo, usando `mysql` o `sequelize`).

### medicamento_model.js

Modelo que define la estructura de los datos de medicamentos y contiene los métodos para interactuar con la base de datos, como:

- Obtener todos los medicamentos.
- Buscar un medicamento por ID.
- Insertar, actualizar o eliminar medicamentos.

### medico_model.js

Modelo que define la estructura de los datos de médicos y contiene los métodos para interactuar con la base de datos, como:

- Obtener todos los médicos.
- Buscar un médico por ID.
- Insertar, actualizar o eliminar médicos.

---

## Carpeta `src/routes/`

Contiene las rutas de la aplicación, que definen los endpoints disponibles y qué controlador se encarga de cada uno.

### medicamento.routes.js

Define las rutas relacionadas con los medicamentos, por ejemplo:

- `GET /medicamentos` — Listar todos los medicamentos.
- `POST /medicamentos` — Crear un nuevo medicamento.
- `PUT /medicamentos/:id` — Actualizar un medicamento existente.
- `DELETE /medicamentos/:id` — Eliminar un medicamento.

Cada ruta llama a la función correspondiente del controlador de medicamentos.

### medico.routes.js

Define las rutas relacionadas con los médicos, por ejemplo:

- `GET /medicos` — Listar todos los médicos.
- `POST /medicos` — Crear un nuevo médico.
- `PUT /medicos/:id` — Actualizar un médico existente.
- `DELETE /medicos/:id` — Eliminar un médico.

Cada ruta llama a la función correspondiente del controlador de médicos.

---

## Flujo General de la Aplicación

1. **El usuario realiza una petición HTTP** a un endpoint definido en las rutas.
2. **La ruta recibe la petición** y la redirige al controlador correspondiente.
3. **El controlador procesa la lógica de negocio** y valida los datos.
4. **El controlador llama al modelo** para interactuar con la base de datos.
5. **El modelo ejecuta la consulta** y devuelve el resultado al controlador.
6. **El controlador responde** al usuario con el resultado de la operación.

---

## Consideraciones Importantes

- **Modularidad:** Cada entidad (medicamento, médico) tiene su propio modelo, controlador y rutas, facilitando la escalabilidad y el mantenimiento.
- **Separación de responsabilidades:** Los controladores no acceden directamente a la base de datos, sino a través de los modelos.
- **Fácil extensión:** Para agregar nuevas entidades, basta con crear nuevos modelos, controladores y rutas siguiendo la misma estructura.

---

## Recomendaciones para Extender el Proyecto

- Seguir la misma estructura para nuevas entidades.
- Implementar validaciones adicionales en los controladores.
- Utilizar middlewares para autenticación y manejo de errores.
- Documentar cada función y endpoint para facilitar el mantenimiento.

---

## Contacto

Para dudas o sugerencias, contactar al desarrollador principal del proyecto.

# IMPORTANTE 
#### para encender el servidor: npm run dev