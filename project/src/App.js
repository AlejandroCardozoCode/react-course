import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import User from "./user/pages/Users";
import NewPlace from "./places/pages/place";
import MainNavigation from "./shared/components/navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>

          <Route path="/places/new" exact>
            <NewPlace />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
