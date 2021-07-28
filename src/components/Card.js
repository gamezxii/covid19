import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { numberWithCommas } from "../utils";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 227,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function ImgMediaCard({ title, number, color }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ background: color, color: "#fff" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {numberWithCommas(number)}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
