import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Avatar, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAdmin } from '../../Redux/reducers/adminLogin';
import { adminSelector } from '../../Redux/selectors/adminSelector';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [admin, setAdmin] = useState(true);

  const isAdminLoggedIn = useSelector(adminSelector);

  const toggleAdmin = () => {
    setAdmin(!admin);
    dispatch(isAdmin(!admin));
  };

  return (
    <AppBar position="absolute" className={cn(classes.appBar, classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <Avatar />
        <NavLink to="/">
          <HomeIcon />
        </NavLink>
        <NavLink to="/library">
          <MenuBookIcon />
        </NavLink>
        {isAdminLoggedIn ? (
          <NavLink to="/addbook">
            <Button variant="contained" color="primary" size="small" className={classes.button}>
              Добавить книгу
            </Button>
          </NavLink>
        ) : null}
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        ></Typography>
        <Button onClick={toggleAdmin}>
          {admin ? <span>Вы - Админ</span> : <span>Вы - пользователь</span>}
        </Button>
        <NavLink to="/login">
          <Button>
            <ExitToAppRoundedIcon />
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
