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
import {} from './actions';

// import selector
import {} from './selectors';

// import local components
import FilterBar from '@containers/FilterBar';
import BookCover from './components/BookCover';
import BookDescriptions from './components/BookDescriptions';

// import local styling
import './index.scss';

// import Antd
import { Row, Col } from 'antd';

// Extract antd components

class BookDetailsPage extends PureComponent {
  componentDidMount() {}

  render() {
    const {} = this.props;

    return (
      <div className="book-details-page__main-container">
        <FilterBar position="right" />
        <Row className="book-details-page__content-container">
          <Col className="book-details-page__misc-details-container" span={8}>
            <BookCover />
          </Col>
          <Col className="book-details-page__main-details-container" span={16}>
            <BookDescriptions />
          </Col>
        </Row>
      </div>
    );
  }
}

BookDetailsPage.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

const withReducer = injectReducer({ key: 'BookDetailsPage', reducer });
const withSaga = injectSaga({ key: 'BookDetailsPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BookDetailsPage);
