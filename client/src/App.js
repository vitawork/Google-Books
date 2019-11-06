import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Nav home />
        </Route>
        <Route exact path="/saved">
          <Nav saved />
        </Route>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact component={Search} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
