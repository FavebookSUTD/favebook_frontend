// import React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import page component
import HomePage from '@pages/HomePage';
import MyBookPage from '@pages/MyBookPage';
import BrowseResultsPage from '@pages/BrowseResultsPage';
import UserPage from '@pages/UserPage';
import BookDetailsPage from '@pages/BookDetailsPage';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/mybooks" render={() => <MyBookPage />} />
      <Route exact path="/browseresults" render={() => <BrowseResultsPage />} />
      <Route exact path="/user" render={() => <UserPage />} />
      <Route exact path="/book/:id" render={() => <BookDetailsPage />} />
    </Switch>
  );
};

export default Routers;
