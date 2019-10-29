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
import { searchBooks, autocompleteBooks } from './actions';

// import selector
import { selectError, selectLoading, selectSearchResult, selectAutoResult } from './selectors';

// import lodash
import debounce from 'lodash/debounce';
import map from 'lodash/map';

// import utils
import { goto } from '@utils/goto';

// import local styling
import './index.scss';

// import Antd
import { Icon, Button, Spin, AutoComplete } from 'antd';

// Extract antd components
const { Option } = AutoComplete;

const renderOptions = options =>
  map(options, option => (
    <Option className="search-result__option" key={option.title} label={option.title}>
      <Icon className="search-result-icon" type="search" />
      {option.title}
    </Option>
  ));

class FilterBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpened: false,
      autocompleteVal: '',
    };
    const { searchBooks, autocompleteBooks } = this.props;
    this.deboucedSearchBooks = debounce(searchBooks, 500);
    this.deboucedAutoBooks = debounce(autocompleteBooks, 500);
  }

  render() {
    const { position, loading, searchResults, autoResults } = this.props;
    const { dropdownOpened, autocompleteVal } = this.state;

    return (
      <div className={`filter-bar ${position}`}>
        <AutoComplete
          className="filter-autocomplete__container"
          showArrow={false}
          filterOption={false}
          defaultActiveFirstOption={false}
          notFoundContent={
            loading && autocompleteVal ? <Spin className="filter-spining-icon" /> : null
          }
          optionLabelProp="label"
          placeholder={<Icon className="search-icon" type="search" />}
          dropdownClassName="filter-autocomplete-dropdown__container"
          onDropdownVisibleChange={open => this.setState({ dropdownOpened: open })}
          onSearch={val => {
            this.setState({ autocompleteVal: val });
            this.deboucedAutoBooks(val);
          }}
          onChange={val => {
            this.deboucedSearchBooks(val);
          }}
        >
          {renderOptions(autoResults)}
        </AutoComplete>
        <Button
          className="filter-button"
          type="primary"
          disabled={dropdownOpened}
          onClick={() => goto('/browseresults')}
        >
          FILTER
        </Button>
      </div>
    );
  }
}

FilterBar.propTypes = {
  position: PropTypes.oneOf(['left', 'center', 'right']),
  loading: PropTypes.bool.isRequired,
  autoResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchBooks: PropTypes.func.isRequired,
  autocompleteBooks: PropTypes.func.isRequired,
};

FilterBar.defaultProps = {
  position: 'center',
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
  loading: selectLoading,
  searchResults: selectSearchResult,
  autoResults: selectAutoResult,
});

const mapDispatchToProps = {
  searchBooks,
  autocompleteBooks,
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
