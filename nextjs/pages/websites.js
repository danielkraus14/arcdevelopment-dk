import React from "react";
import Head from 'next/head';
import {
  makeStyles,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Hidden,
} from "@material-ui/core";
import Link from "../src/Link";
import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: "0.5em",
  },
  heading: {
    maxWidth: "40em",
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key='title'>Stunning Custom Website Design | Arc Development</title>
        <meta name='description' key='description' content='Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering and perfect responsive design | 99% PageSpeed Score' />
        <meta property='og:title' key='og:title' content='Bringing West Coast Technology to the Midwest | Websites' />
        <meta property='og:url' key='og:url' content='arc.com/websites' />
        <link rel='canonical' key='canonical' href='https://arc.com/websites' />
      </Head>
      {/*Main container Websites Development --> */}
      <Grid
        item
        container
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
            component={Link}
            href="/mobileapps"
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setSelectedIndex(2)}
            >
              <img alt="back arrow to mobile app development" src='/assets/backArrow.svg' />
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
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "1em", marginRigth: "-3.5em" }}
            component={Link}
            href="/services"
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setSelectedIndex(0)}
            >
              <img alt="forward arrow to services" src='/assets/forwardArrow.svg' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/*ITEM Analytics --> */}
      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        style={{marginTop: '15em'}}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : "left"}
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item style={{ marginLeft: matchesSM ? 0 : "-2.75em" }}>
              <img
                alt="graph with magnifying glass revealing 1s and 0s"
                src='/assets/analytics.svg'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }} className={classes.paragraphContainer}>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      {/*ITEM E-Commerce --> */}
      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        justify={matchesSM ? undefined : "flex-end"}
        style={{marginTop: '10em', marginBottom: '10em'}}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img alt="world made of dollar signs" src='/assets/ecommerce.svg' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }} className={classes.paragraphContainer}>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            It’s no secret that people like to shop online.
          </Typography>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      {/*ITEM Outreach --> */}
      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : "left"}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item style={{ marginLeft: matchesSM ? 0 : "-2.75em" }}>
              <img
                alt="megaphone"
                src='/assets/outreach.svg'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }} className={classes.paragraphContainer}>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      {/*ITEM Search Engine Optimization --> */}
      <Grid
        item
        container
        className={classes.rowContainer}
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        justify={matchesSM ? undefined : "flex-end"}
        style={{marginTop: '10em', marginBottom: '15em'}}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item align='center'>
              <img alt="website standing on winner's podium" src='/assets/seo.svg' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }} className={classes.paragraphContainer}>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            If you’re like us, probably never.
          </Typography>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            Customers don’t go there either, so we make sure your website is designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      {/*-----Call to Action Block-----*/}
      <Grid item>
          <CallToAction setValue={props.setValue} />
        </Grid>
    </Grid>
  );
};

export default Websites;
