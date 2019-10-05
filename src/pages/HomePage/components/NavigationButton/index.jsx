// import React
import React from 'react';
import PropTypes from 'prop-types';

// import local styling
import './index.scss';

// import Antd
import { Button } from 'antd';

const NavigationButton = ({ left, onClickHandler }) => {
  return (
    <div className="navigation-btn__container">
      <Button
        className="navigation-btn"
        type="primary"
        shape="circle"
        icon={left ? 'caret-left' : 'caret-right'}
        onClick={onClickHandler}
      />
    </div>
  );
};

NavigationButton.propTypes = {
  left: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
};

NavigationButton.defaultProps = {
  left: true,
};

export default NavigationButton;
