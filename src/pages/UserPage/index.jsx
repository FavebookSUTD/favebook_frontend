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
import { Layout, Typography } from 'antd';

// Extract antd components
const { Content } = Layout;
const { Text } = Typography;

class UserPage extends PureComponent {
  componentDidMount() {
    const { fetchUserDetails, fetchFavourite, fetchBooksReviewed, location } = this.props;
    const username = location.pathname.replace('/user/', '');
    fetchUserDetails({ username });
    fetchFavourite({ username });
    fetchBooksReviewed({ username });
  }

  render() {
    const { userDetails, favourite, booksReviewed, loading } = this.props;

    return (
      <Content className="user-page__container">
        {userDetails ? (
          <UserInfo loading={loading.userDetails} userInfo={userDetails} />
        ) : (
          <Text> Username not found in database </Text>
        )}
        {userDetails ? (
          <TabMenuContainer
            menuObj={[
              {
                title: 'Favourite',
                reactNode: (
                  <BookInfo books={favourite.books_favourite} loading={loading.favourite} />
                ),
              },
              {
                title: 'Books Reviewed',
                reactNode: (
                  <BookInCommonList
                    loading={loading.booksReviewed}
                    books={booksReviewed.books_reviewed}
                  />
                ),
              },
            ]}
            autoFit
          />
        ) : null}
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
