import React, { Fragment } from "react";
import Head from 'next/head'
import {
  makeStyles,
  Grid,
  useMediaQuery,
  useTheme,
  Typography,
  Hidden,
  IconButton,
} from "@material-ui/core";
import Lottie from "react-lottie";
import Link from "../src/Link";

import CallToAction from "../src/ui/CallToAction";
import integrationAnimation from "../src/animations/integrationAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: "0.5em",
  },
  heading: {
    maxWidth: "40em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fragment>
      <Grid container direction="column">
      <Head>
        <title key='title'>iOS/Android App Design and Development | Arc Development</title>
        <meta name='description' key='description' content='Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us build beautifully designed, carefully crafted apps for both iOS and Android. ' />
        <meta property='og:title' key='og:title' content='Bringing West Coast Technology to the Midwest | iOS/Android App Development' />
        <meta property='og:url' key='og:url' content='arc.com/mobileapps' />
        <link rel='canonical' key='canonical' href='https://arc.com/mobileapps' />
      </Head>
        {/*Main container Mobile Apps Development --> */}
        <Grid
          item
          container
          direction="row"
          className={classes.rowContainer}
          justify={matchesMD ? "center" : undefined}
          style={{ marginTop: matchesXS ? "1em" : "2em" }}
        >
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginRight: "1em", marginLeft: "-3.5em" }}
              component={Link}
              href="/customsoftware"
            >
              <IconButton
                style={{ backgroundColor: "transparent" }}
                onClick={() => props.setSelectedIndex(1)}
              >
                <img alt="back arrow to custom software" src='/assets/backArrow.svg' />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography
                variant="h1"
                gutterBottom
                align={matchesMD ? "center" : undefined}
              >
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Mobile apps allow you to take your tools on the go.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
              >
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginLeft: "1em", marginRigth: "-3.5em" }}
              component={Link}
              href="/websites"
            >
              <IconButton
                style={{ backgroundColor: "transparent" }}
                onClick={() => props.setSelectedIndex(3)}
              >
                <img alt="forward arrow to websites" src='/assets/forwardArrow.svg' />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        {/*SECTION Integration & Simultaneous Patform support --> */}
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          alignItems={matchesSM ? "center" : undefined}
          className={classes.rowContainer}
          justify={matchesSM ? "center" : 'space-around'}
          style={{ marginTop: "15em", marginBottom: "15em" }}
        >
          {/*ITEM Integration --> */}
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Integration
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                This allows you to extend your reach, reinvent interactions, and
                develop a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
          </Grid>
          {/*ITEM Animation --> */}
          <Grid item md style={{marginBottom: matchesSM ? '5em' : undefined, marginTop: matchesSM ? '5em' : undefined, maxWidth: '20em'}}>
            <Lottie options={defaultOptions} style={{maxWidth: matchesMD ? '15em' : '20em', height: matchesMD ? '20em' : undefined}} />
          </Grid>
          {/*ITEM Simultaneous Patform Support --> */}
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : "right"}
              >
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets — all at the same time.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/*SECTION Diferents options of Mobile --> */}
        <Grid item container className={classes.rowContainer} justify={matchesMD ? 'center' : 'space-around'} direction={matchesMD ? 'column' : 'row'} style={{marginBottom: '15em', display: matchesMD ? 'grid' : undefined}}>
            <Grid item container direction='column' md alignItems="center">
                <Grid item>
                    <Typography variant='h4' gutterBottom align="center">
                        Extend Functionality
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt='extend functionality' src='/assets/swissKnife.svg' />
                </Grid>
            </Grid>
            <Grid item container direction='column' md alignItems="center" style={{marginBottom: matchesMD ? '5em' : undefined, marginTop: matchesMD ? '5em' : undefined}}>
                <Grid item>
                    <Typography variant='h4' gutterBottom align="center">
                        Extend Access
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt='extend access' src='/assets/extendAccess.svg' style={{maxWidth: matchesXS ? '20em' : '28em'}} />
                </Grid>
            </Grid>
            <Grid item container direction='column' md alignItems="center" >
                <Grid item>
                    <Typography variant='h4' gutterBottom align="center">
                        Increase Engagement
                    </Typography>
                </Grid>
                <Grid item>
                    <img alt='increase engagement' src='/assets/increaseEngagement.svg' />
                </Grid>
            </Grid>
        </Grid>
        {/*-----Call to Action Block-----*/}
        <Grid item>
          <CallToAction setValue={props.setValue} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileApps;
