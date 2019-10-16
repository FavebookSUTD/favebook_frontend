// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import reducer and saga
import reducer from './reducers';
import saga from './saga';
import injectReducer from '@utils/core/injectReducer';
import injectSaga from '@utils/core/injectSaga';

// import actions

// import selector
import {} from './selectors';

// import local components
import UserInfo from './components/UserInfo';

// import local styling
import './index.scss';

// import Antd

class UserPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  onChange(activeKey) {
    //this.setState({ tabNum: activeKey });
  }

  render() {
    return (
      <div className="user-page__container">
        <UserInfo
          userinfo={{
            name: 'Eda',
            followers: 64,
            commonbooks: 5,
            commonpercent: 3,
            joindate: '3 Nov 2019',
          }}
        />
      </div>
    );
  }
}

UserPage.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

const withReducer = injectReducer({ key: 'UserPage', reducer });
const withSaga = injectSaga({ key: 'UserPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
  withReducer,
  withSaga,
)(UserPage);
