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
import TabMenuContainer from '@components/TabMenuContainer';

// import local styling
import './index.scss';

// import Antd
import { Layout, Typography } from 'antd';

// Extract antd components
const { Content } = Layout;
const { Title } = Typography;

class MyBookPage extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Content className="my-book-page__container">
        <TabMenuContainer />
      </Content>
    );
  }
}

MyBookPage.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

const withReducer = injectReducer({ key: 'MyBookPage', reducer });
const withSaga = injectSaga({ key: 'MyBookPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyBookPage);
