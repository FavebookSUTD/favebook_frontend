// import React
import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { RouterGuard } from 'react-router-guard';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import actions
import { loadPrevPath, clearPrevPath } from '../../actions';

// import page component
import HomePage from '@pages/HomePage';
import MyBookPage from '@pages/MyBookPage';
import BrowseResultsPage from '@pages/BrowseResultsPage';
import UserPage from '@pages/UserPage';
import BookDetailsPage from '@pages/BookDetailsPage';

const Routers = ({ history, loadPrevPath, clearPrevPath }) => {
  const savePrevPath = () => {
    const {
      location: { pathname },
    } = history;
    loadPrevPath(pathname);
    return Promise.resolve();
  };

  const shouldRoute = () => {
    const { sessionStorage } = window;
    const user = sessionStorage.getItem('user');
    if (user) {
      const { username, access_token } = JSON.parse(sessionStorage.getItem('user'));
      return new Promise((resolve, reject) => {
        if (username && access_token) {
          clearPrevPath();
          return resolve();
        }
        return reject(new Error('/authenticate'));
      });
    }

    return Promise.reject(new Error('/authenticate'));
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
            canActivate: [savePrevPath, shouldRoute],
          },
          {
            path: '/browseresults',
            component: BrowseResultsPage,
          },
          {
            path: '/user/:id',
            exact: true,
            component: UserPage,
            canActivate: [savePrevPath, shouldRoute],
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

const mapDispatchToProps = {
  loadPrevPath,
  clearPrevPath,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(Routers);
