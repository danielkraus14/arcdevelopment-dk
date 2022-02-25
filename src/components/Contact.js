import React, { useState } from "react";
import axios from 'axios';
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Dialog,
  DialogContent,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ButtonArrow from "../components/ui/ButtonArrow";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
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
  icon: {
    marginRight: "1em",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
    marginBottom: "5em",
  },
  sendButton: {
    ...theme.typography.estimate,
    fontSize: "1rem",
    fontWeight: 300,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 245,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    axios.get('https://us-central1-material-ui-course-ca868.cloudfunctions.net/sendMail')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <Grid container>
      {" "}
      {/*--MAIN CONTAINER--*/}
      {/*--SECTION Contact Form--*/}
      <Grid
        item
        container
        direction="column"
        lg={4}
        xl={3}
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesSM ? "2em" : matchesMD ? "5em" : undefined,
          marginTop: matchesSM ? "2em" : matchesMD ? "5em" : undefined,
        }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item container justify="center">
              <Grid item containe justify="center" r>
                <Typography variant="h2" style={{ lineHeight: 1 }}>
                  Contact Us
                </Typography>
              </Grid>
              <Grid item container justify="center">
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue }}
                >
                  We're waiting.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              style={{ marginTop: "2em" }}
            >
              <Grid item>
                <img alt="phone" src={phoneIcon} className={classes.icon} />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel: +54937555526181"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              justify="center"
              style={{ marginBottom: "2em" }}
            >
              <Grid item>
                <img alt="email" src={emailIcon} className={classes.icon} />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:dkraushys@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    zach@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            {/*--ITEM Textfields for the information of the user--*/}
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            {/*--ITEM Textfield for message--*/}
            <Grid item container justify="center" style={{ maxWidth: "20em" }}>
              <TextField
                multiline
                fullWidth
                rows="10"
                id="message"
                value={message}
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justify="center">
              <Button
                variant="contained"
                /*disabled={
                  name.length === 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0 ||
                  phoneHelper.length !== 0 ||
                  phone.length === 0 ||
                  message.length === 0
                }*/
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message
                <img alt="airplane" src={airplane} style={{ marginLeft: 10 }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*--MODAL Confirmation Dialog--*/}
      <Dialog
        open={open}
        style={{zIndex: 1302}}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '2em' : matchesSM ? '4em' : matchesMD ? '6em' : "8em",
            paddingBottom: matchesXS ? '2em' : matchesSM ? '4em' : matchesMD ? '6em' : "8em",
            paddingLeft: matchesXS ? '2em' : matchesSM ? '5em' : matchesMD ? '8em' : '10em',
            paddingRight: matchesXS ? '2em' : matchesSM ? '5em' : matchesMD ? '8em' : "10em",
            marginTop: matchesSM ? '0.25em' : undefined,
            marginBottom: matchesSM ? '0.25em' : undefined,
            marginLeft: matchesSM ? '0.25em' : undefined,
            marginRight: matchesSM ? '0.25em' : undefined,
          },
        }}
      >
        <DialogContent >
          <Grid
            container
            direction="column"
            alignItems="center"
            style={{
              width: matchesSM ? '100%' : matchesMD ? "20em" : "30em",
              marginBottom: matchesMD ? "2em" : "5em",
              marginTop: matchesMD ? "1em" : "3em",
            }}

          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item container direction="column" alignItems="center">
              <Grid
                item
                container
                direction="column"
                style={{ maxWidth:  matchesXS ? '100%' : "20em"  }}
              >
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Name"
                    id="name"
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em"}}>
                  <TextField
                    label="Email"
                    id="email"
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    fullWidth
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Phone"
                    id="phone"
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    fullWidth
                    value={phone}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              {/*--ITEM Textfield with message of the user--*/}
              <Grid
                item
                container
                justify="center"
                style={{ maxWidth: matchesXS ? '100%' : "20em" }}
              >
                <TextField
                  multiline
                  fullWidth
                  rows="10"
                  id="message"
                  value={message}
                  className={classes.message}
                  InputProps={{ disableUnderline: true }}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
              {/*--ITEM Buttons of the Modal--*/}
              <Grid item container justify="center" alignItems="center" direction={matchesMD ? 'column' : 'row'}>
                <Hidden mdDown>
                  <Grid item>
                    <Button
                      color="primary"
                      onClick={() => setOpen(false)}
                      style={{ marginRight: "2em" }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Hidden>
                <Grid item>
                  <Button
                    variant="contained"
                    disabled={
                      name.length === 0 ||
                      emailHelper.length !== 0 ||
                      email.length === 0 ||
                      phoneHelper.length !== 0 ||
                      phone.length === 0 ||
                      message.length === 0
                    }
                    className={classes.sendButton}
                    onClick={onConfirm}
                  >
                    Send Message
                    <img
                      alt="airplane"
                      src={airplane}
                      style={{ marginLeft: 10 }}
                    />
                  </Button>
                </Grid>
                <Hidden lgUp>
                  <Grid item>
                    <Button
                      color="primary"
                      onClick={() => setOpen(false)}
                      style={{ marginRight: "2em", marginTop: "2em" }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/*--SECTION Revolution--*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? "center" : undefined}
        className={classes.background}
        lg={8}
        xl={9}
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software. <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
                align={matchesMD ? "center" : undefined}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid
                container
                justify={matchesMD ? "center" : "flex-start"}
                item
                style={{ marginBottom: matchesMD ? "5em" : undefined }}
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
          container
          style={{
            marginRight: matchesMD ? 0 : "5em",
            marginLeft: matchesMD ? 0 : "2em",
          }}
          justify={matchesMD ? "center" : undefined}
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
    </Grid>
  );
};

export default Contact;
