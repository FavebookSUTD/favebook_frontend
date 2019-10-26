// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local components
import UserTextInfo from '../UserTextInfo';
import UserAvatar from '../UserAvatar';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import local styling
import './index.scss';

// import Antd
import { Button, Skeleton, Empty } from 'antd';

const UserInfo = ({ loading, userInfo }) => {
  const { username, joinDate } = userInfo;

  return (
    <div className="user-info__container">
      <div className="user-info__membership-container">
        <UserAvatar loading={loading} username={username} joinDate={joinDate} />
      </div>
      <div className="user-info__relation-container">
        <Skeleton loading={loading} active>
          {!loading && !isEmpty(userInfo) ? (
            <>
              <UserTextInfo userInfo={userInfo} />
              <Button className="user-follow-btn">{'Follow her'.toUpperCase()}</Button>
            </>
          ) : (
            <Empty description="Unable to get user info." />
          )}
        </Skeleton>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    joinDate: PropTypes.string,
  }).isRequired,
};

export default UserInfo;
