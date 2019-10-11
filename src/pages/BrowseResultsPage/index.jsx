// import React
import React, { PureComponent } from 'react';
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
import { fetchPageNum, fetchBookResults } from './actions';

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
  // ComponentDidMount here?
  componentDidMount() {
    const { fetchPageNum, fetchBookResults } = this.props;
    fetchBookResults();
    fetchPageNum();
  }

  menuClickHandler = url => {
    const { history } = this.props;
    history.push(url);
  };

  onPageChange = (current, pageSize) => {
    this.setState(() => {
      return {
        pageNum: current,
      };
    });
  };

  render() {
    const { books, pageNum } = this.props;

    return (
      <Layout className="results-page__main-container">
        <FilterBar className="results-page__filter" />
        <Content className="results-page__content">
          <BookInfo books={books.data} pageNum={pageNum} />
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

const mapStateToProps = createStructuredSelector({
  pageNum: selectPageNum,
  books: selectBookResults,
});

const mapDispatchToProps = {
  fetchPageNum,
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
