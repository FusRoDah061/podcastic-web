import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPodcast from '../pages/AddPodcast';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/new" component={AddPodcast} exact />
  </Switch>
);

export default Routes;
