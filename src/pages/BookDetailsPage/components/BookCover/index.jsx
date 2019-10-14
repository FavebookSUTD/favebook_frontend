// import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Button, Typography } from 'antd';

// Extract antd components
const { Text } = Typography;

const BookCover = ({ bookCoverURL, interestStatus }) => {
  const [showOptions, setShowOption] = useState(false);

  const { wantToReadCount, readingCount } = interestStatus;

  return (
    <div className="book-cover__container">
      <div className="backdrop-pattern" />
      <div className="book-cover-img__container">
        <img className="book-cover-img" src={bookCoverURL} alt="Book" />
      </div>
      {showOptions ? (
        <div className="interest-btn-group">
          <Button className="interest-btn" shape="round" onClick={() => setShowOption(false)}>
            I want to read
          </Button>
          <Button className="interest-btn" shape="round" onClick={() => setShowOption(false)}>
            I am reading
          </Button>
        </div>
      ) : (
        <div className="interest-status__container">
          <Button
            className="faveit-btn"
            icon="heart"
            shape="round"
            onClick={() => setShowOption(true)}
          >
            FAVE IT!
          </Button>
          <div className="interest-status__statistic-container">
            <Text className="people-count">{wantToReadCount}</Text>
            <Text>want to read</Text>
          </div>
          <div className="interest-status__statistic-container">
            <Text className="people-count">{readingCount}</Text>
            <Text>reading</Text>
          </div>
        </div>
      )}
    </div>
  );
};

BookCover.propTypes = {
  bookCoverURL: PropTypes.string.isRequired,
  interestStatus: PropTypes.shape({
    wantToReadCount: PropTypes.number,
    readingCount: PropTypes.number,
  }).isRequired,
};

export default BookCover;
