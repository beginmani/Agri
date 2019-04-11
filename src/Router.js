import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import PresentState from "./components/PresentState";
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            //rightTitle="LogOut"
            key="presentstate"
            component={PresentState}
            title="Current State"
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
