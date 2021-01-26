import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  categoriesSelector,
  addCategory,
  deleteCategory,
} from '../../Redux/reducers/categoriesReducer';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { adminSelector } from '../../Redux/selectors/adminSelector';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import cn from 'classnames';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  secondList: {
    marginTop: 'auto',
  },
  link: {
    textDecoration: 'none',
    fontSize: 26,
  },
  active: {
    background: '#eaeaea',
  },
  title: {
    padding: '16px 0 16px 16px',
  },
}));

const Categories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const categories = useSelector(categoriesSelector.selectAll);

  const [newCategoryInput, setCategory] = useState('');

  const isAdminLoggedIn = useSelector(adminSelector);

  const onChange = e => {
    setCategory(e.target.value);
  };

  const addOneCategory = newCategoryInput => {
    dispatch(addCategory(newCategoryInput));
    setCategory('');
  };

  const removeCategory = id => {
    dispatch(deleteCategory(id));
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: cn(classes.drawerPaper),
      }}
      open
    >
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        Категории
      </Typography>
      <Divider />
      <List>
        {categories.map(({ id, title }) => {
          return (
            <NavLink
              to={`/categories/${id}`}
              key={id}
              // НЕ РАБОТАЕТ
              className={classes.link}
              activeClassName={classes.active}
            >
              <ListItem>
                <ListItemText>{title}</ListItemText>
                {isAdminLoggedIn ? <HighlightOffIcon onClick={() => removeCategory(id)} /> : null}
              </ListItem>
            </NavLink>
          );
        })}
      </List>
      {isAdminLoggedIn ? (
        <>
          <TextField
            id="outlined-secondary"
            label="Категория"
            variant="outlined"
            color="secondary"
            onChange={e => onChange(e)}
            value={newCategoryInput}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            onClick={() => addOneCategory(newCategoryInput)}
          >
            Добавить
          </Button>
        </>
      ) : null}
      <Divider />
    </Drawer>
  );
};

export default Categories;
