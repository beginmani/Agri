import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyARP8yOf2-gGU_yJak51IFNceYmhYG5W0U",
      authDomain: "agritos-9163a.firebaseapp.com",
      databaseURL: "https://agritos-9163a.firebaseio.com",
      projectId: "agritos-9163a",
      storageBucket: "agritos-9163a.appspot.com",
      messagingSenderId: "989253870834"
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
