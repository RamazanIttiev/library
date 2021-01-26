import { Container, withStyles } from '@material-ui/core';
import React from 'react';
import CategoryList from '../CategoryList/CategoryList';
import Header from '../Header/Header';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  container: {
    marginTop: 88,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    minHeight: '100vh',
  },
});

const Layout = ({ children, classes }) => {
  return (
    <div className={classes.root}>
      <Header />
      <CategoryList />
      <Container maxWidth="md" classes={{ root: classes.container }}>
        {children}
      </Container>
    </div>
  );
};

export default withStyles(styles)(Layout);
