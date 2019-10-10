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
import { fetchRecommendBookList, fetchBestsellBookList } from './actions';

// import selector
import { selectLoading, selectError, selectRecommendBooks, selectBestsellBooks } from './selectors';

// import local components
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
    const { fetchRecommendBookList, fetchBestsellBookList } = this.props;
    fetchRecommendBookList();
    fetchBestsellBookList();
  }

  render() {
    const { recommendBooks, bestsellBooks } = this.props;

    return (
      <Content className="home-page__container">
        <Title className="home-page-greeting__header">Good Morning, Friend</Title>
        <FilterBar />
        <BookDisplay title="just for you" rows={1} books={recommendBooks} />
        <BookDisplay title="best sellers" rows={1} books={bestsellBooks} />
      </Content>
    );
  }
}

HomePage.propTypes = {
  recommendBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
  bestsellBooks: PropTypes.arrayOf(PropTypes.object).isRequired,

  fetchRecommendBookList: PropTypes.func.isRequired,
  fetchBestsellBookList: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  error: selectError,
  recommendBooks: selectRecommendBooks,
  bestsellBooks: selectBestsellBooks,
});

const mapDispatchToProps = {
  fetchRecommendBookList,
  fetchBestsellBookList,
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
  withConnect,
)(HomePage);
