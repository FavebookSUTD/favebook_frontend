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
import { setPageNum, fetchBookResults } from './actions';

// import selector
import { selectPageNum, selectBookResults } from './selectors';

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
  componentDidMount() {
    const { setPageNum, fetchBookResults } = this.props;
    fetchBookResults();
  }

  menuClickHandler = url => {
    const { history } = this.props;
    history.push(url);
  };

  onPageChange = (current, pageSize) => {
    setPageNum(current);
  };

  render() {
    const { books } = this.props;

    return (
      <Layout className="results-page__main-container">
        <FilterBar className="results-page__filter" />
        <Content className="results-page__content">
          <BookInfo books={books} />
        </Content>
        <Pagination
          className="results-page__pagination"
          onChange={this.onPageChange}
          defaultCurrent={1}
          defaultPageSize={5}
          total={books.data.length}
        />
      </Layout>
    );
  }
}

BrowseResultsPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,

  setPageNum: PropTypes.func.isRequired,
  fetchBookResults: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageNum: selectPageNum,
  books: selectBookResults,
});

const mapDispatchToProps = {
  setPageNum,
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
