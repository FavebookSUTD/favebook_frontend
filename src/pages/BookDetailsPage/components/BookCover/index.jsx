// import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import local components
import ImageWrapper from '@components/ImageWrapper';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import local styling
import './index.scss';

// import Antd
import { Button, Typography } from 'antd';

// Extract antd components
const { Text } = Typography;

const BookCover = ({ bookCoverURL, interestStatus }) => {
  const [showOptions, setShowOption] = useState(false);

  const { wantToReadCount, readingCount } = interestStatus;

  const disabledBtn = isEmpty(interestStatus);

  return (
    <div className="book-cover__container">
      <div className="backdrop-pattern" />
      <div className="book-cover-img__container">
        <ImageWrapper imgSrc={bookCoverURL} imgAltText="Book" />
      </div>
      {showOptions ? (
        <div className="interest-btn-group">
          <Button
            className="interest-btn"
            shape="round"
            disabled={disabledBtn}
            onClick={() => setShowOption(false)}
          >
            I want to read
          </Button>
          <Button
            className="interest-btn"
            shape="round"
            disabled={disabledBtn}
            onClick={() => setShowOption(false)}
          >
            I am reading
          </Button>
        </div>
      ) : (
        <div className="interest-status__container">
          <Button
            className="faveit-btn"
            icon="heart"
            shape="round"
            disabled={disabledBtn}
            onClick={() => setShowOption(true)}
          >
            FAVE IT!
          </Button>
          <div className="interest-status__statistic-container">
            <Text className="people-count">{!!wantToReadCount || 0}</Text>
            <Text>want to read</Text>
          </div>
          <div className="interest-status__statistic-container">
            <Text className="people-count">{!!readingCount || 0}</Text>
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
