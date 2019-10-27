// import React
import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { RouterGuard } from 'react-router-guard';

// import page component
import HomePage from '@pages/HomePage';
import MyBookPage from '@pages/MyBookPage';
import BrowseResultsPage from '@pages/BrowseResultsPage';
import UserPage from '@pages/UserPage';
import BookDetailsPage from '@pages/BookDetailsPage';

// import utils
import { goto } from '@utils/goto';

const Routers = ({ history }) => {
  const shouldRoute = () => {
    const { sessionStorage } = window;
    const user = sessionStorage.getItem('user');
    if (user) {
      const { username, access_token } = JSON.parse(sessionStorage.getItem('user'));
      return new Promise(resolve => {
        if (username && access_token) {
          return resolve();
        }
        return goto('/authenticate');
      });
    }
    return goto('/authenticate');
  };

  return (
    <Switch>
      <RouterGuard
        config={[
          {
            path: '/',
            exact: true,
            component: HomePage,
          },
          {
            path: '/mybooks',
            exact: true,
            component: MyBookPage,
            canActivate: [shouldRoute],
          },
          {
            path: '/browseresults',
            component: BrowseResultsPage,
          },
          {
            path: '/user/:id',
            exact: true,
            component: UserPage,
            canActivate: [shouldRoute],
          },
          {
            path: '/book/:id',
            exact: true,
            component: BookDetailsPage,
          },
          {
            path: '/*',
            redirect: '/',
          },
        ]}
        history={history}
      />
    </Switch>
  );
};

export default withRouter(Routers);
