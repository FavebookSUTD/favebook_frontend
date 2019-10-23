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
  map(options, option => (
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
    };
    const { searchBooks } = this.props;
    this.deboucedSearchBooks = debounce(searchBooks, 500);
  }

  render() {
    const { position, fetching, searchResults } = this.props;
    const { dropdownOpened, searchVal } = this.state;

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
          dataSource={searchResults}
          onSearch={val => {
            this.setState({ searchVal: val });
            this.deboucedSearchBooks(val);
          }}
        >
          {renderOptions(searchResults)}
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
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchBooks: PropTypes.func.isRequired,
};

FilterBar.defaultProps = {
  position: 'center',
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
