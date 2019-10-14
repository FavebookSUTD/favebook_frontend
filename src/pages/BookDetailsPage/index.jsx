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
import {} from './actions';

// import selector
import { selectBook, selectLoading, selectError } from './selectors';

// import local components
import FilterBar from '@containers/FilterBar';
import BookCover from './components/BookCover';
import BookDescriptions from './components/BookDescriptions';
import BookDetailsMenuContainer from './components/BookDetailsMenuContainer';

// import local styling
import './index.scss';

// import Antd
import { Row, Col } from 'antd';
import UserReview from './containers/UserReview';

// Extract antd components

class BookDetailsPage extends PureComponent {
  componentDidMount() {}

  render() {
    const { book } = this.props;
    const {
      title,
      author,
      ratingValue,
      commentCount,
      purchaseLinks,
      genres,
      summary,
      details,
      reviews,
      bookCoverURL,
      interestStatus,
    } = book;

    return (
      <div className="book-details-page__main-container">
        <FilterBar position="right" />
        <Row className="book-details-page__content-container">
          <Col className="book-details-page__misc-details-container" span={8}>
            <BookCover bookCoverURL={bookCoverURL} interestStatus={interestStatus} />
          </Col>
          <Col className="book-details-page__main-details-container" span={16}>
            <BookDescriptions
              title={title}
              author={author}
              ratingValue={ratingValue}
              commentCount={commentCount}
              purchaseLinks={purchaseLinks}
              genres={genres}
            />
            <BookDetailsMenuContainer summary={summary} details={details} reviews={reviews} />
            <UserReview />
          </Col>
        </Row>
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
    reviews: PropTypes.arrayOf(PropTypes.object),
    bookCoverURL: PropTypes.string,
    interestStatus: PropTypes.shape({}),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  book: selectBook,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = {};

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
