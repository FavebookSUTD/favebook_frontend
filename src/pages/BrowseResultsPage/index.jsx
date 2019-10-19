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
import { fetchNextPage } from './actions';

// import selector
import { selectLoading, selectPageSize, selectTotal, selectNextPage } from './selectors';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import local components
import BookInfo from '@components/BookInfo';
import FilterBar from '@containers/FilterBar';

// import local styling
import './index.scss';

// import Antd
import { Layout, Pagination, Skeleton, Empty } from 'antd';

// Extract antd components
const { Content } = Layout;

class BrowseResultsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
    };
  }

  componentDidMount() {
    const { pageSize, fetchNextPage } = this.props;
    const { pageNum } = this.state;
    fetchNextPage(pageNum, pageSize);
  }

  onPageChange = (current, pageSize) => {
    const { fetchNextPage } = this.props;
    this.setState({
      pageNum: current,
    });
    fetchNextPage(current, pageSize);
  };

  render() {
    const { loading, pageSize, total, books } = this.props;
    const { pageNum } = this.state;

    return (
      <Content className="results-page__main-container">
        <FilterBar position="right" />
        <div className="results-page__content">
          <Skeleton active loading={loading}>
            {!isEmpty(books) && !loading ? <BookInfo books={books[pageNum]} /> : <Empty />}
          </Skeleton>
        </div>
        <Pagination
          className="results-page__pagination"
          hideOnSinglePage
          current={pageNum}
          pageSize={pageSize}
          total={total}
          onChange={this.onPageChange}
        />
      </Content>
    );
  }
}

BrowseResultsPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  books: PropTypes.shape({}).isRequired,

  fetchNextPage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  pageSize: selectPageSize,
  total: selectTotal,
  books: selectNextPage,
});

const mapDispatchToProps = {
  fetchNextPage,
};

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
