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

// import local styling
import './index.scss';

// import Antd

// Extract antd components

class BookDetailsPage extends PureComponent {
  componentDidMount() {}

  render() {
    const {} = this.props;

    return (
      <div className="book-details__main-container">
        <FilterBar position="right" />
        Book details page
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
