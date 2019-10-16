// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Avatar, Typography } from 'antd';

// Extract antd components
const { Title, Text } = Typography;

const UserAvatar = ({ username, joinDate }) => {
  return (
    <div className="user-avatar__container">
      <span className="avatar-circle">
        <Avatar className="user-icon" icon="user" size={128} />
      </span>
      <div className="user-membership-details__container">
        <Title className="username" level={3}>
          {username.toUpperCase()}
        </Title>
        <Text className="user-join-date">{`Joined on ${joinDate}`}</Text>
      </div>
    </div>
  );
};

UserAvatar.propTypes = {
  username: PropTypes.string.isRequired,
  joinDate: PropTypes.string.isRequired,
};

export default UserAvatar;
