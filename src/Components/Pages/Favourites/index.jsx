import { useContext } from "react";
import { Nav } from "../../Nav";

import { GamesContext } from "../../../Context";

import FavouritesCard from "./FavouritesCard";

export const Favourites = () => {
  const { games } = useContext(GamesContext);
  const favourites = localStorage.getItem("game");
  const result =
    favourites && games
      ? games.filter((game) => favourites.includes(game.id))
      : [];
  return (
    <>
      <Nav endPoint="/" endPage="Home" />
      {result.length > 0 ? (
        <div className="results">
          <FavouritesCard result={result} />
        </div>
      ) : games ? (
        <h1>There is No Favourites to show</h1>
      ) : (
        <img src="https://i.stack.imgur.com/MEBIB.gif"></img>
      )}
    </>
  );
};
