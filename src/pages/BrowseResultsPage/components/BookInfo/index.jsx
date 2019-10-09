// import React
import React from 'react';
import { PropTypes } from 'prop-types';

// import local styling
import './index.scss';

// import lodash
import map from 'lodash/map';
import slice from 'lodash/slice';
import isEmpty from 'lodash/isEmpty';

// import Antd
import { Row, Col } from 'antd';

// Extract antd components
// const { Text } = Typography;

const BookInfo = props => {
  const { books, pageNum, pageSize } = props;
  const bookinfo = books;
  // const booksLength = bookinfo.length;
  const PAGE_MAX_BOOKS = pageSize;
  // const numOfPage = Math.ceil(booksLength / PAGE_MAX_BOOKS);
  // const bookList = [];
  let startIdx = (pageNum - 1) * pageSize;

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
  pageNum: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default BookInfo;
