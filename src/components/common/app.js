import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MainRoute } from '../../routes'; 
import  store  from '../../config/store';
import { hot } from 'react-hot-loader'; 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRoute />
      </Provider>
    );
  }
}

export default hot(module)(App);
