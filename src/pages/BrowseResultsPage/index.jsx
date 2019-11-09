// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import reducer and saga
import reducer from './reducers';
import saga from './saga';
import injectReducer from '@utils/core/injectReducer';
import injectSaga from '@utils/core/injectSaga';

// import actions

// import selector
import { selectSearchResults, selectAllResults } from '@containers/FilterBar/selectors';
import { selectLoading } from './selectors';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import local components
import BookInfo from '@components/BookInfo';
import FilterBar from '@containers/FilterBar';

// import local styling
import './index.scss';

// import Antd
import { Layout, Skeleton, Empty } from 'antd';

// Extract antd components
const { Content } = Layout;

class BrowseResultsPage extends PureComponent {
  render() {
    const { loading, searchResults, browseResult } = this.props;

    return (
      <Content className="results-page__main-container">
        <FilterBar position="center" />
        <div className="results-page__content">
          <Skeleton active loading={loading}>
            {!isEmpty(searchResults) && !loading ? <BookInfo books={browseResult} /> : <Empty />}
          </Skeleton>
        </div>
      </Content>
    );
  }
}

BrowseResultsPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  browseResult: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  searchResults: selectSearchResults,
  browseResult: selectAllResults,
});

const mapDispatchToProps = {};

const withReducer = injectReducer({ key: 'BrowseResultsPage', reducer });
const withSaga = injectSaga({ key: 'BrowseResultsPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
  withReducer,
  withSaga,
)(BrowseResultsPage);
