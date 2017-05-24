import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';

const App = () => (
  <Route exact path="/" component={HomeContainer} />
);

export default App;
