// import React
import React from 'react';
import { PropTypes, propTypes } from 'prop-types';

// import local styling
import './index.scss';

// import lodash
import map from 'lodash/map';
import slice from 'lodash/slice';
import isEmpty from 'lodash/isEmpty';

// import Antd
import { Typography, Row, Col } from 'antd';

// Extract antd components
// const { Text } = Typography;

const BookInfo = books => {
  const bookinfo = books.books;
  // const booksLength = bookinfo.length;
  const PAGE_MAX_BOOKS = 5;
  // const numOfPage = Math.ceil(booksLength / PAGE_MAX_BOOKS);
  // const bookList = [];
  let startIdx = 0;

  return (
    <div>
      {!isEmpty(bookinfo) ? (
        <div>
          {map(slice(bookinfo, startIdx, startIdx + PAGE_MAX_BOOKS), book => (
            <Row className="book-row__container" type="flex" justify="center">
              <Col span={4} className="book-image" justifyContent="center">
                <div>Hi</div>
              </Col>
              <Col span={12} className="book-info__container">
                <div className="book-title">{book.title}</div>
                <div className="book-author">By {book.author}</div>
              </Col>
            </Row>
          ))}
        </div>
      ) : (
        <div>Nothing to see here.</div>
      )}
    </div>
  );
};

BookInfo.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookInfo;
