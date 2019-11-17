import React, { Component } from "react";
import firebase from "firebase";
import PresentState from "./components/PresentState";

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
    return <PresentState />;
  }
}

export default App;
