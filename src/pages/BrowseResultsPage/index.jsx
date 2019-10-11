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
import { fetchBookResults } from './actions';

// import selector
import { selectPageSize, selectTotal, selectBookResults } from './selectors';

// import lodash
import isEmpty from 'lodash/isEmpty';

// import local components
import BookInfo from './components/BookInfo';
import FilterBar from '@containers/FilterBar';

// import local styling
import './index.scss';

// import Antd
import { Layout, Pagination } from 'antd';

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
    const { pageSize, fetchBookResults } = this.props;
    const { pageNum } = this.state;
    fetchBookResults(pageNum, pageSize);
  }

  onPageChange = (current, pageSize) => {
    const { fetchBookResults } = this.props;
    this.setState({
      pageNum: current,
    });
    fetchBookResults(current, pageSize);
  };

  render() {
    const { pageSize, total, books } = this.props;
    const { pageNum } = this.state;
    return (
      <Layout className="results-page__main-container">
        <FilterBar className="results-page__filter" />
        <Content className="results-page__content">
          {!isEmpty(books) ? <BookInfo books={books[pageNum]} /> : null}
        </Content>
        <Pagination
          className="results-page__pagination"
          current={pageNum}
          pageSize={pageSize}
          total={total}
          onChange={this.onPageChange}
        />
      </Layout>
    );
  }
}

BrowseResultsPage.propTypes = {
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  books: PropTypes.shape({}).isRequired,

  fetchBookResults: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageSize: selectPageSize,
  total: selectTotal,
  books: selectBookResults,
});

const mapDispatchToProps = {
  fetchBookResults,
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
