import { useContext } from "react";

import { GamesContext } from "../../../Context";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const GameCard = () => {
  const { games } = useContext(GamesContext);

  const addLocal = (id) => {
    let dataArray = [];
    const dataObject = id;
    let oldData = JSON.parse(localStorage.getItem("game"));

    if (oldData !== null) {
      oldData.push(dataObject);
      localStorage.setItem("game", JSON.stringify(oldData));
    } else {
      dataArray.push(dataObject);
      localStorage.setItem("game", JSON.stringify(dataArray));
    }
  };

  return games.map((game) => (
    <Card key={game.id} sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={game.thumbnail}
          alt="thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <button
        onClick={() => addLocal(game.id)}
        style={{
          width: "50%",
          height: "3vh",
          cursor: "pointer",
          fontSize: "1rem",
          marginLeft: "1vw",
          marginBottom: "1vh",
          border: "1px solid black",
          backgroundColor: "transparent",
        }}
      >
        Add To Favourites
      </button>
    </Card>
  ));
};
