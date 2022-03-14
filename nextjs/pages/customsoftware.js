import React, { Fragment } from "react";
import Head from 'next/head';
import Lottie from "react-lottie";
import Link from '../src/Link'
import {
  makeStyles,
  useTheme,
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import CallToAction from "../src/ui/CallToAction";
import documentsAnimations from "../src/animations/documentsAnimation/data";
import scaleAnimations from "../src/animations/scaleAnimation/data.json";
import automationAnimations from "../src/animations/automationAnimation/data.json";
import uxAnimations from "../src/animations/uxAnimation/data";

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

const CustomSoftware = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimations,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimations,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimations,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimations,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fragment>
      <Grid container direction="column">
        <Head>
          <title key='title'>Custom Software Development and Design | Free Estimate</title>
          <meta name='description' key='description' content='Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones' />
          <meta property='og:title' key='og:title' content='Bringing West Coast Technology to the Midwest | Custom Software Development' />
          <meta property='og:url' key='og:url' content='arc.com/customsoftware' />
          <link rel='canonical' key='canonical' href='https://arc.com/customsoftware' />
        </Head>
        {/*Main container Custom Software Development --> */}
        <Grid
          item
          container
          direction="row"
          justify={matchesMD ? "center" : "flex-start"}
          className={classes.rowContainer}
          style={{ marginTop: matchesXS ? "1em" : "2em" }}
        >
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginRight: "1em", marginLeft: "-3.5em" }}
              component={Link}
              href="/services"
            >
              <IconButton
                style={{ backgroundColor: "transparent" }}
                onClick={() => props.setSelectedIndex(0)}
              >
                <img alt="back arrow to services" src='/assets/backArrow.svg' />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" className={classes.heading}>
            <Typography variant="h1" gutterBottom align={matchesMD ? "center" : undefined}>
              Custom Software Development
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginLeft: "1em", marginRigth: "-3.5em" }}
              component={Link}
              href="/mobileapps"
            >
              <IconButton
                style={{ backgroundColor: "transparent" }}
                onClick={() => props.setSelectedIndex(2)}
              >
                <img
                  alt="forward arrow to mobile development"
                  src='/assets/forwardArrow.svg'
                />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        {/*icons of Energy, Money and Time --> */}
        <Grid
          item
          container
          direction="row"
          justify="center"
          style={{ marginTop: "15em", marginBottom: "20em" }}
          className={classes.rowContainer}
        >
          <Grid
            item
            container
            direction="column"
            md
            style={{ maxWidth: "40em" }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
              <img src='/assets/bulb.svg' alt="lightbulb" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{ maxWidth: "40em",marginBottom: matchesSM ? "10em" : undefined,
            marginTop: matchesSM ? "10em" : undefined, }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
              <img src='/assets/cash.svg' alt="cash" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{ maxWidth: "40em" }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
              <img src='/assets/stopwatch.svg' alt="stopwatch" />
            </Grid>
          </Grid>
        </Grid>
        {/*SECTION of Digital Documents and Data / Scale --> */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          justify={matchesMD ? 'center' : "space-around"}
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
          style={{display: matchesMD ? 'grid' : undefined}}
        >
          {/*ITEM Digital Documents and Data --> */}
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            style={{ marginBottom: matchesMD ? "10em" : undefined }}
            justify={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md
              alignItems={matchesMD ? "center" : undefined}
              style={{ marginBottom: matchesMD ? "5em" : undefined }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesMD ? "center" : undefined}
                >
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={documentsOptions}
                style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              />
            </Grid>
          </Grid>
          {/*ITEM Scale --> */}
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            style={{ marginTop: matchesMD ? "10em" : undefined }}
            justify={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              md
              style={{ marginBottom: matchesMD ? "5em" : undefined }}
            >
              <Lottie
                options={scaleOptions}
                style={{ maxHeight: 260, maxWidth: 280 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesMD ? "center" : "right"}>
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : "right"}
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*SECTION Roots --> */}
        <Grid
          item
          container
          direction="row"
          style={{ marginTop: "15em", marginBottom: "15em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item style={{ marginBottom: matchesMD ? "5em" : undefined }}>
              <img
                src='/assets/root.svg'
                alt="tree with roots extending out"
                height={matchesSM ? "300em" : "450em"}
                width={matchesSM ? "300em" : "450em"}
              />
            </Grid>
            <Grid item className={classes.itemContainer}>
              <Typography variant="h4" gutterBottom align="center">
                Root-Cause Analysis
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/*SECTION Automation & User Experience design --> */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          justify={matchesMD ? 'center' : "space-around"}
          alignItems={matchesMD ? "center" : undefined}
          style={{ marginBottom: "10em", display: matchesMD ? 'grid' : undefined }}
          className={classes.rowContainer}
        >
          {/*ITEM Automation --> */}
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            style={{ marginBottom: matchesMD ? "10em" : undefined }}
            justify={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{ marginBottom: matchesMD ? "5em" : undefined }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesMD ? "center" : undefined}
                >
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  Why waste time when you don’t have to?
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : undefined}
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={automationOptions}
                style={{ maxHeight: 290, maxWidth: 280 }}
              />
            </Grid>
          </Grid>
          {/*ITEM User Experience Design --> */}
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            justify={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              md
              style={{ marginBottom: matchesMD ? "5em" : undefined }}
            >
              <Lottie
                options={uxOptions}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesMD ? "center" : "right"}>
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : "right"}
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : "right"}
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesMD ? "center" : "right"}
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
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

export default CustomSoftware;
