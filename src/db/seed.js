import { Genre } from "../models/Genre.js";
import { Role } from "../models/Role.js";
import { User } from "../models/User.js";
import { Character } from "../models/Character.js";
import { Movie } from "../models/Movie.js";

// Create some genres / movies / characters / user / roles when server is turned on
export const germinator = async () => {
  try {
    const matchedRoles = await Role.findAll();
    if (matchedRoles.length < 1) {
      await Role.bulkCreate([
        { rolename: "admin" },
        { rolename: "user" },
        { rolename: "moderator" },
      ]);
      console.log("roles successful germination *( ͡~ ͜ʖ ͡°)*");
    }
    const matchedUsers = await User.findAll();
    if (matchedUsers.length < 1) {
      await User.bulkCreate([
        {
          username: "zayra",
          email: "zayra@mail.com",
          password: "zayrapassword123!",
          roleId: 1,
          /* rolename: "admin" */
        },
        {
          username: "isabela",
          email: "isabela@mail.com",
          password: "isabelapassword123!",
          roleId: 2,
          /* rolename: "user" */
        },
        {
          username: "juan",
          email: "juan@mail.com",
          password: "juanpassword123!",
          roleId: 1,
          /* rolename: "admin" */
        },
        {
          username: "ramiro",
          email: "ramiro@mail.com",
          password: "ramiropassword123!",
          roleId: 2,
          /* rolename: "user" */
        },
        {
          username: "ruth",
          email: "ruth@mail.com",
          password: "ruthpassword123!",
          roleId: 3,
          /* rolename: "moderator" */
        },
      ]);
      console.log("users successful germination *( ͡~ ͜ʖ ͡°)*");
    }

    const matchedGenres = await Genre.findAll();
    if (matchedGenres.length < 1) {
      await Genre.bulkCreate([
        {
          name: "fantasy",
          image:
            "https://thumbs.dreamstime.com/b/casa-en-el-%C3%A1rbol-de-la-fantas%C3%ADa-104765716.jpg",
        },
        {
          name: "adventure",
          image: "https://filasiete.com/wp-content/uploads/2021/12/pil.jpg",
        },
      ]);
      console.log("genres successful germination *( ͡~ ͜ʖ ͡°)*");
    }
    const matchedMovies = await Movie.findAll();
    if (matchedMovies.length < 1) {
      await Movie.create(
        {
          image:
            "https://i.blogs.es/ff80f7/alicia-en-el-pais-de-las-maravillas-cartel/1366_2000.jpg",
          title: "Alice in Wonderland",
          date: "1951-10-30",
          rating: 2,
          genreId: 1,
          characters: [
            {
              name: "Haigha",
              image:
                "https://i.blogs.es/127ee3/alicia-en-el-pais-de-las-maravillas-2/1366_2000.webp",
              age: 25,
              weight: 30,
              history: "rabbit nervous about time",
            },
            {
              name: "Cheshire Cat",
              image:
                "https://i.blogs.es/93d2b1/alicia-en-el-pais-de-las-maravillas-4/1366_2000.webp",
              age: 2,
              weight: 0,
              history: "invisible and sarcastic cat",
            },
            {
              name: "Alice",
              image:
                "https://i.blogs.es/dad957/alicia-en-el-pais-de-las-maravillas/1366_2000.jpg",
              age: 15,
              weight: 50,
              history: "clueless and naive blond girl",
            },
          ],
        },
        { include: [Character] }
      );

      await Movie.create(
        {
          image: "https://i.blogs.es/6eabf4/101-dalmatas/1366_2000.jpg",
          title: "101 Dalmatians",
          date: "1961-10-30",
          rating: 4,
          genreId: 2,
          characters: [
            {
              name: "Perdita",
              image:
                "https://static.wikia.nocookie.net/disney/images/3/38/Perdita_PLA.jpg",
              age: 5,
              weight: 45,
              history:
                "educated and radiant dog paired with Pongo and mother of the dalmatian puppies",
            },
            {
              name: "Pongo",
              image: "https://i.blogs.es/1c1dd1/101-dalmatas-2/1366_2000.webp",
              age: 5,
              weight: 50,
              history:
                "clumsy, playfull and optimistic dog in love with Perdita and father of the dalmatian puppies",
            },
            {
              name: "Cruella de Vil",
              image: "https://i.blogs.es/efbcc9/101-dalmatas-3/1366_2000.webp",
              age: 70,
              weight: 55,
              history: "villain who kidnapped dalmatians for their fur",
            },
          ],
        },
        { include: [Character] }
      );
      await Movie.create(
        {
          image: "https://i.blogs.es/fe97fd/650_1000_lady1/1366_2000.jpg",
          title: "Lady and the Tramp",
          date: "1955-12-31",
          rating: 3,
          genreId: 2,
          characters: [
            {
              name: "Lady",
              image: "https://i.blogs.es/caffc5/650_1000_lady2/1366_2000.jpg",
              age: 4,
              weight: 40,
              history: "lovely aristocratic dog",
            },
            ,
          ],
        },
        { include: [Character] }
      );
      console.log("movies successful germination *( ͡~ ͜ʖ ͡°)*");
    }
    console.log("*( ͡~ ͜ʖ ͡°)*");
  } catch (error) {
    console.error(error);
  }
};
