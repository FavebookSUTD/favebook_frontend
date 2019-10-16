// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import actions

// import local styling
import './index.scss';

// import Antd
import { Layout, Icon, Button, Typography } from 'antd';

// Extract antd components
const { Content } = Layout;

const UserTextInfo = props => {
  const { userinfo } = props;

  return (
    <Layout className="user-info__container">
      <Typography className="user-followers">
        <div className="user-name">{userinfo.name.toUpperCase()}</div>
        has
        <div className="user-followernumber">{userinfo.followers}</div>
        followers
      </Typography>
      <Typography className="user-commonbooks">
        You have
        <div className="user-input-commonbooks">{userinfo.commonbooks}</div>
        common favebooks
      </Typography>
      <Typography className="user-commonpercent">
        Your tastes are
        <div className="user-input-commonpercent">{userinfo.commonpercent}</div>% similar for a book
        you both rated.
      </Typography>
    </Layout>
  );
};

UserTextInfo.propTypes = {};

export default UserTextInfo;
