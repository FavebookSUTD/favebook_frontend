// import React
import React from 'react';
import PropTypes from 'prop-types';

// import lodash
import map from 'lodash/map';
import slice from 'lodash/slice';
import isEmpty from 'lodash/isEmpty';

// import local styling
import './index.scss';

// import Antd
import { Row, Col } from 'antd';

// Extract antd components
// const { Text } = Typography;

const BookInfo = props => {
  const { books } = props;
  const { pageNum } = books;
  const bookinfo = books.data;
  const PAGE_MAX_BOOKS = 5;
  const startIdx = (pageNum - 1) * PAGE_MAX_BOOKS;

  return (
    <div className="book-info__container">
      {!isEmpty(bookinfo) ? (
        <>
          {map(slice(bookinfo, startIdx, startIdx + PAGE_MAX_BOOKS), book => (
            <Row key={book.id} className="book-row__container" type="flex" justify="center">
              <Col span={4} className="book-image">
                <div>Hi</div>
                <div className="book-rating">3.5/5</div>
              </Col>
              <Col span={12}>
                <div className="book-title">{book.title}</div>
                <div className="book-author">By {book.author}</div>
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <div>Nothing to see here.</div>
      )}
    </div>
  );
};

BookInfo.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageNum: PropTypes.number.isRequired,
};

export default BookInfo;
