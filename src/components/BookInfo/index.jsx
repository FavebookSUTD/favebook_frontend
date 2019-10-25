// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { List, Typography } from 'antd';

// Extract antd components
const { Title, Paragraph } = Typography;

const getBookImage = (imgURL, rating) => (
  <div className="book-image__container">
    <img className="book-image" src={imgURL} alt="" />
    <span className="book-rating">{rating}</span>
  </div>
);

const BookInfo = ({ books, pageSize }) => {
  const DEFAULT_PAGE_SIZE = 8;

  return (
    <div className="book-info__container">
      <List
        className="book-info__list-container"
        itemLayout="vertical"
        split={false}
        dataSource={books}
        rowKey={data => data.id}
        pagination={{
          position: 'both',
          hideOnSinglePage: true,
          pageSize: pageSize || DEFAULT_PAGE_SIZE,
        }}
        renderItem={book => (
          <List.Item key={book.id}>
            <List.Item.Meta
              avatar={getBookImage(book.imgURL, book.rating)}
              title={
                <span>
                  <Title className="book-title" level={4} ellipsis={{ rows: 2 }}>
                    {book.title}
                  </Title>
                </span>
              }
              description={
                <Paragraph className="book-author" ellipsis={{ rows: 2 }}>
                  {`By ${book.author}`}
                </Paragraph>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

BookInfo.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      imgURL: PropTypes.string,
      author: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
  pageSize: PropTypes.number,
};

BookInfo.defaultProps = {
  pageSize: null,
};

export default BookInfo;
