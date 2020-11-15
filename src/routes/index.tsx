import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import AddPodcast from '../pages/AddPodcast';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/new" component={AddPodcast} />
        <Route exact path="/" component={Home} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
