import React, { useEffect, useState, useRef } from "react";
import Container from "@material-ui/core/Container";
import Card from "../components/Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import axios from "axios";
import ContentLoader from "react-content-loader";
import Typography from "@material-ui/core/Typography";
import Carddate from "../components/Carddate";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "90vh",
      background: theme.palette.text.secondary,
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
    },
  })
);

const apicovid =
  "https://static.easysunday.com/covid-19/getTodayCases.json?fbclid=IwAR127KfzNG-3JydhE6oGZiQAISzQ465VQGi-U5loEDsTJPh9Bt4SqrNoJcU";

const Dashboard = () => {
  const classes = useStyles();
  const [covid, setCovid] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const MyLoader = () => (
    <ContentLoader width={400} viewBox="0 0 400 227">
      {/* Only SVG shapes */}
      <rect x="0" y="0" rx="5" ry="5" width="400" height="227" />
    </ContentLoader>
  );

  function reverseString(str) {
    return str.split("-").reverse().join("-");
  }

  const fetchCovid = useRef(() => {});

  fetchCovid.current = async () => {
    const resultObject = await axios.get(apicovid);
    const objectData = await resultObject.data;
    setCovid(objectData);
    let ndate = objectData.UpdateDate.substring(0, 10).replaceAll("/", "-");
    let ntime = objectData.UpdateDate.substring(
      objectData.UpdateDate.length / 2 + 2,
      objectData.UpdateDate.length
    );
    let currentDate = reverseString(ndate);
    const date = new Date(currentDate);
    const result = date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDate(result);
    setTime(ntime);
  };
  useEffect(() => {
    fetchCovid.current();
  }, []);
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Paper className={classes.paper} elevation={0}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ color: "#fff" }}
          >
            สถานการณ์ในประเทศไทย
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Carddate date={covid && date} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Carddate date={covid && `เวลา ${time} น.`} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {covid === "" ? (
                <MyLoader />
              ) : (
                <Card
                  title={"ติดเชื้อสะสม"}
                  number={covid.cases}
                  color="#c83812"
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {covid === "" ? (
                <MyLoader />
              ) : (
                <Card
                  title={"ผู้ติดเชื้อเพิ่ม (คน)"}
                  number={covid.NewConfirmed}
                  color="#ed5249"
                />
              )}
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              {covid === "" ? (
                <MyLoader />
              ) : (
                <Card
                  title={"รักษาหาย (คน)"}
                  number={covid.todayRecovered}
                  color="#1c7c4e"
                />
              )}
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              {covid === "" ? (
                <MyLoader />
              ) : (
                <Card
                  title={"กำลังรักษาตัว (คน)"}
                  number={covid.active}
                  color="#307fe2"
                />
              )}
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              {covid === "" ? (
                <MyLoader />
              ) : (
                <Card
                  title={"เสียชีวิต (คน)"}
                  number={covid.NewDeaths}
                  color="#575756"
                />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
