// import React
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router/immutable';
import configureStore from './store';
import history from '@utils/history';
import StoreContext from '@utils/storeContext';

// import local styling
import './App.scss';

// import local components
import HomePage from '@pages/HomePage';

const initialState = {};
const store = configureStore(initialState, history);

class App extends PureComponent {
  render() {
    return (
      <div id="App">
        <Provider store={store}>
          <StoreContext.Provider value={store}>
            <ConnectedRouter history={history}>
              <HomePage />
            </ConnectedRouter>
          </StoreContext.Provider>
        </Provider>
      </div>
    );
  }
}

export default withRouter(App);
