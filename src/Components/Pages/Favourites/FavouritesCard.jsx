import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function FavouritesCard({ result }) {
  return result.map((fav) => (
    <Card key={fav.id} sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={fav.thumbnail}
          alt="thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fav.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {fav.short_description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
}
