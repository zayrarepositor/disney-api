<p align='center'>
<img src="https://readme-typing-svg.herokuapp.com?color=CAC8F8&background=1C1C1D&size=25&center=true&vCenter=true&width=433&height=75&lines=Hi!+I+am+Zayra+Velasco;Soft+dev+and+Admin+manager;it+is+a+backend+project;to+Alkemy;disney+characters+and+movies;enjoy+it+!">
</p>

# disney-api

Backend project with nodejs, express and sequilize for alkemy.

## Deploy

Heroku ☞ https://disney-2022.herokuapp.com/

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

## Sign up, Log in & Users Authentication.

**Important** You will need to register to endpoints access

- SIGN UP => /auth/register

==> REGISTRATION DATA YOU WILL SEND:

    {
    "username": "rodrigo",
    "email": "anaturistaintegral@gmail.com",
    "password": "rodrigossword123!",
    "roleId": "user" //OPTIONAL
    }

==> SUCCESSFUL REGISTRATION RESPONSE:

    {
    "msg": "Registration done! You are sign up",
    "newUser": {
    "id": 29,
    "username": "rodrigo",
    "email": "anaturistaintegral@gmail.com",
    "password": "$2a$10$LDnEE29MLvChjiQo8gqW8upimaB7gTj/R.Pt86rCy/CAdrW8JVitG",
    "roleId": 2
    },
    **Important** "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksImlhdCI6MTY1OTAyNTM4NSwiZXhwIjoxNjU5MTExNzg1fQ.jFxM_aQIlRIdb6yBq8iXRjQ1G0Mn7qC8Hckrh7YsPMM"
    "mailerMsg": "Check anaturistaintegral@gmail.com for confirmation and token copy"
    }

- LOG IN => /auth/login

Email and password required.

**Important** token is required in all endpoints except GET endpoints. send it by header as "access-token"

## Characters Endpoints

- GET => /characters
  Get all characters
- POST => /characters
  Create a character
- PUT => /characters
  Edit a character
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

## Mailing

When you successfully register yourself, you will receive a mail notification.
Tech: Nodemailer

## Snips.

    Tech for Requests: ThunderClient

- Characters
<p align='center'>☑ DELETE</p>

