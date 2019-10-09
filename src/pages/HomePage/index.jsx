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
  fetchGenres,
} from './actions';

// import selector
import {
  selectLoggedIn,
  selectLoading,
  selectError,
  selectRecommendBooks,
  selectBestsellBooks,
  selectGenres,
} from './selectors';

// import local components
import HeaderMenu from './components/HeaderMenu';
import FilterBar from '@containers/FilterBar';
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
    const {
      loginFromStorage,
      fetchRecommendBookList,
      fetchBestsellBookList,
      fetchGenres,
    } = this.props;
    loginFromStorage();
    fetchRecommendBookList();
    fetchBestsellBookList();
    fetchGenres();
  }

  menuClickHandler = url => {
    const { history } = this.props;
    history.push(url);
  };

  render() {
    const { recommendBooks, bestsellBooks, genres } = this.props;

    return (
      <div className="home-page__main-container">
        <Layout className="home-page__container">
          <HeaderMenu genres={genres} menuClickHandler={this.menuClickHandler} />
          <Content className="home-page__content">
            <Title className="home-page-greeting__header">Good Morning, Friend</Title>
            <FilterBar />
            <BookDisplay title="just for you" rows={1} books={recommendBooks} />
            <BookDisplay title="best sellers" rows={1} books={bestsellBooks} />
          </Content>
        </Layout>
      </div>
    );
  }
}

HomePage.propTypes = {
  recommendBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  bestsellBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,

  loginFromStorage: PropTypes.func.isRequired,
  fetchRecommendBookList: PropTypes.func.isRequired,
  fetchBestsellBookList: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn,
  loading: selectLoading,
  error: selectError,
  recommendBooks: selectRecommendBooks,
  bestsellBooks: selectBestsellBooks,
  genres: selectGenres,
});

const mapDispatchToProps = {
  loginFromStorage,
  fetchRecommendBookList,
  fetchBestsellBookList,
  fetchGenres,
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
