import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { asyncGetCategories } from '../Redux/reducers/categoriesReducer';
import {
  categoriesSelector,
  categoriesFetchingSelector,
} from '../Redux/selectors/categoriesSelector';
import * as ReactBootstrap from 'react-bootstrap';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetCategories());
  }, [dispatch]);

  const categoriesTitle = useSelector(categoriesSelector);
  const getIsCategoriesFetching = useSelector(categoriesFetchingSelector);

  console.log(getIsCategoriesFetching);
  return (
    <div>
      <h1>Категории</h1>
      <ul>
        <li>
          <NavLink to="/detectives">
            {categoriesTitle}
            {getIsCategoriesFetching ? (
              categoriesTitle
            ) : (
              <ReactBootstrap.Spinner animation="border" />
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
