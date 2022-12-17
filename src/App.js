import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./presentation/Common/Routes";
import Login from "./presentation/Login"
//component imports

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.LOGIN} component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
