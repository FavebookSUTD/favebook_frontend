// import React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page component
import HomePage from '@pages/HomePage';
import BrowseResultsPage from '@pages/BrowseResultsPage';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/browseresults" render={() => <BrowseResultsPage />} />
    </Switch>
  );
};

export default Routers;
