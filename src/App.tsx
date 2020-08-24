import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routes from './routes';
import './app.css'

import { store, persistor } from './store';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto'
  },
  palette: {
    background: {
      default: "#EDF1F5"
    },
    primary: {
      main: '#4E9DE6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#878787',
      contrastText: '#fff',
    },
  },
});

const App:React.FC=()=> {
  return (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Routes />
              <ToastContainer autoClose={3000} />
            </Router>
          </PersistGate>
        </Provider>
      </ThemeProvider>
  );
}

export default App;
