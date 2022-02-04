import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// Context
import { UsersContextProvider } from './context/usersContext';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <UsersContextProvider>
        <App />
      </UsersContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
