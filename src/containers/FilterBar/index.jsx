// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import reducer and saga
import reducer from './reducers';
import saga from './saga';
import injectReducer from '@utils/core/injectReducer';
import injectSaga from '@utils/core/injectSaga';

// import actions
import { searchBooks } from './actions';

// import selector
import { selectError, selectFetching, selectSearchResult } from './selectors';

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

class FilterBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpened: false,
      searchVal: '',
    };
    const { searchBooks } = this.props;
    this.deboucedSearchBooks = debounce(searchBooks, 500);
  }

  render() {
    const { fetching, searchResults } = this.props;
    const { dropdownOpened, searchVal } = this.state;

    return (
      <div className="filter-bar">
        <Select
          className="filter-select__container"
          showSearch
          showArrow={false}
          filterOption={false}
          defaultActiveFirstOption={false}
          notFoundContent={fetching && searchVal ? <Spin className="filter-spining-icon" /> : null}
          optionLabelProp="label"
          placeholder={<Icon className="search-icon" type="search" />}
          dropdownClassName="filter-select-dropdown__container"
          onDropdownVisibleChange={open => this.setState({ dropdownOpened: open })}
          onSearch={val => {
            this.setState({ searchVal: val });
            this.deboucedSearchBooks(val);
          }}
        >
          {renderOptions(searchResults)}
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
  }
}

FilterBar.propTypes = {
  fetching: PropTypes.bool.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchBooks: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
  fetching: selectFetching,
  searchResults: selectSearchResult,
});

const mapDispatchToProps = {
  searchBooks,
};

const withReducer = injectReducer({ key: 'FilterBar', reducer });
const withSaga = injectSaga({ key: 'FilterBar', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FilterBar);
