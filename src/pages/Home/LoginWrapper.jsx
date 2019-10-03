// import React
import React, { PureComponent, Fragment } from 'react';
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
import { loginFromAPI, loginFromStorage } from './actions';

// import selector
import { selectLoggedIn, selectLoading, selectError } from './selectors';

// import local components
import Home from './index';
// import Loading from "@components/Loading";

// import local styling
import './index.scss';

// import Antd
import { Result } from 'antd';

class LoginWrapper extends PureComponent {
  componentDidMount() {
    const {
      location: { hash },
      loginFromAPI,
      loginFromStorage,
    } = this.props;
  }

  render() {
    const { loading, loggedIn } = this.props;

    return (
      <Fragment>
        {/* {loading ? <Loading /> : null} */}
        {loggedIn && !loading ? (
          <Home />
        ) : (
          <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
          />
        )}
      </Fragment>
    );
  }
}

LoginWrapper.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loginFromAPI: PropTypes.func.isRequired,
  loginFromStorage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  error: selectError,
  loggedIn: selectLoggedIn,
});

const mapDispatchToProps = {
  loginFromAPI,
  loginFromStorage,
};

const withReducer = injectReducer({ key: 'Home', reducer });
const withSaga = injectSaga({ key: 'Home', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withRouter,
  withConnect,
)(LoginWrapper);
