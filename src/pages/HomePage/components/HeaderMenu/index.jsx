// import React
import React from 'react';
import propTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Typography, Icon, Menu } from 'antd';

// Extract antd components
const { SubMenu } = Menu;
const { Text } = Typography;

const HeaderMenu = ({ menuClickHandler }) => {
  return (
    <header className="home-page-header__container">
      <Menu className="menu__container" mode="horizontal">
        <Menu.Item key="home">HOME</Menu.Item>
        <Menu.Item key="mybooks">MY BOOKS</Menu.Item>
        <SubMenu
          className="submenu__container"
          title={
            <>
              <span className="submenu-title__container">BROWSE</span>
              <Icon type="caret-down" />
            </>
          }
        >
          <Menu.Item key="option1">Option 1</Menu.Item>
          <Menu.Item key="option2">Option 2</Menu.Item>
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
  menuClickHandler: propTypes.func.isRequired,
};

export default HeaderMenu;
