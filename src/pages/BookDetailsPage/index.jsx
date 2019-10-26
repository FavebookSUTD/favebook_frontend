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
import { fetchBookDetails, fetchBookReviews } from './actions';

// import selector
import { selectBook, selectReviews, selectLoading, selectError } from './selectors';

// import local components
import FilterBar from '@containers/FilterBar';
import BookCover from './components/BookCover';
import BookDescriptions from './components/BookDescriptions';
import TabMenuContainer from '@components/TabMenuContainer';
import BookSummaryContent from './components/BookSummaryContent';
import BookDetailsContent from './components/BookDetailsContent';
import BookReviewsList from '@components/BookReviewsList';
import UserReview from './containers/UserReview';

// import local styling
import './index.scss';

// import Antd
import { Row, Col, Result } from 'antd';

// Extract antd components

class BookDetailsPage extends PureComponent {
  componentDidMount() {
    const { fetchBookDetails, fetchBookReviews } = this.props;
    // TODO: Get the book ID
    // TODO: Refine the rendering and data retrieval once FilterBar is done integrate with saga
    fetchBookDetails();
    fetchBookReviews();
  }

  render() {
    const { book, reviews, loading, error } = this.props;

    const {
      title,
      author,
      ratingValue,
      commentCount,
      purchaseLinks,
      genres,
      summary,
      details,
      bookCoverURL,
      interestStatus,
    } = book;

    return (
      <div className="book-details-page__main-container">
        <FilterBar position="right" />
        {error.book ? (
          <Result
            title="Something went wrong with the server. Please try again later."
            status="error"
          />
        ) : (
          <Row className="book-details-page__content-container">
            <Col className="book-details-page__misc-details-container" span={8}>
              <BookCover
                bookCoverURL={bookCoverURL}
                bookTitle={title}
                interestStatus={interestStatus || {}}
              />
            </Col>
            <Col className="book-details-page__main-details-container" span={16}>
              <BookDescriptions
                loading={loading.book}
                title={title || ''}
                author={author || ''}
                ratingValue={ratingValue || 0}
                commentCount={commentCount || 0}
                purchaseLinks={purchaseLinks || {}}
                genres={genres || []}
              />
              <TabMenuContainer
                className="book-details-page__tab-menu-container"
                menuObj={[
                  {
                    title: 'Summary',
                    reactNode: (
                      <BookSummaryContent summary={summary || ''} loading={loading.book} />
                    ),
                  },
                  {
                    title: 'Details',
                    reactNode: (
                      <BookDetailsContent bookDetails={details || {}} loading={loading.book} />
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
    commentCount: PropTypes.number,
    purchaseLinks: PropTypes.shape({}),
    genres: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
    details: PropTypes.shape({}),
    bookCoverURL: PropTypes.string,
    interestStatus: PropTypes.shape({}),
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.shape({
    book: PropTypes.bool.isRequired,
    reviews: PropTypes.bool.isRequired,
  }).isRequired,
  error: PropTypes.shape({
    book: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
  }).isRequired,

  fetchBookDetails: PropTypes.func.isRequired,
  fetchBookReviews: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  book: selectBook,
  reviews: selectReviews,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = {
  fetchBookDetails,
  fetchBookReviews,
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
