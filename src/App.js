import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAOfitbji8YNcHY8ezWldjNPZAO7vO1FT8",
      authDomain: "manager-7206b.firebaseapp.com",
      databaseURL: "https://manager-7206b.firebaseio.com",
      projectId: "manager-7206b",
      storageBucket: "manager-7206b.appspot.com",
      messagingSenderId: "516593635194"
    };
    firebase.initializeApp(config);

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;