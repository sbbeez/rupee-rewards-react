import React, { Component } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/App.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Login, SignUp, Base, UserDetails } from "./screens";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/dashboard" component={Base} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/" component={() => <Redirect to="/login" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
