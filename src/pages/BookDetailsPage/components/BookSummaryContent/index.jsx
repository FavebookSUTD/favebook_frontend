// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Typography, Empty } from 'antd';

// Extract antd components
const { Paragraph } = Typography;

const BookSummaryContent = ({ summary }) => {
  return (
    <div className="book-summary__content-container">
      {summary ? <Paragraph className="book-summary-content">{summary}</Paragraph> : <Empty />}
    </div>
  );
};

BookSummaryContent.propTypes = {
  summary: PropTypes.string,
};

BookSummaryContent.defaultProps = {
  summary: '',
};

export default BookSummaryContent;
