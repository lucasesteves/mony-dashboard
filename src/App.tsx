import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { store, persistor } from './store';

import light from './styles/theme/light';
import GlobalStyle from './styles/global';

const App:React.FC=()=> {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={light}>
          <Router>
            <Routes />
            <ToastContainer autoClose={3000} />
            <GlobalStyle />
          </Router>
        </ThemeProvider>  
      </PersistGate>
    </Provider>
  );
}

export default App;
