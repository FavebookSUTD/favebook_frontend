// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import BookReview from '../BookReview';

// import local styling
import './index.scss';

// import Antd
import { List } from 'antd';

const BookReviewsList = ({ bookReviews }) => {
  return (
    <div className="book-reviews-list__container">
      <List
        dataSource={bookReviews}
        renderItem={({ author, reviewContent }) => (
          <List.Item>
            <BookReview author={author} reviewContent={reviewContent} />
          </List.Item>
        )}
      />
    </div>
  );
};

BookReviewsList.propTypes = {
  bookReviews: PropTypes.shape({}).isRequired,
};

export default BookReviewsList;
