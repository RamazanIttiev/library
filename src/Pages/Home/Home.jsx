import React from 'react';
import { Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <h1>Home Page</h1>
      <List>
        <Link to="/library">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Library" />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
};

export default Home;
