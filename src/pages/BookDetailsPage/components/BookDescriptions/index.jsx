// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components

// import lodash

// import local styling
import './index.scss';

// import Antd
import { Typography, Rate, Icon, Button, Tag } from 'antd';

// Extract antd components
const { Title, Text } = Typography;

const BookDescriptions = ({}) => {
  const value = 3.5;
  const reviewCount = 148;
  return (
    <div className="book-descriptions__main-container">
      <div className="book-description__basic-details">
        <Title className="book-descriptions__title" level={3}>
          Pocket Full of Colors: The Magical World of Mary Blair, Disney Artist Extraordinaire
        </Title>
        <Text className="book-descriptions__author" ellipsis>
          By Amy Guglielmo, Jacqueline Tourville and illustrated by Brigette Barrager
        </Text>
      </div>
      <div className="book-rating__container">
        <Rate className="rating-star" allowHalf disabled value={value} />
        <Text className="rating-value-text" strong>{`${value}`}</Text>
        <Text className="review-count" strong>
          <Icon className="comment-icon" type="message" />
          {`${reviewCount}`}
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
        <Tag className="book-genre-tag">Non-fiction</Tag>
        <Tag className="book-genre-tag">Children</Tag>
        <Tag className="book-genre-tag">Picture</Tag>
      </div>
    </div>
  );
};

BookDescriptions.propTypes = {};

BookDescriptions.defaultProps = {};

export default BookDescriptions;
