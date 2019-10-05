// import React
import React from 'react';

// import local styling
import './index.scss';

// import Antd
import { Icon, Button } from 'antd';

const FilterBar = () => {
  return (
    <div className="home-page__filter-bar">
      <div className="filter-input__container">
        <Icon className="search-icon" type="search" />
        <input className="filter-input" />
      </div>
      <Button className="filter-button" type="primary" onClick={() => console.log('Filter')}>
        FILTER
      </Button>
    </div>
  );
};

FilterBar.propTypes = {};

export default FilterBar;
