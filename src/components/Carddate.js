import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default function ImgMediaCard({ date }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ background: "#3f51b5", color: "#fff" }}
    >
      <CardContent>
        <Typography gutterBottom variant="body2" >
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
}
