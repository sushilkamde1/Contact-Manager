import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "../Layout";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NotFound from "./NotFound";
import AddUser from "../user/AddUser";
import EditUser from "../user/EditUser";
import User from "../user/User";

const App = () => {
  return (
    <>
      <div container>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/users/add" component={AddUser} />
              <Route exact path="/users/edit/:id" component={EditUser} />
              <Route exact path="/users/:id" component={User} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
