// import React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page component
import HomePage from '@pages/HomePage';
import BrowseResultsPage from '@pages/BrowseResultsPage';
import UserPage from '@pages/UserPage';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/browseresults" render={() => <BrowseResultsPage />} />
      <Route exact path="/user" render={() => <UserPage />} />
    </Switch>
  );
};

export default Routers;
