import { useContext } from "react";

import { GamesContext } from "../../../Context";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const GameCard = () => {
  const { games } = useContext(GamesContext);

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
            {game.title} {game.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {game.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <button
        style={{
          backgroundColor: "transparent",
          width: "50%",
          height: "3vh",
          border: "1px solid black",
          cursor: "pointer",
          fontSize: "1rem",
          marginLeft: "1vw",
          marginBottom: "1vh",
        }}
      >
        Add To Favourites
      </button>
    </Card>
  ));
};
