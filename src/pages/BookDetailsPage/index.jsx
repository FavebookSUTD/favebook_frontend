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
import { fetchBookDetails, fetchInitBookReviews, fetchNextBookReviews } from './actions';

// import selector
import {
  selectBook,
  selectReviews,
  selectReviewCount,
  selectLoading,
  selectError,
} from './selectors';

// import local components
import FilterBar from '@containers/FilterBar';
import BookCover from './components/BookCover';
import BookDescriptions from './components/BookDescriptions';
import TabMenuContainer from '@components/TabMenuContainer';
import BookSummaryContent from './components/BookSummaryContent';
import BookReviewsList from '@components/BookReviewsList';
import UserReview from './containers/UserReview';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import local styling
import './index.scss';

// import Antd
import { Row, Col, Result } from 'antd';

// Extract antd components

class BookDetailsPage extends PureComponent {
  PAGE_SIZE = 100;

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchBookDetails,
      fetchInitBookReviews,
    } = this.props;

    fetchBookDetails(id);
    fetchInitBookReviews(id, 1, this.PAGE_SIZE);
  }

  render() {
    const { book, reviews, reviewCount, loading, error } = this.props;

    const { title, author, avg_rating, description, imUrl, genres } = book;

    return (
      <div className="book-details-page__main-container">
        <FilterBar position="right" />
        {error.book ? (
          <Result title="Unable to find book!" status="warning" />
        ) : (
          <Row className="book-details-page__content-container">
            <Col className="book-details-page__misc-details-container" span={8}>
              <BookCover bookCoverURL={imUrl || ''} bookTitle={title || ''} interestStatus={{}} />
            </Col>
            <Col className="book-details-page__main-details-container" span={16}>
              <BookDescriptions
                loading={loading.book}
                title={title || ''}
                author={author || 'Lioneel & Glenn'}
                ratingValue={avg_rating || 0}
                reviewCount={reviewCount}
                purchaseLinks={{}}
                genres={!isEmpty(genres) ? genres : []}
              />
              <TabMenuContainer
                className="book-details-page__tab-menu-container"
                menuObj={[
                  {
                    title: 'Summary',
                    reactNode: (
                      <BookSummaryContent summary={description || ''} loading={loading.book} />
                    ),
                  },
                  {
                    title: 'Reviews',
                    reactNode: (
                      <BookReviewsList
                        loading={loading.reviews}
                        bookReviews={reviews || []}
                        showBookImg={false}
                        showTimestamp={false}
                      />
                    ),
                  },
                ]}
                menuPosition="left"
                autoFit
              />
              <UserReview />
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

BookDetailsPage.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    ratingValue: PropTypes.number,
    description: PropTypes.string,
    imUrl: PropTypes.string,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  reviewCount: PropTypes.number.isRequired,
  loading: PropTypes.shape({
    book: PropTypes.bool.isRequired,
    reviews: PropTypes.bool.isRequired,
  }).isRequired,
  error: PropTypes.shape({
    book: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

  fetchBookDetails: PropTypes.func.isRequired,
  fetchInitBookReviews: PropTypes.func.isRequired,
  fetchNextBookReviews: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  book: selectBook,
  reviews: selectReviews,
  reviewCount: selectReviewCount,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = {
  fetchBookDetails,
  fetchInitBookReviews,
  fetchNextBookReviews,
};

const withReducer = injectReducer({ key: 'BookDetailsPage', reducer });
const withSaga = injectSaga({ key: 'BookDetailsPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BookDetailsPage);
