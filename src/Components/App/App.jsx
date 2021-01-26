import React from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../Redux';
import RootRouter from '../../Pages/RootRouter/RootRouter';

const theme = createMuiTheme();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RootRouter />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
