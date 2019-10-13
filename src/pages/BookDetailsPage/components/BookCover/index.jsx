// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components

// import lodash

// import local styling
import './index.scss';

// import Antd
import { Button } from 'antd';

const BookCover = ({}) => {
  return (
    <div className="book-cover__container">
      <div className="backdrop-pattern" />
      <div className="book-cover-img__container">
        <img className="book-cover-img" src="https://loremflickr.com/250/250?random=1" alt="Book" />
      </div>
      <div className="interest-btn-group">
        <Button className="interest-btn" shape="round">
          I want to read
        </Button>
        <Button className="interest-btn" shape="round">
          I am reading
        </Button>
      </div>
    </div>
  );
};

BookCover.propTypes = {};

BookCover.defaultProps = {};

export default BookCover;
