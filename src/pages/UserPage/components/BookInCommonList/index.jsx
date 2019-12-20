// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import ImageWrapper from '@components/ImageWrapper';
import BookRatingBubble from '../BookRatingBubble';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import utils
import { goto } from '@utils/goto';

// import local styling
import './index.scss';

// import Antd
import { Skeleton, List, Typography, Empty } from 'antd';

// Extract antd components
const { Title, Paragraph } = Typography;

const getBookImage = imgURL => (
  <div className="book-image__container">
    <ImageWrapper imgSrc={imgURL} imgAltText="" />
  </div>
);

const getRatingComparison = (rating, userRating) => (
  <div className="book-rating-comparison__container">
    <BookRatingBubble ratingValue={userRating} userRating />
    <BookRatingBubble ratingValue={rating} />
  </div>
);
// TODO
const BookInCommon = ({ loading, books }) => {
  return (
    <div className="book-in-common__main-container">
      <Skeleton loading={loading} active>
        {!isEmpty(books) ? (
          <List
            className="book-in-common__list-container"
            itemLayout="vertical"
            split={false}
            dataSource={books}
            rowKey={data => data.id}
            pagination={{
              position: 'both',
              hideOnSinglePage: true,
              pageSize: 5,
            }}
            renderItem={book => (
              <List.Item key={book.asin} extra={getRatingComparison(book.rating, book.userRating)}>
                <List.Item.Meta
                  avatar={getBookImage(book.imgURL, book.rating)}
                  title={
                    <span>
                      <Title
                        className="book-title"
                        level={4}
                        ellipsis={{ rows: 2 }}
                        onClick={() => goto(`/book/${book.asin}`)}
                      >
                        {book.title}
                      </Title>
                    </span>
                  }
                  description={
                    <Paragraph className="book-author" ellipsis={{ rows: 2 }}>
                      {`By ${book.author}`}
                    </Paragraph>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <Empty description="No book in common." />
        )}
      </Skeleton>
    </div>
  );
};

BookInCommon.propTypes = {
  loading: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookInCommon;
