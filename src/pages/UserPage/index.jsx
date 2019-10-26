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
import {
  fetchUserDetails,
  fetchWantToReadBooks,
  fetchReadingBooks,
  fetchBooksInCommon,
} from './actions';

// import selector
import {
  selectUserDetails,
  selectWantToRead,
  selectReading,
  selectBooksInCommon,
  selectLoading,
  selectError,
} from './selectors';

// import lodash

// import local components
import UserInfo from './components/UserInfo';
import TabMenuContainer from '@components/TabMenuContainer';
import BookInfo from '@components/BookInfo';
import BookInCommonList from './components/BookInCommonList';

// import local styling
import './index.scss';

// import Antd
import { Layout } from 'antd';

// Extract antd components
const { Content } = Layout;

class UserPage extends PureComponent {
  componentDidMount() {
    const {
      fetchUserDetails,
      fetchWantToReadBooks,
      fetchReadingBooks,
      fetchBooksInCommon,
    } = this.props;
    fetchUserDetails();
    fetchWantToReadBooks();
    fetchReadingBooks();
    fetchBooksInCommon();
  }

  render() {
    const { userDetails, wantToRead, reading, booksInCommon, loading, error } = this.props;

    return (
      <Content className="user-page__container">
        <UserInfo loading={loading.userDetails} userInfo={userDetails} />
        <TabMenuContainer
          menuObj={[
            {
              title: 'Want To Read',
              reactNode: <BookInfo books={wantToRead} loading={loading.wantToRead} />,
            },
            {
              title: 'Reading',
              reactNode: <BookInfo books={reading} loading={loading.wantToRead} />,
            },
            {
              title: 'Book In Common',
              reactNode: <BookInCommonList loading={loading.booksInCommon} books={booksInCommon} />,
            },
          ]}
          autoFit
        />
      </Content>
    );
  }
}

UserPage.propTypes = {
  userDetails: PropTypes.shape({}).isRequired,
  wantToRead: PropTypes.arrayOf(PropTypes.object).isRequired,
  reading: PropTypes.arrayOf(PropTypes.object).isRequired,
  booksInCommon: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.shape({
    userDetails: PropTypes.bool.isRequired,
    wantToRead: PropTypes.bool.isRequired,
    reading: PropTypes.bool.isRequired,
    booksInCommon: PropTypes.bool.isRequired,
  }).isRequired,
  error: PropTypes.shape({
    userDetails: PropTypes.string.isRequired,
    wantToRead: PropTypes.string.isRequired,
    reading: PropTypes.string.isRequired,
    booksInCommon: PropTypes.string.isRequired,
  }).isRequired,

  fetchUserDetails: PropTypes.func.isRequired,
  fetchWantToReadBooks: PropTypes.func.isRequired,
  fetchReadingBooks: PropTypes.func.isRequired,
  fetchBooksInCommon: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userDetails: selectUserDetails,
  wantToRead: selectWantToRead,
  reading: selectReading,
  booksInCommon: selectBooksInCommon,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = {
  fetchUserDetails,
  fetchWantToReadBooks,
  fetchReadingBooks,
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
