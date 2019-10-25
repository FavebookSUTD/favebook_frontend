// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import ImageWrapper from '../ImageWrapper';

// import local styling
import './index.scss';

// import Antd
import { Typography, Divider, Rate } from 'antd';

// Extract antd components
const { Text, Paragraph } = Typography;

const BookReview = ({ bookReview, showBookImg, showAuthor, showTimestamp }) => {
  const { title, imgURL, content, author, timestamp, rating } = bookReview;

  return (
    <div className="book-review__container">
      {showBookImg ? (
        <div className="book-review__image-container">
          <ImageWrapper imgSrc={imgURL} imgAltText={title} />
        </div>
      ) : null}
      <div className="book-review-content__container">
        <Paragraph
          className="book-review"
          ellipsis={{
            rows: 2,
            expandable: true,
          }}
        >
          {content}
        </Paragraph>
        <div className="book-review-details__container">
          {showAuthor ? (
            <>
              <Text>By </Text>
              <Text className="author-name" strong>
                {author}
              </Text>
            </>
          ) : null}
          {showAuthor && showTimestamp ? (
            <Divider className="book-review-details-divider" type="vertical" />
          ) : null}
          {showTimestamp ? (
            <Text className="review-timestamp" strong>
              {timestamp}
            </Text>
          ) : null}
          <span className="book-review-details-rating__container">
            <Rate className="book-review-details-rating-star" allowHalf value={rating} disabled />
            <Text className="book-review-detials-rating-value" strong>
              {rating}
            </Text>
          </span>
        </div>
      </div>
    </div>
  );
};

BookReview.propTypes = {
  bookReview: PropTypes.shape({
    title: PropTypes.string,
    imgURL: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  showBookImg: PropTypes.bool,
  showAuthor: PropTypes.bool,
  showTimestamp: PropTypes.bool,
};

BookReview.defaultProps = {
  showBookImg: true,
  showAuthor: true,
  showTimestamp: true,
};

export default BookReview;
