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
          popupClassName="home-page-submenu__container"
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
            <Menu.Item key="art">Art</Menu.Item>
            <Menu.Item key="comics">Comics</Menu.Item>
            <Menu.Item key="historical-fiction">Historical Fiction</Menu.Item>
            <Menu.Item key="psychology">Psychology</Menu.Item>
            <Menu.Item key="thriller">Thriller</Menu.Item>
            <Menu.Item key="biography">Biography</Menu.Item>
            <Menu.Item key="cookbooks">Cookbooks</Menu.Item>
            <Menu.Item key="history">History</Menu.Item>
            <Menu.Item key="romance">Romance</Menu.Item>
            <Menu.Item key="travel">Travel</Menu.Item>
            <Menu.Item key="business">Business</Menu.Item>
            <Menu.Item key="ebooks">Ebooks</Menu.Item>
            <Menu.Item key="horror">Hooror</Menu.Item>
            <Menu.Item key="science">Science</Menu.Item>
            <Menu.Item key="young-adult">Young Adult</Menu.Item>
            <Menu.Item key="children">Children's</Menu.Item>
            <Menu.Item key="fantasy">Fantasy</Menu.Item>
            <Menu.Item key="memoir">Memoir</Menu.Item>
            <Menu.Item key="science-fiction">Science Fiction</Menu.Item>
            <Menu.Item key="christian">Christian</Menu.Item>
            <Menu.Item key="fiction">Fiction</Menu.Item>
            <Menu.Item key="music">Music</Menu.Item>
            <Menu.Item key="self-help">Self Help</Menu.Item>
            <Menu.Item key="classic">Classic</Menu.Item>
            <Menu.Item key="graphic-novels">Graphic Novels</Menu.Item>
            <Menu.Item key="mystery">Mystery</Menu.Item>
            <Menu.Item key="sports">Sports</Menu.Item>
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
  menuClickHandler: propTypes.func.isRequired,
};

export default HeaderMenu;
