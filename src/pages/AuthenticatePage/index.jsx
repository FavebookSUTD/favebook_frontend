// import React
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import reducer and saga
import reducer from './reducers';
import saga from './saga';
import injectReducer from '@utils/injectReducer';
import injectSaga from '@utils/injectSaga';

// import local components
import AuthForm from './containers/AuthForm';

// import local styling
import './index.scss';

// import Antd
import { Typography, Tabs } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

class AuthenticatePage extends PureComponent {
  render() {
    return (
      <div className="authenticate-page__main-container">
        <div className="authenticate-page__content">
          <div className="app-name__container">
            <Title className="app-name">Favebook</Title>
          </div>
          <div className="authenticate-page__form-container">
            <Tabs className="form-tab__container">
              <TabPane className="form-pane__container" tab="SIGN IN" key="signin">
                <AuthForm type="signin" />
              </TabPane>
              <TabPane className="form-pane__container" tab="SIGN UP" key="signup">
                <AuthForm type="signup" />
              </TabPane>
            </Tabs>
          </div>
          <div className="motivation-slogan__container">
            <Paragraph className="motivation-slogan">
              “A reader lives a thousand lives before he dies . . . The man who never reads lives
              only one.”
            </Paragraph>
            <Text className="author">– George R.R. Martin</Text>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

const withReducer = injectReducer({ key: 'AuthenticatePage', reducer });
const withSaga = injectSaga({ key: 'AuthenticatePage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withRouter,
  withConnect,
)(AuthenticatePage);
