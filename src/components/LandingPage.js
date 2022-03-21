import React, { Fragment } from "react";
import Lottie from "react-lottie";
import {
  makeStyles,
  useTheme,
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent
} from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";
import CallToAction from "./ui/CallToAction";
import { Link } from "react-router-dom";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/customSoftware.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from '../assets/repeatingBackground.svg';
import informationBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  informationBackground:{
    backgroundImage: `url(${informationBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  revolutionBackground:{
      backgroundImage: `url(${revolutionBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%'
  },
  revolutionCard:{
      position: 'absolute',
      boxShadow: theme.shadows[10],
      borderRadius: 15,
      padding: '10em',
      [theme.breakpoints.down('sm')]:{
          paddingTop: '8em',
          paddingBottom: '8em',
          paddingLeft: 0,
          paddingRight: 0,
          borderRadius: 0,
          width: '100%'
      }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
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

const LandingPage = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fragment>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {" "}
          {/*-----Hero Block-----*/}
          <Grid
            container
            alignItems="center"
            justify="flex-end"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" className={classes.text} align="center">
                Bringing West Coast Technology <br /> to the Midwest
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                    component={Link}
                    to='/estimate'
                    onClick={()=> props.setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    component={Link}
                    to='/revolution'
                    onClick={()=> props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      heigth={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.animation} sm item>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Services-----*/}
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : "flex-start"}
          >
            {" "}
            {/*-----Custom Software-----*/}
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
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
              <Button variant="outlined" className={classes.learnButton} component={Link} to='/customsoftware' onClick={()=> {props.setValue(1); props.setSelectedIndex(1)}}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  heigth={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="custom software icon"
                src={customSoftwareIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
              container
              direction="row"
              className={classes.serviceContainer}
              justify={matchesSM ? "center" : "flex-end"}
            >
              {" "}
              {/*-----Mobile Development-----*/}
              <Grid
                item
                style={{ textAlign: matchesSM ? "center" : undefined }}
              >
                <Typography variant="h4">
                  iOS/Android App Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Extend Functionality. Extend Access. Increment Engagement.
                </Typography>
                <Typography variant="subtitle1">
                  Integrate your web experience or create a standalone app{" "}
                  {matchesSM ? null : <br />} with either mobile platform.
                </Typography>
                <Button variant="outlined" className={classes.learnButton} component={Link} to='/mobileapps' onClick={()=> {props.setValue(1); props.setSelectedIndex(2)}}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    heigth={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
              <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
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
            justify={matchesSM ? "center" : "flex-start"}
            >
            {" "}
            {/*-----Websites Block-----*/}
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimazed for Search Engines, built for speed.
              </Typography>
              <Button variant="outlined" className={classes.learnButton} component={Link} to='/websites' onClick={()=> {props.setValue(1); props.setSelectedIndex(3)}}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  heigth={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                alt="website icon"
                src={websiteIcon}
              />
            </Grid>
          </Grid>
          <Grid > {/*-----Revolution Block-----*/}
              <Grid container style={{height: '100em', marginTop: '12em'}} alignItems="center" justify="center">
                <Card className={classes.revolutionCard}>
                    <CardContent>
                        <Grid container  direction='column' style={{textAlign: 'center'}}>
                            <Grid item>
                                <Typography variant='h3' gutterBottom>The Revolution</Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant='subtitle1'>Visionary insights coupled with cutting-edge technology is a recipe for revolution</Typography>
                                <Button variant="outlined" className={classes.learnButton} component={Link} to='/revolution' onClick={()=> props.setValue(3)}>
                                    <span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow
                                    width={10}
                                    heigth={10}
                                    fill={theme.palette.common.blue}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <div className={classes.revolutionBackground} />
              </Grid>
          </Grid>
          <Grid item> {/*-----Information Block-----*/}
              <Grid container style={{height: '80em'}} direction='row' alignItems="center" className={classes.informationBackground}>
                <Grid item container direction={matchesXS ? 'column' : 'row'} style={{textAlign: matchesXS ? 'center' : 'inherit'}}>
                <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em'}}>
                    <Grid container direction='column' style={{marginBottom: matchesXS ? '10em' : 0}}>
                        <Grid item>
                            <Typography variant='h2' style={{color: '#fff'}}>About Us</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle2'>Let's get personal.</Typography>
                            <Grid item>
                                <Button variant="outlined" style={{color: '#FFF', borderColor: '#FFF'}} className={classes.learnButton} component={Link} to='/about' onClick={()=> props.setValue(3)}>
                                            <span style={{ marginRight: 10 }}>Learn More</span>
                                            <ButtonArrow
                                            width={10}
                                            heigth={10}
                                            fill='#fff'
                                            />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid sm item style={{marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em'}}>
                    <Grid container direction='column' alignItems={matchesXS ? 'center' : 'flex-end'} >
                        <Grid item>
                            <Typography variant='h2' style={{color: '#fff'}}>Contact Us</Typography>
                        </Grid>
                        <Grid item  >
                            <Typography variant='subtitle2'>Say Hello!</Typography>
                            <Grid item >
                                <Button variant="outlined" style={{color: '#FFF', borderColor: '#FFF'}} className={classes.learnButton} component={Link} to='/contact' onClick={()=> props.setValue(4)}>
                                            <span style={{ marginRight: 10 }}>Learn More</span>
                                            <ButtonArrow
                                            width={10}
                                            heigth={10}
                                            fill='#fff'
                                            />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>

                </Grid>
          </Grid>
          <Grid item> {/*-----Call to Action Block-----*/}
            <CallToAction setValue={props.setValue} />
          </Grid>
      </Grid>
    </Fragment>
  );
};

export default LandingPage;
