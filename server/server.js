const faker = require('faker');

const { price, productName, productDescription } = faker.commerce;
module.exports = () => {
  return {
    categories: Array.from(Array(3)).map((_, index) => ({
      id: index + 1,
      title: productName(),
    })),
    user: {
      login: 'admin@gmail.com',
      password: 123456,
    },
  };
};
