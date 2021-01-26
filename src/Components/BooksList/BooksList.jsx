import { Typography } from '@material-ui/core';
import BookCard from '../BookCard/BookCard';

const BooksList = ({ books }) => {
  return (
    <>
      {books.length ? (
        books.map(({ title, description, author, image, id }) => (
          <BookCard
            key={id}
            id={id}
            author={author}
            title={title}
            image={image}
            description={description}
          />
        ))
      ) : (
        <Typography>Здесь ещё нет книг</Typography>
      )}
    </>
  );
};

export default BooksList;
