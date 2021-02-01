import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../Redux/reducers/booksReducer';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    width: '100%',
  },
}));

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const [filter, setFilter] = useState({});

  const bookSearch = book => {
    dispatch(fetchBooks(book));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={e => bookSearch(e.target.value)}
        className={classes.root}
        id="standard-basic"
        label="Поиск книги"
      />
    </form>
  );
};

export default Search;
