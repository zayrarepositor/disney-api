<p align='center'>
<img src="https://readme-typing-svg.herokuapp.com?color=CAC8F8&background=1C1C1D&size=25&center=true&vCenter=true&width=433&height=75&lines=Hi!+I+am+Zayra+Velasco;Soft+dev+and+Admin+manager;it+is+a+backend+project;to+Alkemy;disney+characters+and+movies;enjoy+it+!">
</p>

# disney-api

## DataBase

- Character: 
  ○ Image.
  ○ Name.
  ○ Age.
  ○ Weight.
  ○ History.
  ○ Movies associated.
- Movie:
  ○ Image.
  ○ Title.
  ○ Date.
  ○ Rating.
  ○ Characters associated.
- Genre:
  ○ Name.
  ○ Image.
  ○ Movies associated.

## Autentication de Usuarios
   Para realizar peticiones a los endpoints subsiguientes el usuario deberá contar con un token que
   obtendrá al autenticarse. Para ello, deberán desarrollarse los endpoints de registro y login, que
   permitan obtener el token.
   Los endpoints encargados de la autenticación deberán ser:
   ● /auth/login
   ● /auth/register

## Characters Endpoints

- GET => /characters
  Get all characters 
- POST => /characters
  Create a character
- PUT => /characters
  Edit  a character
- DELETE => /characters
  Delete a character
- GET => /characters?name=name
  Filter by name: Character details and movies associated
- GET => /characters?age=age
  Filter by age: Character details and movies associated
- GET => /characters?weight=weight
  Filter by weight: Character details and movies associated
- GET => /characters?movies=idMovie
  Filter by movies character worked in: Character details

## Movies Endpoints

- GET => /movies?order=ASC | DESC
  Get all movies. Could be ordered by creation date ASC or DESC. 
- POST => /movies
  Create a movie
- PUT => /movies
  Edit a movie
- DELETE => /movies
  Delete a movie

- GET => /movies?name=name
  Filter by name: Movie details and characters associated
- GET => /movies?genre=genre&order=ASC | DESC
  Filter by genre: Movie details and characters associated. Could be ordered by creation date ASC or DESC.

## Envío de emails
    Al registrarse en el sitio, el usuario deberá recibir un email de bienvenida. Es recomendable, la
    utilización de algún servicio de terceros como SendGrid.

Documentación

## Tests
De forma opcional, se podrán agregar tests de los diferentes endpoints de la APP, verificando
posibles escenarios de error:
● Campos faltantes o con un formato inválido en BODY de las peticiones
● Acceso a recursos inexistentes en endpoints de detalle
Los tests pueden realizarse utilizando Mocha + Chai.

## Snips
* Characters
![characters-delete](https://user-images.githubusercontent.com/95602965/180970726-11544d0d-24e1-440f-bb90-f09ffca1d278.png)
![characters-get](https://user-images.githubusercontent.com/95602965/180970731-7193dde0-d53e-429b-80ef-2a90558d9e18.png)
![characters-getage](https://user-images.githubusercontent.com/95602965/180970736-c0f79eea-8fea-4219-9c35-171350bc3b22.png)
![characters-getmovies](https://user-images.githubusercontent.com/95602965/180970740-2f1d86be-3988-4999-9b12-7714dd00290a.png)
![characters-getname](https://user-images.githubusercontent.com/95602965/180970746-c88c9012-53a9-4718-a1e1-83c1edc94e28.png)
![characters-getweight](https://user-images.githubusercontent.com/95602965/180970748-d9403d6b-8a06-41a4-9e16-58e250c54caa.png)
![characters-post](https://user-images.githubusercontent.com/95602965/180970753-136ad6dd-5615-425d-a765-2f6273d4c98c.png)
![characters-post2](https://user-images.githubusercontent.com/95602965/180970758-6b0c3bd5-4145-4e68-a314-b1a958d03151.png)
![characters-put](https://user-images.githubusercontent.com/95602965/180970765-626c282c-4ead-4c7b-8eb4-99e258426438.png)
* Genres
![genres-delete](https://user-images.githubusercontent.com/95602965/180970768-b48d308c-8512-40f6-b90a-5b0308b3f0ba.png)
![genres-get](https://user-images.githubusercontent.com/95602965/180970770-7f8003c4-a030-4bcc-bbd0-56c7ea77a6ce.png)
![genres-post](https://user-images.githubusercontent.com/95602965/180970773-6339a2d5-fc74-40b0-9661-be5581b05c06.png)
![genres-put](https://user-images.githubusercontent.com/95602965/180970780-27376e76-101f-4484-9600-fe016dcb4207.png)
* Movies
![movies-delete](https://user-images.githubusercontent.com/95602965/180970786-76346770-cf1e-4cfc-a6cf-ef231a3e0077.png)
![movies-get](https://user-images.githubusercontent.com/95602965/180970789-6b1cf29b-87c6-47e6-ad3c-3a04d39f2f8a.png)
![movies-getASCorder](https://user-images.githubusercontent.com/95602965/180970794-7de7a2a8-0c76-461a-aba6-fd13b9eb2103.png)
![movies-getDESCorder](https://user-images.githubusercontent.com/95602965/180970797-b72cad98-e197-4444-aa23-f54ac3b735d8.png)
![movies-getgenre](https://user-images.githubusercontent.com/95602965/180970802-2036f62b-37aa-432d-8de1-a8716c149819.png)
![movies-getgenreASCorder](https://user-images.githubusercontent.com/95602965/180970805-f35f94cd-6122-4853-ac57-8f133ca523ab.png)
![movies-getgenreDESCorder](https://user-images.githubusercontent.com/95602965/180970810-cec2580a-98bb-4260-abe4-85faef31f505.png)
![movies-getname](https://user-images.githubusercontent.com/95602965/180970817-7efdfa30-3df4-41d9-880e-b964850a260c.png)
![movies-post](https://user-images.githubusercontent.com/95602965/180970821-ac099eab-0a42-4ecd-93a4-879b5407c6b3.png)
![movies-post2](https://user-images.githubusercontent.com/95602965/180970824-25fe010f-10c4-424a-8373-4b912d85792c.png)
![movies-put](https://user-images.githubusercontent.com/95602965/180970826-d1b8e677-88c0-4754-92a9-a721d5fda897.png)
* Registration
![authregister](https://user-images.githubusercontent.com/95602965/181134131-24b353cb-62e5-4186-b669-38188760ee33.png)
* Login
![authloginIncorrectemail](https://user-images.githubusercontent.com/95602965/181134109-894e8975-1ae1-4073-89f8-4f451e451b3b.png)
![authloginIncorrectpassword](https://user-images.githubusercontent.com/95602965/181134121-f109dc06-dff7-4aad-b23f-9e318db2f360.png)
![authloginsuccesfully](https://user-images.githubusercontent.com/95602965/181134125-5edac414-a9b7-4019-ae10-71a53518c947.png)

Good Life! ( ͡~ ͜ʖ ͡°)

