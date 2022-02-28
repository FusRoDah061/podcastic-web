import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
import AddPodcast from '../pages/AddPodcast';
import Home from '../pages/Home';
import AllPodcasts from '../pages/AllPodcasts';
import Search from '../pages/Search';
import Podcast from '../pages/Podcast';
import EpisodeSearch from '../pages/EpisodeSearch';
import SignIn from '../pages/signinFlow/SignIn';
import Route from './Route';
import SignUp from '../pages/signinFlow/SignUp';
import ForgotPassword from '../pages/signinFlow/ForgotPassword';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/signin" component={SignIn} isPrivate />
        <Route exact path="/signup" component={SignUp} isPrivate />
        <Route
          exact
          path="/forgot-password"
          component={ForgotPassword}
          isPrivate
        />

        <Route exact path="/" component={Home} isPrivate />
        <Route path="/new" component={AddPodcast} isPrivate />
        <Route path="/all" component={AllPodcasts} isPrivate />
        <Route path="/search" component={Search} isPrivate />
        <Route
          exact
          path="/podcast/:podcastId/search"
          component={EpisodeSearch}
          isPrivate
        />
        <Route exact path="/podcast/:podcastId" component={Podcast} isPrivate />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
