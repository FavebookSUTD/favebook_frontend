// import React
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import reducer and saga
import reducer from './reducers';
import saga from './saga';
import injectReducer from '@utils/injectReducer';
import injectSaga from '@utils/injectSaga';

// import actions
import {
  loginFromStorage,
  fetchRecommendBookList,
  fetchBestsellBookList,
  searchBooks,
} from './actions';

// import selector
import {
  selectLoggedIn,
  selectLoading,
  selectError,
  selectFetching,
  selectRecommendBooks,
  selectBestsellBooks,
  selectSearchResult,
} from './selectors';

// import local components
import HeaderMenu from './components/HeaderMenu';
import FilterBar from './components/FilterBar';
import BookDisplay from './components/BookCarousel';

// import local styling
import './index.scss';

// import Antd
import { Layout, Typography } from 'antd';

// Extract antd components
const { Content } = Layout;
const { Title } = Typography;

class HomePage extends PureComponent {
  componentDidMount() {
    const { loginFromStorage, fetchRecommendBookList, fetchBestsellBookList } = this.props;
    loginFromStorage();
    fetchRecommendBookList();
    fetchBestsellBookList();
  }

  menuClickHandler = url => {
    const { history } = this.props;
    history.push(url);
  };

  render() {
    const { fetching, recommendBooks, bestsellBooks, searchResults, searchBooks } = this.props;

    return (
      <div className="home-page__main-container">
        <Layout className="home-page__container">
          <HeaderMenu menuClickHandler={this.menuClickHandler} />
          <Content className="home-page__content">
            <Title className="home-page-greeting__header">Good Morning, Friend</Title>
            <FilterBar fetching={fetching} options={searchResults} searchHandler={searchBooks} />
            <BookDisplay title="just for you" rows={1} books={recommendBooks} />
            <BookDisplay title="best sellers" rows={2} books={bestsellBooks} />
          </Content>
        </Layout>
      </div>
    );
  }
}

HomePage.propTypes = {
  fetching: PropTypes.bool.isRequired,
  recommendBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  bestsellBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,

  loginFromStorage: PropTypes.func.isRequired,
  fetchRecommendBookList: PropTypes.func.isRequired,
  fetchBestsellBookList: PropTypes.func.isRequired,
  searchBooks: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn,
  loading: selectLoading,
  error: selectError,
  fetching: selectFetching,
  recommendBooks: selectRecommendBooks,
  bestsellBooks: selectBestsellBooks,
  searchResults: selectSearchResult,
});

const mapDispatchToProps = {
  loginFromStorage,
  fetchRecommendBookList,
  fetchBestsellBookList,
  searchBooks,
};

const withReducer = injectReducer({ key: 'HomePage', reducer });
const withSaga = injectSaga({ key: 'HomePage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withRouter,
  withConnect,
)(HomePage);
