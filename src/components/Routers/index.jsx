// import React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page component
import AuthenticatePage from '@pages/AuthenticatePage';
import HomePage from '@pages/HomePage';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/authenticate" render={() => <AuthenticatePage />} />
    </Switch>
  );
};

export default Routers;
