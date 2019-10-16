// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import actions

// import local styling
import './index.scss';

// import Antd
import { Layout, Icon, Button, Typography, Avatar } from 'antd';

// Extract antd components
const { Content } = Layout;

const UserInfo = props => {
  const { usericon } = props;

  return (
    <span className="avatar-circle">
      <Avatar className="user-icon" icon="user" size={128} />
    </span>
  );
};

UserInfo.propTypes = {};

export default UserInfo;