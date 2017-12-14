import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./css/App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Login } from "./screens";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/*<Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={() => <Redirect to="/login" />} />*/}
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
