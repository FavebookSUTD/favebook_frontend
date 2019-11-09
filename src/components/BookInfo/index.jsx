// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import ImageWrapper from '../ImageWrapper';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import utils
import { goto } from '@utils/goto';

// import local styling
import './index.scss';

// import Antd
import { List, Typography, Skeleton, Empty } from 'antd';

// Extract antd components
const { Title, Paragraph } = Typography;

const getBookImage = (imgURL, rating) => (
  <div className="book-image__container">
    <ImageWrapper imgSrc={imgURL} imgAltText="" />
    <span className="book-rating">{rating}</span>
  </div>
);

const BookInfo = ({ books, pageSize, loading }) => {
  const DEFAULT_PAGE_SIZE = 8;

  return (
    <div className="book-info__container">
      <Skeleton loading={loading} active>
        {!isEmpty(books) ? (
          <List
            className="book-info__list-container"
            itemLayout="vertical"
            split={false}
            dataSource={books}
            rowKey={data => data._id}
            pagination={{
              position: 'both',
              hideOnSinglePage: true,
              pageSize: pageSize || DEFAULT_PAGE_SIZE,
            }}
            renderItem={book => (
              <List.Item key={book.id}>
                <List.Item.Meta
                  avatar={getBookImage(book.imUrl, book.rating)}
                  title={
                    <span>
                      <Title
                        className="book-title"
                        level={4}
                        ellipsis={{ rows: 2 }}
                        onClick={() => goto(`/book/${book.asin}`)}
                      >
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
        ) : (
          <Empty description="No book found" />
        )}
      </Skeleton>
    </div>
  );
};

BookInfo.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      asin: PropTypes.string,
      title: PropTypes.string,
      imUrl: PropTypes.string,
      author: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
  pageSize: PropTypes.number,
  loading: PropTypes.bool.isRequired,
};

BookInfo.defaultProps = {
  pageSize: null,
};

export default BookInfo;
