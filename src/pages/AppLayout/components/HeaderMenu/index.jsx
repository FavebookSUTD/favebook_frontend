// import React
import React from 'react';
import PropTypes from 'prop-types';

// import lodash
import map from 'lodash/map';

// import local styling
import './index.scss';

// import Antd
import { Typography, Icon, Menu } from 'antd';

// Extract antd components
const { SubMenu } = Menu;
const { Text } = Typography;

const HeaderMenu = ({ genres, menuClickHandler }) => {
  return (
    <header className="header-menu__container">
      <Menu
        className="menu__container"
        mode="horizontal"
        selectable={false}
        onClick={(item, key, keyPath) => {
          console.log(item, key, keyPath);
        }}
      >
        <Menu.Item key="home">HOME</Menu.Item>
        <Menu.Item key="mybooks">MY BOOKS</Menu.Item>
        <SubMenu
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
              <Menu.Item key={genre.id} title={genre.title}>
                {genre.title}
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="newsfeed">NEWSFEED</Menu.Item>
      </Menu>
      <div className="signin__container" onClick={() => menuClickHandler('/authenticate')}>
        <Icon className="user-icon" type="user" />
        <Text className="signin-text" strong>
          SIGN IN
        </Text>
      </div>
    </header>
  );
};

HeaderMenu.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  menuClickHandler: PropTypes.func.isRequired,
};

export default HeaderMenu;