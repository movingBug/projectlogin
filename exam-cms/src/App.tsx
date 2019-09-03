import * as React from 'react';
import './App.css';
import Routers from './router/index';
import { Provider } from 'mobx-react';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <Routers />
      </Provider>
    );
  }
}

export default App;
