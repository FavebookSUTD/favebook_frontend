// import React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page component
import HomePage from '@pages/HomePage';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
    </Switch>
  );
};

export default Routers;
