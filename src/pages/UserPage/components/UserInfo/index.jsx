// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import UserTextInfo from '../UserTextInfo';
import UserAvatar from '../UserAvatar';

// import local styling
import './index.scss';

// import Antd
import { Button } from 'antd';

const UserInfo = ({ userInfo }) => {
  const { username, joinDate } = userInfo;

  return (
    <div className="user-info__container">
      <div className="user-info__membership-container" span={4}>
        <UserAvatar username={username} joinDate={joinDate} />
      </div>
      <div className="user-info__relation-container" span={8}>
        <UserTextInfo userInfo={userInfo} />
        <Button className="user-follow-btn">{'Follow her'.toUpperCase()}</Button>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserInfo;
