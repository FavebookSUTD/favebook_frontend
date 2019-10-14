// import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import local components
import BookSummaryContent from '../BookSummaryContent';
import BookDetailsContent from '../BookDetailsContent';
import BookReviewsList from '../BookReviewsList';

// import local styling
import './index.scss';

// import Antd
import { Menu } from 'antd';

const renderBookDetailsContent = (selectedMenu, summary, details, reviews) => {
  switch (selectedMenu) {
    case 'summary':
      return <BookSummaryContent summary={summary} />;

    case 'details':
      return <BookDetailsContent bookDetails={details} />;

    case 'reviews':
      return <BookReviewsList bookReviews={reviews} />;

    default:
      return null;
  }
};

const BookDetailsMenuContainer = ({ summary, details, reviews }) => {
  const [selectedMenu, setSelectedMenu] = useState('summary');

  return (
    <div className="book-details-menu__container">
      <Menu
        className="book-details-menu"
        mode="horizontal"
        defaultSelectedKeys={['summary']}
        onSelect={({ selectedKeys }) => {
          setSelectedMenu(selectedKeys[0]);
        }}
      >
        <Menu.Item key="summary">Summary</Menu.Item>
        <Menu.Item key="details">Details</Menu.Item>
        <Menu.Item key="reviews">Reviews</Menu.Item>
      </Menu>
      <div className="book-details__content-container">
        {renderBookDetailsContent(selectedMenu, summary, details, reviews)}
      </div>
    </div>
  );
};

BookDetailsMenuContainer.propTypes = {
  summary: PropTypes.string.isRequired,
  details: PropTypes.shape({}).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

BookDetailsMenuContainer.defaultProps = {};

export default BookDetailsMenuContainer;
