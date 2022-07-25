# disney-api

Requerimientos técnicos

1. Modelado de Base de Datos

- Personaje: deberá tener,
  ○ Imagen.
  ○ Nombre.
  ○ Edad.
  ○ Peso.
  ○ Historia.
  ○ Películas o series asociadas.
- Película o Serie: deberá tener,
  ○ Imagen.
  ○ Título.
  ○ Fecha de creación.
  ○ Calificación (del 1 al 5).
  ○ Personajes asociados.
- Género: deberá tener,
  ○ Nombre.
  ○ Imagen.
  ○ Películas o series asociadas.

2. Autenticación de Usuarios
   Para realizar peticiones a los endpoints subsiguientes el usuario deberá contar con un token que
   obtendrá al autenticarse. Para ello, deberán desarrollarse los endpoints de registro y login, que
   permitan obtener el token.
   Los endpoints encargados de la autenticación deberán ser:
   ● /auth/login
   ● /auth/register

## CHARACTERS ENDPOINTS

- GET => /characters
  Listado de Personajes (imagen y nombre)
- POST => /characters
  Creación de Personajes
- PUT => /characters
  Edición de Personajes
- DELETE => /characters
  Eliminación de Personajes
- GET => /characters?name=name
  Buscar por nombre: Detalle de Personaje (atributos del personaje y sus películas relacionadas)
- GET => /characters?age=age
  Filtrar por edad: Detalle de Personaje (atributos del personaje y sus películas relacionadas)
- GET => /characters?weight=weight
  Filtrar por peso: Detalle de Personaje (atributos del personaje y sus películas relacionadas)
- GET => /characters?movies=idMovie
  Filtrar por películas en las que participó: Detalle de Personaje (atributos del personaje y sus películas relacionadas)

## MOVIES ENDPOINTS

- GET => /movies
  Listado de Películas (imagen, título y fecha de creación)
- POST => /movies
  Creación de Película
- PUT => /movies
  Edición de Película
- DELETE => /movies
  Eliminación de Película

- GET => /movies?name=name
  Buscar por título: Detalle de Película con sus personajes
- GET => /movies?genre=genre
  Filtrar por género
  /movies?order=ASC | DESC
  ordenar los resultados por fecha de creación de forma ascendiente o descendiente.

11. Envío de emails
    Al registrarse en el sitio, el usuario deberá recibir un email de bienvenida. Es recomendable, la
    utilización de algún servicio de terceros como SendGrid.

Documentación

Es deseable documentar los endpoints utilizando alguna herramienta como Postman o
Swagger.
Tests
De forma opcional, se podrán agregar tests de los diferentes endpoints de la APP, verificando
posibles escenarios de error:
● Campos faltantes o con un formato inválido en BODY de las peticiones
● Acceso a recursos inexistentes en endpoints de detalle
Los tests pueden realizarse utilizando Mocha + Chai.
