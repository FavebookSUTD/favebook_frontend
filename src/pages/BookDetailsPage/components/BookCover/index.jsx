// import React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import local components
import ImageWrapper from '@components/ImageWrapper';

// import local styling
import './index.scss';

// import Antd
import { Button, Typography, Icon } from 'antd';

// Extract antd components
const { Text } = Typography;

const BookCover = ({
  loading,
  bookCoverURL,
  bookTitle,
  wantToReadCount,
  faveBookHandler,
  initFave,
  bookId,
  isLoggedIn,
}) => {
  const [isFaved, setFaved] = useState(initFave);
  const [readCount, setRead] = useState(wantToReadCount);

  useEffect(() => {
    setFaved(initFave);
    setRead(wantToReadCount);
  }, [initFave, wantToReadCount]);

  return (
    <div className="book-cover__container">
      <div className="backdrop-pattern" />
      <div className="book-cover-img__container">
        <ImageWrapper imgSrc={bookCoverURL} imgAltText={bookTitle} />
      </div>
      <div className="interest-status__container">
        {isLoggedIn ? (
          <Button
            className="faveit-btn"
            shape="round"
            disabled={false}
            loading={loading}
            onClick={() => {
              faveBookHandler(!isFaved, bookId);
              setFaved(!isFaved);
              setRead(!isFaved ? readCount + 1 : readCount - 1);
            }}
          >
            {loading ? null : (
              <Icon className="faveit-icon" type="heart" theme={isFaved ? 'filled' : 'outlined'} />
            )}
            FAVE IT!
          </Button>
        ) : (
          <div className="faveit-loginmessage">
            <Text>Please log in to fave this book!</Text>
          </div>
        )}
        <div className="interest-status__statistic-container">
          <Text className="people-count">{readCount || 0}</Text>
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
  bookId: PropTypes.string.isRequired,
  initFave: PropTypes.number.isRequired,
  wantToReadCount: PropTypes.number.isRequired,
};

export default BookCover;
