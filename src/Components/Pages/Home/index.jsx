import { useContext } from "react";

import { GamesContext } from "../../../Context";

import { Nav } from "../../Nav";
import { GameCard } from "./GameCard";

import "./style.css";

export const Home = () => {
  const { games } = useContext(GamesContext);
  return (
    <>
      <Nav endPoint="/favourites" endPage="Favourites" />
      {games ? (
        <div className="results">
          <GameCard />
        </div>
      ) : (
        <img src="https://i.stack.imgur.com/MEBIB.gif"></img>
      )}
    </>
  );
};
