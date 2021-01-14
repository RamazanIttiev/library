export const categoriesSelector = state => {
  const { id, title } = state.categories;
  return id, title;
};

export const categoriesFetchingSelector = state => state.categories.isFetching;
