import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Layout from '../../Components/Layout/Layout';
import { Button, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../Redux/reducers/categoriesReducer';
import { addBook } from '../../Redux/reducers/booksReducer';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    width: '80%',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    width: '100%',
    marginBottom: 48,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 24,
  },
  button: {
    display: 'block',
    margin: '0 auto',
  },
}));

const AddBook = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({});

  const addNewBook = () => {
    dispatch(addBook(newBook));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Layout>
      <Container>
        <h1 className={classes.title}>Добавь свою книгу</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.input}
            label="Название книги"
            variant="outlined"
            color="secondary"
            name="title"
            onChange={e => setNewBook({ ...newBook, title: e.target.value })}
          />
          <TextField
            className={classes.input}
            label="Автор"
            variant="outlined"
            color="secondary"
            name="author"
            onChange={e => setNewBook({ ...newBook, author: e.target.value })}
          />
          <TextField
            className={classes.input}
            label="Категория"
            variant="outlined"
            color="secondary"
            name="category"
            onChange={e => setNewBook({ ...newBook, category: e.target.value })}
          />
          <TextField
            className={classes.input}
            label="Картинка"
            variant="outlined"
            color="secondary"
            name="image"
            onChange={e => setNewBook({ ...newBook, image: e.target.value })}
          />
          <TextField
            className={classes.input}
            label="Описание"
            multiline
            rows={4}
            variant="outlined"
            color="secondary"
            name="description"
            onChange={e => setNewBook({ ...newBook, description: e.target.value })}
          />
        </form>
        <Button variant="contained" color="primary" size="large" onClick={addNewBook}>
          Добавить
        </Button>
      </Container>
    </Layout>
  );
};

export default AddBook;
