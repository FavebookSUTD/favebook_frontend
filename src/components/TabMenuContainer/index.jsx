// import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import lodash
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';

// import local styling
import './index.scss';

// import Antd
import { Menu, Empty } from 'antd';

const renderTabMenuContent = (menuObj, selectedMenu) => {
  const menu = find(menuObj, menu => isEqual(menu.title, selectedMenu));
  return menu.reactNode ? menu.reactNode : <Empty className="tab-menu__empty-placeholder" />;
};

const renderTabMenu = (menuObj, setSelectedMenu) => (
  <Menu
    className="tab-menu"
    mode="horizontal"
    defaultSelectedKeys={[menuObj[0].title]}
    onSelect={({ selectedKeys }) => {
      setSelectedMenu(selectedKeys[0]);
    }}
  >
    {map(menuObj, menu => (
      <Menu.Item key={menu.title}>{menu.title}</Menu.Item>
    ))}
  </Menu>
);

const TabMenuContainer = ({ menuObj, menuPosition, selectedMenu, setMenuHandler, autoFit }) => {
  const [internalSelectedMenu, setInternalSelectedMenu] = useState(menuObj[0].title);

  return (
    <div
      className={`tab-menu__container ${
        autoFit ? 'tab-menu__autofit-container' : ''
      } ${menuPosition}`}
    >
      {!isEmpty(menuObj) ? (
        <>
          {renderTabMenu(menuObj, setMenuHandler || setInternalSelectedMenu)}
          <div
            className={`tab-menu__content-container ${
              autoFit ? 'tab-menu__autofit-content-container' : ''
            }`}
          >
            {renderTabMenuContent(menuObj, selectedMenu || internalSelectedMenu)}
          </div>
        </>
      ) : null}
    </div>
  );
};

TabMenuContainer.propTypes = {
  menuObj: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      reactNode: PropTypes.element,
    }),
  ).isRequired,
  menuPosition: PropTypes.oneOf(['center', 'left', 'right']),
  selectedMenu: PropTypes.string,
  setMenuHandler: PropTypes.func,
  autoFit: PropTypes.bool,
};

TabMenuContainer.defaultProps = {
  menuPosition: 'center',
  selectedMenu: '',
  setMenuHandler: () => {},
  autoFit: false,
};

export default TabMenuContainer;
