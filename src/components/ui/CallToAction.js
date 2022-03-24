import React, { Fragment } from "react";
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import { Link } from "react-router-dom";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

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
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 80,
    width: 205,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <Grid
        container
        className={classes.background}
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify={matchesSM ? "center" : "space-between"}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography 
                variant="h2"
                style={{fontSize: matchesXS ? '2rem' : '2.5rem', marginBottom: matchesXS ? '1.5rem' : undefined, lineHeight: matchesXS ? '1.1' : null}}
              >
                Simple Software. <br /> {matchesXS ? <br /> : null} Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: matchesXS ? '1rem' : "1.5rem", marginBottom: '1rem' }}>
                Take advantage of the 21st Century.
              </Typography>
              <Grid
                container
                justify={matchesSM ? "center" : "flex-start"}
                item
              >
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    heigth={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesSM ? 0 : "5em",
            marginLeft: matchesSM ? 0 : "2em",
          }}
        >
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => props.setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CallToAction;
