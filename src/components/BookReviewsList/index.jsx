// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import BookReview from '../BookReview';

// import lodash
import isEmpty from 'lodash/isEmpty';
import size from 'lodash/size';

// import local styling
import './index.scss';

// import Antd
import { List, Empty, Skeleton } from 'antd';

const BookReviewsList = ({
  bookReviews,
  loading,
  showBookImg,
  showAuthor,
  showTimestamp,
  pageSize,
  total,
  fetchNextHandler,
}) => {
  const DEFAULT_PAGE_SIZE = 8;

  return (
    <div className="book-reviews-list__container">
      <Skeleton loading={loading && isEmpty(bookReviews)} active>
        {isEmpty(bookReviews) ? (
          <Empty />
        ) : (
          <List
            dataSource={bookReviews}
            rowKey={data => data.id}
            loading={loading}
            pagination={{
              position: 'both',
              hideOnSinglePage: true,
              total,
              pageSize: pageSize || DEFAULT_PAGE_SIZE,
              onChange: (page, pageSize) => {
                const currentBookCount = size(bookReviews);
                if (page > 1 && page * pageSize >= currentBookCount && currentBookCount < total) {
                  fetchNextHandler();
                }
              },
            }}
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
  bookReviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
  showBookImg: PropTypes.bool,
  showAuthor: PropTypes.bool,
  showTimestamp: PropTypes.bool,
  pageSize: PropTypes.number,
  total: PropTypes.number.isRequired,
  fetchNextHandler: PropTypes.func.isRequired,
};

BookReviewsList.defaultProps = {
  showBookImg: true,
  showAuthor: true,
  showTimestamp: true,
  pageSize: null,
};

export default BookReviewsList;
