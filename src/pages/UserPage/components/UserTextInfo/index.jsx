// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Typography } from 'antd';

// Extract antd components
const { Text } = Typography;

const UserTextInfo = ({ userInfo }) => {
  const { username, num_reviews, avg_rating, num_fav } = userInfo;

  return (
    <div className="user-text-info__container">
      <div className="user-followers">
        <Text className="user-name" ellipsis>
          {username.toUpperCase()}
        </Text>
        <Text>has made</Text>
        <Text className="user-num-reviews">{num_reviews}</Text>
        <Text>reviews</Text>
      </div>
      <div className="user-review-rating">
        <Text>Average review rating of</Text>
        <Text className="user-input-review-rating">{avg_rating}</Text>
      </div>
      <div className="user-fave-books">
        <Text className="user-input-fave-books">{num_fav}</Text>
        <Text>favourite books</Text>
      </div>
    </div>
  );
};

UserTextInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    num_reviews: PropTypes.number,
    avg_rating: PropTypes.number,
    num_fav: PropTypes.number,
  }).isRequired,
};

export default UserTextInfo;
