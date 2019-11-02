// import React
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// import local components
import ImageWrapper from '../ImageWrapper';

// import utils
import { goto } from '@utils/goto';

// import local styling
import './index.scss';

// import Antd
import { Typography, Divider, Rate } from 'antd';

// Extract antd components
const { Text, Paragraph } = Typography;

const BookReview = ({ bookReview, showBookImg, showAuthor, showTimestamp }) => {
  const { title, imgURL, review_text, review_rating, username, timestamp } = bookReview;

  return (
    <div className="book-review__container">
      {showBookImg ? (
        <div className="book-review__image-container">
          <ImageWrapper imgSrc={imgURL || ''} imgAltText={title || ''} />
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
          {review_text}
        </Paragraph>
        <div className="book-review-details__container">
          {showAuthor ? (
            <>
              <Text>By </Text>
              <Text className="author-name" strong onClick={() => goto(`/user/${username}`)}>
                {username}
              </Text>
            </>
          ) : null}
          {showAuthor && showTimestamp ? (
            <Divider className="book-review-details-divider" type="vertical" />
          ) : null}
          {showTimestamp ? (
            <Text className="review-timestamp" strong>
              {Moment(timestamp).format('DD MMM YYYY')}
            </Text>
          ) : null}
          <span className="book-review-details-rating__container">
            <Rate
              className="book-review-details-rating-star"
              allowHalf
              value={review_rating}
              disabled
            />
            <Text className="book-review-detials-rating-value" strong>
              {review_rating}
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
    review_text: PropTypes.string,
    review_rating: PropTypes.number,
    username: PropTypes.string,
    timestamp: PropTypes.string,
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
