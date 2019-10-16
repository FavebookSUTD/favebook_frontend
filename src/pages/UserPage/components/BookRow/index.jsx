// import React
import React from 'react';
import PropTypes from 'prop-types';

// import lodash
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import slice from 'lodash/slice';

// import local styling
import './index.scss';

// import Antd
import { Row, Col } from 'antd';

const BookRow = ({ books }) => {
  return (
    <div className="book-row__main-container">
      {!isEmpty(books) ? (
        <>
          {map(slice(books, 0, 5), book => (
            <Row key={book.id} className="book-row__container" type="flex" justify="center">
              <Col span={4} className="book-image">
                <div>Hi</div>
              </Col>
              <Col span={12}>
                <div className="book-title">{book.title}</div>
                <div className="book-author">{`By ${book.author}`}</div>
              </Col>
              <Col>
                <div className="book-hers-rating">3.5/5</div>
              </Col>
              <Col>
                <div className="book-mine-rating">3.5/5</div>
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

BookRow.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookRow;
