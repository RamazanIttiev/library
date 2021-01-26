export const getCurrentBooks = (state, id) => {
  const categories = state.categories.entities;
  const books = state.books.entities;

  if (id in categories) {
    return categories[id].booksList.map(bookId => books[bookId]);
  }
  return [];
};

export const isPreloaderFetching = state => state.categories.isFetching;
export const books = state => state.books.allBooks;
