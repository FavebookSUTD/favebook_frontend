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
import { fetchUserDetails, fetchFavourite, fetchBooksReviewed } from './actions';

// import selector
import {
  selectUserDetails,
  selectFavourite,
  selectBooksReviewed,
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
    const { fetchUserDetails, fetchFavourite, fetchBooksReviewed } = this.props;
    fetchUserDetails();
    fetchFavourite();
    fetchBooksReviewed();
  }

  render() {
    const { userDetails, favourite, booksReviewed, loading } = this.props;

    return (
      <Content className="user-page__container">
        <UserInfo loading={loading.userDetails} userInfo={userDetails} />
        <TabMenuContainer
          menuObj={[
            {
              title: 'Favourite',
              reactNode: <BookInfo books={favourite} loading={loading.favourite} />,
            },
            {
              title: 'Books Reviewed',
              reactNode: <BookInCommonList loading={loading.booksReviewed} books={booksReviewed} />,
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
  favourite: PropTypes.arrayOf(PropTypes.object).isRequired,
  booksReviewed: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.shape({
    userDetails: PropTypes.bool.isRequired,
    favourite: PropTypes.bool.isRequired,
    booksReviewed: PropTypes.bool.isRequired,
  }).isRequired,
  error: PropTypes.shape({
    userDetails: PropTypes.string.isRequired,
    favourite: PropTypes.string.isRequired,
    reading: PropTypes.string.isRequired,
    booksReviewed: PropTypes.string.isRequired,
  }).isRequired,

  fetchUserDetails: PropTypes.func.isRequired,
  fetchFavourite: PropTypes.func.isRequired,
  fetchBooksReviewed: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userDetails: selectUserDetails,
  favourite: selectFavourite,
  booksReviewed: selectBooksReviewed,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = {
  fetchUserDetails,
  fetchFavourite,
  fetchBooksReviewed,
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
