import React, { Fragment, useEffect } from "react";
import {
  makeStyles,
  Button,
  useTheme,
  useMediaQuery,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";

import customSoftwareIcon from "../assets/customSoftware.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },  
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
}));

const Services = (props) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <Fragment>
      <Grid container direction="column">
       
        <Grid item>
          {" "}
          <Grid item style={{marginTop: matchesSM ? '1em' : '2em', marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? "center" : undefined}}>
                <Typography variant="h2" gutterBottom>Services</Typography>
            </Grid>
          {/*-----Services-----*/}
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : "flex-end"}
            style={{marginTop: matchesSM ? '1em' : '5em'}}
          >
            {" "}
            {/*-----Custom Software-----*/}
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : '35em'
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  heigth={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{marginRight: matchesSM ? 0 : '5em'}}>
              <img
                className={classes.icon}
                alt="custom software icon"
                src={customSoftwareIcon}
                width= '250em'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-start"}
        >
          {" "}
          {/*-----Mobile Development-----*/}
          <Grid item style={{ textAlign: matchesSM ? "center" : undefined,marginLeft: matchesSM ? 0 : "5em" }}>
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increment Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                heigth={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item >
            <img
              className={classes.icon}
              alt="mobile development icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
          style={{marginBottom: '10em'}}
        >
          {" "}
          {/*-----Websites Block-----*/}
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : '35em'
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimazed for Search Engines, {matchesXS && <br />} built for speed.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/websites"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                heigth={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
            <img
              className={classes.icon}
              alt="website icon"
              src={websiteIcon}
              width= '250em' 
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Services;
