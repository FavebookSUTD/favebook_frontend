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
import { fetchBooksInCommon } from './actions';

// import selector
import { selectBooksInCommon } from './selectors';

// import lodash

// import local components
import UserInfo from './components/UserInfo';

// import local styling
import './index.scss';
import BookRow from './components/BookRow';

// import Antd
import { Layout } from 'antd';

// Extract antd components
const { Content } = Layout;

class UserPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchBooksInCommon } = this.props;
    fetchBooksInCommon();
  }

  onChange(activeKey) {
    // this.setState({ tabNum: activeKey });
  }

  render() {
    const { books } = this.props;
    return (
      <Content className="user-page__container">
        {/* <div className="user-info-wrapper"> */}
        <UserInfo
          userInfo={{
            username: 'Eda',
            followers: 64,
            commonBooks: 5,
            commonPercent: 3,
            joinDate: '3 Nov 2019',
          }}
        />
        {/* </div> */}
        <div className="user-book-list-wrapper">
          <BookRow books={books} />
        </div>
      </Content>
    );
  }
}

UserPage.propTypes = {
  books: PropTypes.shape({}).isRequired,

  fetchBooksInCommon: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  books: selectBooksInCommon,
});

const mapDispatchToProps = {
  fetchBooksInCommon,
};

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
