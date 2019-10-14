// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Typography } from 'antd';

// Extract antd components
const { Paragraph } = Typography;

const BookSummaryContent = ({ summary }) => {
  return (
    <div className="book-summary__content-container">
      <Paragraph className="book-summary-content">{summary}</Paragraph>
    </div>
  );
};

BookSummaryContent.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default BookSummaryContent;
