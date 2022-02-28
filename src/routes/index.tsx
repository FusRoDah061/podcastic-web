import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import AddPodcast from '../pages/AddPodcast';
import Home from '../pages/Home';
import AllPodcasts from '../pages/AllPodcasts';
import Search from '../pages/Search';
import Podcast from '../pages/Podcast';
import EpisodeSearch from '../pages/EpisodeSearch';
import SignIn from '../pages/signinFlow/SignIn';
import SignUp from '../pages/signinFlow/SignUp';
import ForgotPassword from '../pages/signinFlow/ForgotPassword';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/forgot-password"
          component={ForgotPassword}
          isPrivate
        />
        <Route exact path="/" component={Home} />
        <Route path="/new" component={AddPodcast} />
        <Route path="/all" component={AllPodcasts} />
        <Route path="/search" component={Search} />
        <Route
          exact
          path="/podcast/:podcastId/search"
          component={EpisodeSearch}
          isPrivate
        />
        <Route exact path="/podcast/:podcastId" component={Podcast} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
