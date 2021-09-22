import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./Components/Pages/Home";
import { Favourites } from "./Components/Pages/Favourites";

import { GamesContext } from "./Context";

export const App = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    let cleanUp = true;
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "baa590cee7msh0007ba1e5a595c8p182dd2jsn73f820bf50ee",
        },
      }
    )
      .then((result) => result.json())
      .then((result) => {
        if (cleanUp) setGames(result);
      });
    return () => {
      cleanUp = false;
    };
  }, []);

  return (
    <GamesContext.Provider value={{ games }}>
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
    </GamesContext.Provider>
  );
};
