import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksList from '../../Components/BooksList/BooksList';
import Layout from '../../Components/Layout/Layout';
import Preloader from '../../Components/Preloader/Preloader';
import Search from '../../Components/Search/Search';
import { fetchBooks } from '../../Redux/reducers/booksReducer';
import { fetchCategories } from '../../Redux/reducers/categoriesReducer';
import { books, isPreloaderFetching } from '../../Redux/selectors/booksSelector';

const styles = () => ({
  library_title: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 24,
  },
});

class Library extends Component {
  componentDidMount() {
    const { books, fetchBooks, fetchCategories } = this.props;
    fetchCategories();
    if (books.length === 0) {
      fetchBooks();
    }
  }

  render() {
    const { classes } = this.props;
    const { books, isFetching } = this.props;
    return (
      <Layout>
        <h1 className={classes.library_title}>Ваша библиотека</h1>
        <Search />
        <Preloader open={isFetching} />
        <BooksList books={books} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: books(state),
    isFetching: isPreloaderFetching(state),
  };
};

const mapDispatchToProps = {
  fetchBooks,
  fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Library));
