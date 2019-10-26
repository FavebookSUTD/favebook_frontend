// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Tooltip } from 'antd';

const BookRatingBubble = ({ ratingValue, userRating }) => {
  return (
    <Tooltip title={userRating ? 'User Rating' : 'Your Rating'}>
      <div
        className={`book-rating-bubble__container ${
          userRating ? 'book-rating-bubble-user-rating' : ''
        }`}
      >
        {ratingValue < 0 ? 'NIL' : ratingValue}
      </div>
    </Tooltip>
  );
};

BookRatingBubble.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  userRating: PropTypes.bool,
};

BookRatingBubble.defaultProps = {
  userRating: false,
};

export default BookRatingBubble;
