import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HooksProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './styles/globals';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />

    <HooksProvider>
      <Routes />
    </HooksProvider>
  </BrowserRouter>
);

export default App;
