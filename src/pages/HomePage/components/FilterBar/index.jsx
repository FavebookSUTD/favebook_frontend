// import React
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// import lodash
import debounce from 'lodash/debounce';
import map from 'lodash/map';

// import local styling
import './index.scss';

// import Antd
import { Icon, Button, Select, Spin } from 'antd';

// Extract antd components
const { Option } = Select;

const renderOptions = options =>
  map(options, option => (
    <Option className="search-result__option" key={option.email} label={option.email}>
      <Icon className="search-result-icon" type="search" />
      {option.email}
    </Option>
  ));

const FilterBar = ({ fetching, options, searchHandler }) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const deboucedSearchHandler = useCallback(debounce(searchHandler, 300), []);

  return (
    <div className="home-page__filter-bar">
      <Select
        className="filter-select__container filter-select__container-active"
        showSearch
        showArrow={false}
        filterOption={false}
        defaultActiveFirstOption={false}
        loading={fetching}
        notFoundContent={fetching && searchVal ? <Spin className="filter-spining-icon" /> : null}
        optionLabelProp="label"
        placeholder={<Icon className="search-icon" type="search" />}
        dropdownClassName="filter-select-dropdown__container"
        onDropdownVisibleChange={open => setDropdownOpened(open)}
        onSearch={val => {
          setSearchVal(val);
          deboucedSearchHandler(val);
        }}
      >
        {renderOptions(options)}
      </Select>
      <Button
        className="filter-button"
        type="primary"
        disabled={dropdownOpened}
        onClick={() => console.log('Filter')}
      >
        FILTER
      </Button>
    </div>
  );
};

FilterBar.propTypes = {
  fetching: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default FilterBar;
