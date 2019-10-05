// import React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page component
import AuthenticatePage from '@pages/AuthenticatePage';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/authenticate" render={() => <AuthenticatePage />} />
    </Switch>
  );
};

export default Routers;
