const faker = require('faker');

const { productDescription } = faker.commerce;
const { firstName, lastName } = faker.name;
const { image } = faker.image;
const { uuid } = faker.random;

module.exports = () => {
  return {
    onlycategories: [
      {
        id: 1,
        title: 'Приключения',
      },
      {
        id: 1,
        title: 'Приключения',
      },
      {
        id: 1,
        title: 'Приключения',
      },
      {
        id: 1,
        title: 'Приключения',
      },
      {
        id: 1,
        title: 'Приключения',
      },
    ],

    categories: [
      {
        id: 1,
        title: 'Приключения',
        booksList: [
          {
            id: uuid(),
            image: image(),
            title: 'Приключения',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Приключения',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Приключения',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
        ],
      },
      {
        id: 2,
        title: 'Детективы',
        booksList: [
          {
            id: uuid(),
            image: image(),
            title: 'Детективы',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Детективы',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Детективы',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
        ],
      },
      {
        id: 3,
        title: 'Фантастика',
        booksList: [
          {
            id: uuid(),
            image: image(),
            title: 'Фантастика',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Фантастика',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Фантастика',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
        ],
      },
      {
        id: 4,
        title: 'Детские книги',
        booksList: [
          {
            id: uuid(),
            image: image(),
            title: 'Детские книги',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Детские книги',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Детские книги',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
        ],
      },
      {
        id: 5,
        title: 'Биография',
        booksList: [
          {
            id: uuid(),
            image: image(),
            title: 'Биография',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Биография',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
          {
            id: uuid(),
            image: image(),
            title: 'Биография',
            author: `${firstName()}  ${lastName()}`,
            description: productDescription(),
          },
        ],
      },
    ],
    books: [
      {
        id: uuid(),
        image: image(),
        title: 'Приключения',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Приключения',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Приключения',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Детективы',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Детективы',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Детективы',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Фантастика',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Фантастика',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Фантастика',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Детские книги',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Детские книги',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Детские книги',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Биография',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Биография',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
      {
        id: uuid(),
        image: image(),
        title: 'Биография',
        author: `${firstName()}  ${lastName()}`,
        description: productDescription(),
      },
    ],
    admin: {
      login: 'admin@gmail.com',
      password: 123456,
    },
    user: {
      login: 'user@gmail.com',
      password: 123456,
    },
  };
};
