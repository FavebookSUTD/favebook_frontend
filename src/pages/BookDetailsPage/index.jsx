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
import { fetchBookDetails, fetchBookReviews, faveBook } from './actions';

// import selector
import {
  selectBook,
  selectReviews,
  selectTotalReviewCount,
  selectPageSize,
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

class BookDetailsPage extends PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      pageSize,
      fetchBookDetails,
    } = this.props;

    fetchBookDetails(id);
    this.fetchBookReviewsHandler(1, pageSize);
  }

  fetchBookReviewsHandler = (pageNum, pageSize) => {
    const {
      match: {
        params: { id },
      },
      loading,
      fetchBookReviews,
    } = this.props;
    if (!loading.reviews) {
      fetchBookReviews(id, pageNum, pageSize);
    }
  };

  faveBookHandler = () => {
    const { faveBook } = this.props;
    faveBook();
  };

  render() {
    const {
      match: {
        params: { id },
      },
      book,
      reviews,
      totalReviewCount,
      pageSize,
      loading,
      error,
    } = this.props;

    const { title, author, avg_rating, description, imUrl, genres } = book;

    return (
      <div className="book-details-page__main-container">
        <FilterBar position="right" />
        {error.book ? (
          <Result title="Unable to find book!" status="warning" />
        ) : (
          <Row className="book-details-page__content-container">
            <Col className="book-details-page__misc-details-container" span={8}>
              <BookCover
                loading={loading.favebook}
                bookCoverURL={imUrl || ''}
                bookTitle={title || ''}
                interestStatus={{}}
                faveBookHandler={this.faveBookHandler}
              />
            </Col>
            <Col className="book-details-page__main-details-container" span={16}>
              <BookDescriptions
                loading={loading.book}
                title={title || ''}
                author={author || 'Lioneel & Glenn'}
                ratingValue={avg_rating || 0}
                reviewCount={totalReviewCount}
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
                        bookReviews={reviews}
                        showBookImg={false}
                        showTimestamp={false}
                        total={totalReviewCount}
                        pageSize={pageSize}
                        fetchPageHandler={this.fetchBookReviewsHandler}
                      />
                    ),
                  },
                ]}
                menuPosition="left"
                autoFit
              />
              <UserReview bookId={id} />
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
    avg_rating: PropTypes.number,
    description: PropTypes.string,
    imUrl: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  reviews: PropTypes.shape({}).isRequired,
  totalReviewCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  loading: PropTypes.shape({
    book: PropTypes.bool.isRequired,
    reviews: PropTypes.bool.isRequired,
    favebook: PropTypes.bool.isRequired,
  }).isRequired,
  error: PropTypes.shape({
    book: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
    favebook: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

  fetchBookDetails: PropTypes.func.isRequired,
  fetchBookReviews: PropTypes.func.isRequired,
  faveBook: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  book: selectBook,
  reviews: selectReviews,
  totalReviewCount: selectTotalReviewCount,
  pageSize: selectPageSize,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = {
  fetchBookDetails,
  fetchBookReviews,
  faveBook,
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
