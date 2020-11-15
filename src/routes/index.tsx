import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import AddPodcast from '../pages/AddPodcast';
import Home from '../pages/Home';
import AllPodcasts from '../pages/AllPodcasts';
import Search from '../pages/Search';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/new" component={AddPodcast} />
        <Route exact path="/all" component={AllPodcasts} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Home} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
