// import React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page component
import AuthenticatePage from '@pages/AuthenticatePage';
import AppLayout from '@pages/AppLayout';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <AppLayout />} />
      <Route exact path="/authenticate" render={() => <AuthenticatePage />} />
    </Switch>
  );
};

export default Routers;