![characters-delete](https://user-images.githubusercontent.com/95602965/180970726-11544d0d-24e1-440f-bb90-f09ffca1d278.png)

<p align='center'>☑ GET ALL CHARACTERS</p>

![characters-get](https://user-images.githubusercontent.com/95602965/180970731-7193dde0-d53e-429b-80ef-2a90558d9e18.png)

<p align='center'>☑ GET BY AGE</p>

![characters-getage](https://user-images.githubusercontent.com/95602965/180970736-c0f79eea-8fea-4219-9c35-171350bc3b22.png)

<p align='center'>☑ GET BY MOVIE</p>

![characters-getmovies](https://user-images.githubusercontent.com/95602965/180970740-2f1d86be-3988-4999-9b12-7714dd00290a.png)

<p align='center'>☑ GET BY NAME</p>

![characters-getname](https://user-images.githubusercontent.com/95602965/180970746-c88c9012-53a9-4718-a1e1-83c1edc94e28.png)

<p align='center'>☑ GET BY WEIGHT</p>

![characters-getweight](https://user-images.githubusercontent.com/95602965/180970748-d9403d6b-8a06-41a4-9e16-58e250c54caa.png)

<p align='center'>☑ POST</p>

![characters-post](https://user-images.githubusercontent.com/95602965/180970753-136ad6dd-5615-425d-a765-2f6273d4c98c.png)

<p align='center'>☑ GET BY AGE</p>

![characters-post2](https://user-images.githubusercontent.com/95602965/180970758-6b0c3bd5-4145-4e68-a314-b1a958d03151.png)

<p align='center'>☑ PUT</p>

![characters-put](https://user-images.githubusercontent.com/95602965/180970765-626c282c-4ead-4c7b-8eb4-99e258426438.png)

- Genres
<p align='center'>☑ DELETE</p>

![genres-delete](https://user-images.githubusercontent.com/95602965/180970768-b48d308c-8512-40f6-b90a-5b0308b3f0ba.png)

<p align='center'>☑ GET ALL GENRES</p>

![genres-get](https://user-images.githubusercontent.com/95602965/180970770-7f8003c4-a030-4bcc-bbd0-56c7ea77a6ce.png)

<p align='center'>☑ POST</p>

![genres-post](https://user-images.githubusercontent.com/95602965/180970773-6339a2d5-fc74-40b0-9661-be5581b05c06.png)

<p align='center'>☑ PUT</p>

![genres-put](https://user-images.githubusercontent.com/95602965/180970780-27376e76-101f-4484-9600-fe016dcb4207.png)

- Movies
<p align='center'>☑ DELETE</p>

![movies-delete](https://user-images.githubusercontent.com/95602965/180970786-76346770-cf1e-4cfc-a6cf-ef231a3e0077.png)

<p align='center'>☑ GET ALL MOVIES</p>

![movies-get](https://user-images.githubusercontent.com/95602965/180970789-6b1cf29b-87c6-47e6-ad3c-3a04d39f2f8a.png)

<p align='center'>☑ GET ALL MOVIES ORDER ASC</p>

![movies-getASCorder](https://user-images.githubusercontent.com/95602965/180970794-7de7a2a8-0c76-461a-aba6-fd13b9eb2103.png)

<p align='center'>☑ GET ALL MOVIES ORDER DESC</p>

![movies-getDESCorder](https://user-images.githubusercontent.com/95602965/180970797-b72cad98-e197-4444-aa23-f54ac3b735d8.png)

<p align='center'>☑ GET BY GENRE</p>

![movies-getgenre](https://user-images.githubusercontent.com/95602965/180970802-2036f62b-37aa-432d-8de1-a8716c149819.png)

<p align='center'>☑ GET BY GENRE ORDER ASC</p>

![movies-getgenreASCorder](https://user-images.githubusercontent.com/95602965/180970805-f35f94cd-6122-4853-ac57-8f133ca523ab.png)

<p align='center'>☑ GET BY GENRE ORDER DESC</p>

![movies-getgenreDESCorder](https://user-images.githubusercontent.com/95602965/180970810-cec2580a-98bb-4260-abe4-85faef31f505.png)

<p align='center'>☑ GET BY NAME</p>

![movies-getname](https://user-images.githubusercontent.com/95602965/180970817-7efdfa30-3df4-41d9-880e-b964850a260c.png)

<p align='center'>☑ POST</p>

![movies-post](https://user-images.githubusercontent.com/95602965/180970821-ac099eab-0a42-4ecd-93a4-879b5407c6b3.png)

<p align='center'>☑ POST</p>

![movies-post2](https://user-images.githubusercontent.com/95602965/180970824-25fe010f-10c4-424a-8373-4b912d85792c.png)

<p align='center'>☑ PUT</p>

![movies-put](https://user-images.githubusercontent.com/95602965/180970826-d1b8e677-88c0-4754-92a9-a721d5fda897.png)

- Registration

<p align='center'>☑ SUCCESSFUL REGISTRATION RESPONSE</p>

![mailingResponse](https://user-images.githubusercontent.com/95602965/181592806-947a83be-7ee6-4357-83da-fefaf5297b93.png)

<p align='center'>☑ SUCCESSFUL REQUEST WITH TOKEN AFTER REGISTRATION</p>

![authsuccessful](https://user-images.githubusercontent.com/95602965/181592810-96df9553-8c16-4c7e-92af-564192af1461.png)

<p align='center'>☑ FAILED REQUEST WITHOUT TOKEN</p>

![authfailed](https://user-images.githubusercontent.com/95602965/181592812-f097f571-662d-450b-9a66-a5f37ab6de8b.png)

- Login
<p align='center'>☑ MAIL VALIDATION</p>

![authloginIncorrectemail](https://user-images.githubusercontent.com/95602965/181134109-894e8975-1ae1-4073-89f8-4f451e451b3b.png)

<p align='center'>☑ PASSWORD VALIDATION</p>

![authloginIncorrectpassword](https://user-images.githubusercontent.com/95602965/181134121-f109dc06-dff7-4aad-b23f-9e318db2f360.png)

<p align='center'>☑ SUCCESSFUL LOGIN</p>

![authloginsuccesfully](https://user-images.githubusercontent.com/95602965/181592816-4a29ad82-e92b-4230-b0e5-78cc37fbc5d8.png)

- Mailing
<p align='center'>☑ NOTIFICATION MAIL</p>

![mailingMail](https://user-images.githubusercontent.com/95602965/181592803-b0532865-98e3-492b-9881-61245aa263a8.png)

Good Life! ( ͡~ ͜ʖ ͡°)
