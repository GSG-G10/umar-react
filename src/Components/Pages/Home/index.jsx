import { useState, useEffect } from "react";

import { GamesContext } from "../../../Context";

import { Nav } from "../../Nav";
import { GameCard } from "./GameCard";

import "./style.css";

export const Home = () => {
  const [games, setGames] = useState();

  useEffect(() => {
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
      .then((result) => setGames(result));
  }, []);
  return (
    <>
      <Nav endPoint="/favourites" endPage="Favourites" />
      {games ? (
        <GamesContext.Provider value={{ games }}>
          <div className="results">
            <GameCard />
          </div>
        </GamesContext.Provider>
      ) : (
        <h1>Loading ... </h1>
      )}
    </>
  );
};
