// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import reducer and saga
import reducer from './reducers';
import saga from './saga';
import injectReducer from '@utils/injectReducer';
import injectSaga from '@utils/injectSaga';

// import actions
import { loginFromStorage, fetchGenres } from './actions';

// import selector
import {
  selectUserInfo,
  selectLoggedIn,
  selectLoading,
  selectError,
  selectGenres,
} from './selectors';

// import local components
import HeaderMenu from './components/HeaderMenu';
import Router from './components/Routers';

// import local styling
import './index.scss';

// import Antd
import { Layout } from 'antd';

class AppLayout extends PureComponent {
  componentDidMount() {
    const { loginFromStorage, fetchGenres } = this.props;
    loginFromStorage();
    fetchGenres();
  }

  menuClickHandler = url => {
    const { history } = this.props;
    history.push(url);
  };

  render() {
    const { genres } = this.props;

    return (
      <div className="app-layout__main-container">
        <Layout className="app-layout__container">
          <HeaderMenu genres={genres} menuClickHandler={this.menuClickHandler} />
          <Router />
        </Layout>
      </div>
    );
  }
}

AppLayout.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,

  loginFromStorage: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userInfo: selectUserInfo,
  loggedIn: selectLoggedIn,
  loading: selectLoading,
  error: selectError,
  genres: selectGenres,
});

const mapDispatchToProps = {
  loginFromStorage,
  fetchGenres,
};

const withReducer = injectReducer({ key: 'AppLayout', reducer });
const withSaga = injectSaga({ key: 'AppLayout', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withRouter,
  withConnect,
)(AppLayout);
