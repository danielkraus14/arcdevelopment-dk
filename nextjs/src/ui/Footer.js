import React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
    width: '100%'
  },
  link: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    marginTop: "3em",
  },
  icon:{
      height: '4em',
      width: '4em',
      [theme.breakpoints.down('xs')]:{
          height: '2.5em',
          width: '2.5em'
      }
  },
  socialContainer:{
      position: 'absolute',
      marginTop: '-6em',
      right: '1.5em',
      [theme.breakpoints.down('xs')]:{
        right: '0.6em'
    }
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={6}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/"
                onClick={() => props.setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                Mobile Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/websites"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                iOS/Android App Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem} >
            <Grid container direction="column" spacing={2} style={{margin: 0}}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/contact"
                onClick={() => props.setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src='/assets/footerAdornment.svg'
        alt="black decorative slash"
        className={classes.adornment}
      />
      <Grid container spacing={2} className={classes.socialContainer} justify='flex-end'>
          <Grid item component={'a'} href='http://www.facebook.com' rel='noopener noreferer' target='_blank'>
              <img alt='facebook logo' src='/assets/facebook.svg' className={classes.icon}/>
          </Grid>
          <Grid item component={'a'} href='http://www.twitter.com' rel='noopener noreferer' target='_blank'>
              <img alt='twitter logo' src='/assets/twitter.svg' className={classes.icon}/>
          </Grid>
          <Grid item component={'a'} href='http://www.instagram.com' rel='noopener noreferer' target='_blank'>
              <img alt='instagram logo' src='/assets/instagram.svg' className={classes.icon}/>
          </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;