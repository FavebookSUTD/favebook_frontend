// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import BookReview from '../BookReview';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import local styling
import './index.scss';

// import Antd
import { List, Empty, Skeleton } from 'antd';

const BookReviewsList = ({ bookReviews, loading, showBookImg, showAuthor, showTimestamp }) => {
  return (
    <div className="book-reviews-list__container">
      <Skeleton loading={loading} active>
        {isEmpty(bookReviews) ? (
          <Empty />
        ) : (
          <List
            dataSource={bookReviews}
            renderItem={bookReview => (
              <List.Item>
                <BookReview
                  bookReview={bookReview}
                  showBookImg={showBookImg}
                  showAuthor={showAuthor}
                  showTimestamp={showTimestamp}
                />
              </List.Item>
            )}
          />
        )}
      </Skeleton>
    </div>
  );
};

BookReviewsList.propTypes = {
  bookReviews: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  showBookImg: PropTypes.bool,
  showAuthor: PropTypes.bool,
  showTimestamp: PropTypes.bool,
};

BookReviewsList.defaultProps = {
  showBookImg: true,
  showAuthor: true,
  showTimestamp: true,
};

export default BookReviewsList;
