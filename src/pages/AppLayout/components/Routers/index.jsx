// import React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page component
import HomePage from '@pages/HomePage';
import BookDetailsPage from '@pages/BookDetailsPage';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/book/:id" render={() => <BookDetailsPage />} />
    </Switch>
  );
};

export default Routers;
