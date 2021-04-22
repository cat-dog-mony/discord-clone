import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "components/pages/MainPage";
import AuthPage from "components/pages/AuthPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
