import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Components/Pages/Home";
import { Favourites } from "./Components/Pages/Favourites";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/favourites">
          <Favourites />
        </Route>
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
};
