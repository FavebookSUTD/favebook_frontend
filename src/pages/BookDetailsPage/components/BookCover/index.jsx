// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import ImageWrapper from '@components/ImageWrapper';

// import lodash

// import local styling
import './index.scss';

// import Antd
import { Button, Typography } from 'antd';

// Extract antd components
const { Text } = Typography;

const BookCover = ({ loading, bookCoverURL, bookTitle, interestStatus, faveBookHandler }) => {
  const { wantToReadCount } = interestStatus;

  return (
    <div className="book-cover__container">
      <div className="backdrop-pattern" />
      <div className="book-cover-img__container">
        <ImageWrapper imgSrc={bookCoverURL} imgAltText={bookTitle} />
      </div>
      <div className="interest-status__container">
        <Button
          className="faveit-btn"
          icon="heart"
          shape="round"
          disabled={false}
          loading={loading}
          onClick={faveBookHandler}
        >
          FAVE IT!
        </Button>
        <div className="interest-status__statistic-container">
          <Text className="people-count">{wantToReadCount || 0}</Text>
          <Text>people faved this book</Text>
        </div>
      </div>
    </div>
  );
};

BookCover.propTypes = {
  loading: PropTypes.bool.isRequired,
  bookCoverURL: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  interestStatus: PropTypes.shape({
    wantToReadCount: PropTypes.number,
  }).isRequired,
  faveBookHandler: PropTypes.func.isRequired,
};

export default BookCover;
