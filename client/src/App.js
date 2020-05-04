import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Components/Navbarr";
import Landingpage from "./Components/Landingpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarr />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Landingpage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
