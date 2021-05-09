import React from "react";
import "./App.scss";

import UserAccount from "./pages/user1/user1-page.jsx";
import HomePage from "./pages/homepage/homepage.jsx";
import PageNotfound from './pages/page-not-found/page-notfound.jsx'
import Header from './pages/header/header'

import { Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
          <Switch>
            <Route  exact path="/" component={HomePage} />
            <Route  path='/@user-links/:id' component={UserAccount}/>
            <Route  component={PageNotfound} />
          </Switch>
      </div>
    );
  }
}

export default App;
