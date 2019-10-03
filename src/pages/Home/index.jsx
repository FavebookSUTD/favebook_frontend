// import React
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

// import local components
import Routers from './components/Routers';

// import local styling
import './index.scss';

// import Antd
import { Layout } from 'antd';

const { Content } = Layout;

class Home extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <>
        <Content className="main-content">
          <Routers />
        </Content>
      </>
    );
  }
}

export default withRouter(Home);
