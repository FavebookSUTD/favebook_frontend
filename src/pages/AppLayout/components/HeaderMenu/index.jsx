// import React
import React from 'react';
import PropTypes from 'prop-types';

// import lodash
import map from 'lodash/map';
import toUpper from 'lodash/toUpper';

// import utils
import { goto } from '@utils/goto';

// import local styling
import './index.scss';

// import Antd
import { Typography, Icon, Menu, Popconfirm } from 'antd';

// Extract antd components
const { SubMenu } = Menu;
const { Text } = Typography;

const menuClickHandler = key => {
  switch (key) {
    case 'home':
      return goto('/');

    case 'mybooks':
      return goto('/mybooks');

    default:
      return null;
  }
};

const HeaderMenu = ({ genres, username, logoutHandler }) => {
  const signInHandler = () => {
    if (!username) {
      goto('/authenticate');
    }
  };
  const signOutHandler = () => {
    if (username) {
      logoutHandler();
    }
  };

  return (
    <header className="header-menu__container">
      <Menu
        className="menu__container"
        mode="horizontal"
        selectable={false}
        onClick={({ key }) => {
          menuClickHandler(key);
        }}
      >
        <Menu.Item key="home">HOME</Menu.Item>
        <Menu.Item key="mybooks">MY BOOKS</Menu.Item>
        <SubMenu
          key="browse"
          popupClassName="submenu__container"
          title={
            <>
              <span className="submenu-title__container">BROWSE</span>
              <Icon type="caret-down" />
            </>
          }
        >
          <Menu.ItemGroup className="menu-item-group__main-container">
            <Menu.Item key="recommendations">Recommendations</Menu.Item>
            <Menu.Item key="choice-awards">Choice Awards</Menu.Item>
            <Menu.Item key="giveaways">Giveaways</Menu.Item>
            <Menu.Item key="new-releases">New Releases</Menu.Item>
            <Menu.Item key="news-feed">News Feed</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup className="menu-item-group__genres-container" title="GENRES">
            {map(genres, genre => (
              <Menu.Item key={genre.title} title={genre.title}>
                {genre.title}
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="newsfeed">NEWSFEED</Menu.Item>
      </Menu>
      <Popconfirm title="Confirm Logout?" icon={<Icon type="logout" />} onConfirm={signOutHandler}>
        <div className="signin__container" onClick={signInHandler}>
          <Icon className="user-icon" type="user" />
          <Text className="signin-text" strong ellipsis>
            {toUpper(username) || 'SIGN IN'}
          </Text>
        </div>
      </Popconfirm>
    </header>
  );
};

HeaderMenu.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  username: PropTypes.string.isRequired,
  logoutHandler: PropTypes.func.isRequired,
};

export default HeaderMenu;
