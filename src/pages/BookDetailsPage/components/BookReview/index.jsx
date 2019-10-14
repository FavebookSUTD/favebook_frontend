// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Typography } from 'antd';

// Extract antd components
const { Text, Paragraph } = Typography;

const BookReview = ({ author, reviewContent }) => {
  return (
    <div className="book-review__container">
      <Paragraph
        className="book-review"
        ellipsis={{
          rows: 2,
          expandable: true,
        }}
      >
        {reviewContent}
      </Paragraph>
      <div className="author__container">
        <Text>By </Text>
        <Text className="author-name">{author}</Text>
      </div>
    </div>
  );
};

BookReview.propTypes = {
  author: PropTypes.string.isRequired,
  reviewContent: PropTypes.string.isRequired,
};

BookReview.defaultProps = {};

export default BookReview;
