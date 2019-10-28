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
  const { username, followers, commonBooks, commonPercent } = userInfo;

  return (
    <div className="user-text-info__container">
      <div className="user-followers">
        <Text className="user-name" ellipsis>
          {username.toUpperCase()}
        </Text>
        <Text>has</Text>
        <Text className="user-followernumber">{followers}</Text>
        <Text>followers</Text>
      </div>
      <div className="user-commonbooks">
        <Text>You have</Text>
        <Text className="user-input-commonbooks">{commonBooks}</Text>
        <Text>common favebooks</Text>
      </div>
      <div className="user-commonpercent">
        <Text>Your tastes are</Text>
        <Text className="user-input-commonpercent">{`${commonPercent}%`}</Text>
        <Text>similar for a book you both rated.</Text>
      </div>
    </div>
  );
};

UserTextInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    followers: PropTypes.number,
    commonBooks: PropTypes.number,
    commonPercent: PropTypes.number,
  }).isRequired,
};

export default UserTextInfo;
