import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes'
import Header from './componets/Header'
function App() {
  return (
    <BrowserRouter>
    <Header>
    </Header>
    <Routes />
    </BrowserRouter>
  );
}

export default App;
