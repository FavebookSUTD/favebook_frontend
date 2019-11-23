// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import reducer and saga
import reducer from './reducers';
import saga from './saga';
import injectReducer from '@utils/core/injectReducer';
import injectSaga from '@utils/core/injectSaga';

// import actions
import { fetchWantToRead, fetchReading, fetchMyReviews } from './actions';

// import selector
import {
  selectLoading,
  selectWantToRead,
  selectReading,
  selectMyReviews,
  selectTotalReviewCount,
  selectPageSize,
} from './selectors';
import { selectUserInfo } from '@pages/AppLayout/selectors';

// import local components
import TabMenuContainer from '@components/TabMenuContainer';
import BookInfo from '@components/BookInfo';
import BookReviewsList from '@components/BookReviewsList';

// import lodash

// import local styling
import './index.scss';

// import Antd
import { Layout } from 'antd';

// Extract antd components
const { Content } = Layout;

const renderBookList = (books, loading) => <BookInfo loading={loading} books={books} />;

class MyBookPage extends PureComponent {
  componentDidMount() {
    const { pageSize, fetchWantToRead, fetchReading } = this.props;

    fetchWantToRead();
    fetchReading();
    this.fetchReviewHandler(1, pageSize);
  }

  fetchReviewHandler = (pageNum, pageSize) => {
    const { loading, userInfo, fetchMyReviews } = this.props;
    if (!loading.myReviews) {
      const { username } = userInfo;
      fetchMyReviews(username, pageNum, pageSize);
    }
  };

  render() {
    const { loading, wantToRead, reading, myReviews, totalReviewCount, pageSize } = this.props;

    return (
      <Content className="my-book-page__container">
        <TabMenuContainer
          className="my-book-page__tab-menu-container"
          menuObj={[
            {
              title: 'Want To Read',
              reactNode: renderBookList(wantToRead, loading.wantToRead),
            },
            {
              title: 'Reading',
              reactNode: renderBookList(reading, loading.reading),
            },
            {
              title: 'My Reviews',
              reactNode: (
                <BookReviewsList
                  loading={loading.myReviews}
                  bookReviews={myReviews}
                  showAuthor={false}
                  pageSize={pageSize}
                  total={totalReviewCount}
                  fetchPageHandler={this.fetchReviewHandler}
                />
              ),
            },
          ]}
          autoFit
        />
      </Content>
    );
  }
}

MyBookPage.propTypes = {
  loading: PropTypes.shape({
    wantToRead: PropTypes.bool.isRequired,
    reading: PropTypes.bool.isRequired,
    myReviews: PropTypes.bool.isRequired,
  }).isRequired,
  wantToRead: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      imgURL: PropTypes.string,
      author: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
  reading: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      imgURL: PropTypes.string,
      author: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
  myReviews: PropTypes.shape({}).isRequired,
  totalReviewCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,

  userInfo: PropTypes.shape({ username: PropTypes.string }).isRequired,

  fetchWantToRead: PropTypes.func.isRequired,
  fetchReading: PropTypes.func.isRequired,
  fetchMyReviews: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  wantToRead: selectWantToRead,
  reading: selectReading,
  myReviews: selectMyReviews,
  totalReviewCount: selectTotalReviewCount,
  pageSize: selectPageSize,

  userInfo: selectUserInfo,
});

const mapDispatchToProps = {
  fetchWantToRead,
  fetchReading,
  fetchMyReviews,
};

const withReducer = injectReducer({ key: 'MyBookPage', reducer });
const withSaga = injectSaga({ key: 'MyBookPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyBookPage);
