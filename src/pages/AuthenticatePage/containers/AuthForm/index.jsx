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

// import lodash
import isEqual from 'lodash/isEqual';

// import local styling
import './index.scss';

// import Antd
import { Form, Input, Icon, Button, Divider } from 'antd';

class Auth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
  }

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmDirty } = this.state;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { form, type } = this.props;
    const { getFieldDecorator } = form;
    const isSignup = isEqual(type, 'signup');

    return (
      <div className="auth-form__container">
        <Form className="form__container" hideRequiredMark>
          {isSignup ? (
            <Form.Item label="NAME">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your username!',
                    whitespace: true,
                  },
                ],
              })(
                <Input
                  className="form-input"
                  prefix={<Icon className="form-icon" type="user" />}
                />,
              )}
            </Form.Item>
          ) : null}
          <Form.Item label="YOUR E-MAIL">
            {getFieldDecorator('email', {
              rules: [{ required: true, type: 'email', message: 'Please input your email!' }],
            })(
              <Input
                className="form-input"
                prefix={<Icon className="form-icon" type="mail" theme="filled" />}
              />,
            )}
          </Form.Item>
          <Form.Item label="PASSWORD">
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your password!' },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(
              <Input
                className="form-input password-input"
                prefix={<Icon className="form-icon" type="lock" theme="filled" />}
                type="password"
              />,
            )}
          </Form.Item>
          {isSignup ? (
            <Form.Item label="CONFIRM PASSWORD">
              {getFieldDecorator('confirm', {
                rules: [
                  { required: true, message: 'Please confirm your password!' },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(
                <Input
                  className="form-input password-input"
                  prefix={<Icon className="form-icon" type="lock" theme="filled" />}
                  type="password"
                  onBlur={this.handleConfirmBlur}
                />,
              )}
            </Form.Item>
          ) : null}
        </Form>
        <Button className="form-submit-btn" block type="primary">
          {isSignup ? 'SIGNUP' : 'SIGN IN'}
        </Button>
        <Divider className="form-divider">OR</Divider>
        <div className="social-btn-group">
          <Button className="social-btn" type="primary" shape="circle">
            <Icon type="facebook" theme="filled" />
          </Button>
          <Button className="social-btn" type="primary" shape="circle" icon="google" />
          <Button className="social-btn" type="primary" shape="circle" icon="twitter" />
        </div>
      </div>
    );
  }
}

Auth.propTypes = {
  type: PropTypes.oneOf(['signin', 'signup']).isRequired,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

const withReducer = injectReducer({ key: 'AuthForm', reducer });
const withSaga = injectSaga({ key: 'AuthForm', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const AuthForm = Form.create()(Auth);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthForm);
