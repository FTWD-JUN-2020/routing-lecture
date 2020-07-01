import React from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Account from "./Account";
// <Link> - this will change the URL but it won't refresh the page
// <Route> - makes sure to render the correct component depending on the URL
// <Switch> - depending on the url it will match you to the correct <Route>

function App() {
  const showLinks = () => {
    let users = ["Niko", "Val", "Lorel", "Andrew"];
    let arr = users.map((user) => {
      return (
        <li>
          <Link to={`/account/${user}`}>{user} Account</Link>
        </li>
      );
    });
    return arr;
  };

  return (
    <div className="App">
      <h1>Welcome to Routing</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/account/userName">Account</Link>
        </li>
        {showLinks()}
      </ul>
      {/* /userName */}
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/works" render={() => <Works />} />
        <Route
          exact
          path="/account/:userName"
          render={(props) => <Account {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
