import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Preloader from '../../Components/Preloader/Preloader';
import Categories from '../Categories/Categories';
import Library from '../Library/Library';
import Login from '../../Pages/Login/Login';
import AddBook from '../AddBook/AddBook';
import { useSelector } from 'react-redux';
import { isPreloaderFetching } from '../../Redux/selectors/booksSelector';

const RootRouter = () => {
  const isFetching = useSelector(isPreloaderFetching);

  return (
    <>
      <Preloader open={isFetching} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/library" component={Library} />
        <Route path="/categories/:id" component={Categories} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/addbook">
          <AddBook />
        </Route>
      </Switch>
    </>
  );
};

export default RootRouter;
