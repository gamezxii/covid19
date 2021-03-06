import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { numberWithCommas } from "../utils";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
  })
);

export default function ImgMediaCard({ title, number, color }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ background: color, color: "#fff" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {numberWithCommas(number)}
        </Typography>
        <Typography gutterBottom variant="body2" >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
