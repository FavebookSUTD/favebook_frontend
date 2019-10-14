// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import BookRatingStar from '../BookRatingStar';

// import lodash
import map from 'lodash/map';

// import local styling
import './index.scss';

// import Antd
import { Typography, Icon, Button, Tag } from 'antd';

// Extract antd components
const { Title, Text } = Typography;

const BookDescriptions = ({ title, author, ratingValue, commentCount, purchaseLinks, genres }) => {
  return (
    <div className="book-descriptions__main-container">
      <div className="book-description__basic-details">
        <Title className="book-descriptions__title" level={3}>
          {title}
        </Title>
        <Text className="book-descriptions__author" ellipsis>
          {author}
        </Text>
      </div>
      <div className="book-rating__container">
        <BookRatingStar ratingValue={ratingValue} />
        <Text className="review-count" strong>
          <Icon className="comment-icon" type="message" />
          {`${commentCount}`}
        </Text>
      </div>
      <div className="book-purchase__btn-group">
        <Text className="book-purchase__title" strong>
          Buy on
        </Text>
        <Button className="book-purchase__btn" size="large" type="primary">
          AMAZON
        </Button>
        <Button className="book-purchase__btn" size="large" type="primary">
          KINDLE
        </Button>
      </div>
      <div className="book-genre-tags__container">
        {map(genres, genre => (
          <Tag key={genre} className="book-genre-tag">
            {genre}
          </Tag>
        ))}
      </div>
    </div>
  );
};

BookDescriptions.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ratingValue: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  purchaseLinks: PropTypes.shape({}).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

BookDescriptions.defaultProps = {};

export default BookDescriptions;
