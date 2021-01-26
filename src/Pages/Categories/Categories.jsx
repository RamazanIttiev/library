import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksList from '../../Components/BooksList/BooksList';
import Layout from '../../Components/Layout/Layout';
import Preloader from '../../Components/Preloader/Preloader';
import { getCurrentBooks, isPreloaderFetching } from '../../Redux/selectors/booksSelector';
import { fetchCategories } from '../../Redux/reducers/categoriesReducer';

class Categories extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { books, isFetching } = this.props;
    return (
      <Layout>
        <Preloader open={isFetching} />
        <BooksList books={books} />
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    books: getCurrentBooks(state, id),
    isFetching: isPreloaderFetching(state),
  };
};

const mapDispatchToProps = {
  fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
