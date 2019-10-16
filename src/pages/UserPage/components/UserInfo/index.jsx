// import React
import React from 'react';
import PropTypes from 'prop-types';

// import actions

// import local components
import UserTextInfo from '../UserTextInfo';
import UserAvatar from '../UserAvatar';

// import local styling
import './index.scss';

// import Antd
import { Layout, Button, Typography } from 'antd';

const UserInfo = props => {
  const { userinfo } = props;

  return (
    <Layout className="user-info__container">
      <div className="user-first-row">
        <UserAvatar />
        <UserTextInfo userinfo={userinfo} />
      </div>
      <div className="user-second-row">
        <div>
          <Typography className="user-info-username">{userinfo.name.toUpperCase()}</Typography>
          <Typography>Joined on {userinfo.joindate}</Typography>
        </div>
        <Button className="user-follow">{"Follow her".toUpperCase()}</Button>
      </div>
    </Layout>
  );
};

UserInfo.propTypes = {
  userinfo: PropTypes.arrayOf(PropTypes.object).isRequired, 
};

export default UserInfo;
