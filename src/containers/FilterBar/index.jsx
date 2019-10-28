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
import {
  selectError,
  selectFetching,
  selectResult,
} from './selectors';

// import lodash
import debounce from 'lodash/debounce';
import map from 'lodash/map';
import slice from 'lodash/slice';

// import utils
import { goto } from '@utils/goto';

// import local styling
import './index.scss';

// import Antd
import { Icon, Button, Spin, AutoComplete, Typography } from 'antd';

// Extract antd components
const { Option } = AutoComplete;
const { Text } = Typography;

const renderOptions = options =>
  map(options.data, option => (
    <Option className="search-result__option" key={option.title} label={option.title}>
      <Icon className="search-result-icon" type="search" />
      <img className="book-cover-img" src={option.imgURL} alt="Book" />
      <div className="search-result-info">
        {option.title}
        <br />
        <Text className="search-result-info-author">{option.author}</Text>
      </div>
    </Option>
  ));

class FilterBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpened: false,
      searchVal: '',
      autocompleteVal: '',
    };
    const { searchBooks, autocompleteBooks } = this.props;
    this.deboucedSearchBooks = debounce(searchBooks, 500);
    this.deboucedAutoBooks = debounce(autocompleteBooks, 500);
  }

  render() {
    const { position, fetching, results } = this.props;
    const { autocomplete, search } = results;
    const autocompleteResults = autocomplete;
    const searchResults = search;
    const { dropdownOpened, searchVal, autocompleteVal } = this.state;
    console.log(searchResults);
    return (
      <div className={`filter-bar ${position}`}>
        <AutoComplete
          className="filter-autocomplete__container"
          showArrow={false}
          filterOption={false}
          defaultActiveFirstOption={false}
          notFoundContent={fetching && searchVal ? <Spin className="filter-spining-icon" /> : null}
          optionLabelProp="label"
          placeholder={<Icon className="search-icon" type="search" />}
          dropdownClassName="filter-autocomplete-dropdown__container"
          onDropdownVisibleChange={open => this.setState({ dropdownOpened: open })}
          onSearch={val => {
            this.setState({ searchVal: val });
            this.deboucedSearchBooks(val);
          }}
          onChange={val => {
            this.setState({ autocompleteVal: val });
            this.deboucedAutoBooks(val);
          }}
        >
          {renderOptions(autocompleteResults)}
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
  fetching: PropTypes.bool.isRequired,
  results: PropTypes.shape({
    search: PropTypes.arrayOf(PropTypes.object).isRequired,
    autocomplete: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  searchBooks: PropTypes.func.isRequired,
  autocompleteBooks: PropTypes.func.isRequired,
};

FilterBar.defaultProps = {
  position: 'center',
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
  fetching: selectFetching,
  results: selectResult,
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
