import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import {
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  Hidden,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import Lottie from "react-lottie";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  estimateButton: {
    ...theme.typography.estimate,
    fontSize: "1.25rem",
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 225,
    [theme.breakpoints.down("lg")]: {
      marginTop: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  icon: {
    width: "12em",
    height: "12em",
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "3em",
    borderRadius: 5,
    marginBottom: "3em",
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.orange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Wich service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones and tablet outline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const Estimate = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [questions, setQuestions] = useState(defaultQuestions);
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState([]);
  const [category, setCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const titleRef = useRef()

  const estimateOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {

    if(matchesMD){window.scrollTo(0, titleRef.current.offsetTop + 75)}
    const newQuestion = cloneDeep(questions);
    const currentlyActive = newQuestion.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestion[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestion[nextIndex] = { ...newQuestion[nextIndex], active: true };

    setQuestions(newQuestion);
  };
  const previousQuestion = () => {

    if(matchesMD){window.scrollTo(0, titleRef.current.offsetTop + 75)}
    const newQuestion = cloneDeep(questions);
    const currentlyActive = newQuestion.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const previousIndex = activeIndex - 1;

    newQuestion[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestion[previousIndex] = {
      ...newQuestion[previousIndex],
      active: true,
    };

    setQuestions(newQuestion);
  };

  const navigationPreviuosDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };
  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestion = cloneDeep(questions);
    const currentlyActive = newQuestion.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestion[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Custom Software Development":
        if(matchesMD){window.scrollTo(0, titleRef.current.offsetTop + 75)}
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "iOS/Android App Development":
        if(matchesMD){window.scrollTo(0, titleRef.current.offsetTop + 75)}
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "Website Development":
        if(matchesMD){window.scrollTo(0, titleRef.current.offsetTop + 75)}
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      default:
        setQuestions(newQuestion);
        break;
    }
  };
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

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const users = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];

      setUsers(users.title);

      cost -= users.cost;
      cost *= users.cost;
    }

    setTotal(cost);
  };

  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
    }
  };
  const getFeatures = () => {
    let newFeatures = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );

      setFeatures(newFeatures);
    }
  };
  const getCustomFeatures = () => {
    let newCustomFeatures = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newCustomFeatures.push(option.title));

      setCustomFeatures(newCustomFeatures);
    }
  };

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;

      setCategory(newCategory);
    }
  };

  const sendEstimate = () => {
    setLoading(true);
    axios
      .get(
        "https://us-central1-materialui-course-test.cloudfunctions.net/sendMail",
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message,
            total: total,
            service: service,
            platforms: platforms,
            features: features,
            customFeatures: customFeatures,
            users: users,
            category: category,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setDialogOpen(false);
        setAlert({
          open: true,
          message: "Estimate placed succesfully!",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
      });
  };

  const estimateDisabled = () => {
    let disabled = true;

    const emptySelections = questions
      .filter(question => question.title !== "Which features do you expect to use?")
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length === 0)

    const featuresSelected = questions
      .filter(question => question.title === "Which features do you expect to use?" )  
      .map(question => question.options.filter(option => option.selected))
      .filter(selections => selections.length > 0);
      console.log(featuresSelected);

    if (questions.length === 2) {
      if (emptySelections.length === 1) {
        disabled = false;
      }
    } else if (questions.length === 1) {
      disabled = true;
    } else if (
      emptySelections.length === 1 && featuresSelected.length > 0
    ) {
      disabled = false;
    }

    return disabled;
  };

  const softwareSelection = (
    <Grid item container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.5em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="check" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want {service}
            {platforms.length > 0
              ? ` for ${
                  //if only web application is selected...
                  platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    platforms.indexOf("Web Application") > -1 &&
                      platforms.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? //then finish the sentence here
                      `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    platforms.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.5em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="check" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
                features.length === 1
                ? //then end the sentence here
                  `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter(
                      (feature, index) =>
                        index !== features.length - 1 &&
                        index !== features.length - 2
                    )
                    //and for those features return their name...
                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {features.length > 2
              ? //...and then finally add the last feature with 'and' in front of it
                ` ${features[features.length - 2]} and ${
                  features[features.length - 1]
                }.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.5em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="check" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            The custom feature will be of {customFeatures}
            {`, and the project will be used by ${users} users`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const websiteSelection = (
    <Grid
      item
      container
      direction="column"
      style={{ marginTop: matchesSM ? 0 : "14em" }}
    >
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.5em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="check" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want{" "}
            {category === "Basic"
              ? "a basic website"
              : `an ${category} website`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
 
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <Grid container>
      {/*MAIN CONTAINER*/}
      <Grid
        item
        container
        direction="column"
        alignItems={matchesMD ? "center" : undefined}
        lg
      >
        {/*CONTAINER Title and animation*/}
        <Grid
          item
          style={{ marginTop: "2em", marginLeft: matchesMD ? 0 : "5em" }}
        >
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: matchesMD ? 0 : "10em", maxWidth: "50em" }}
        >
          <Lottie options={estimateOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }}
        alignItems="center"
        lg
      >
        {/*CONTAINER Options*/}
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item ref={titleRef}>
                {/*ITEM Title for the options*/}
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    fontSize: "2.25rem",
                    marginTop: "5em",
                    marginLeft: matchesSM ? "0.5em" : 0,
                    marginRight: matchesSM ? "0.5em" : 0,
                    lineHeight: 1.25,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {/*ITEM Container for options*/}
                {question.options.map((option, index) => (
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="center"
                    md
                    key={index}
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      textTransform: "none",
                      display: "grid",
                      borderRadius: 0,
                      marginBottom: matchesSM ? "1.5em" : 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid item container justify="center">
          <Grid
            item
            container
            justify="space-between"
            style={{ maxWidth: "18em", marginTop: "3em" }}
          >
            {/*ITEM Container for arrows*/}
            <Grid item>
              <IconButton
                disabled={navigationPreviuosDisabled()}
                onClick={previousQuestion}
              >
                <img
                  src={
                    navigationPreviuosDisabled() ? backArrowDisabled : backArrow
                  }
                  alt="Previous question"
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={navigationNextDisabled()}
                onClick={nextQuestion}
              >
                <img
                  src={
                    navigationNextDisabled()
                      ? forwardArrowDisabled
                      : forwardArrow
                  }
                  alt="Next question"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item align="center">
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
            }}
            disabled={estimateDisabled()}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="lg"
        fullScreen={matchesSM}
        style={{ zIndex: 1302 }}
      >
        <Grid
          container
          justify="center"
          direction={matchesSM ? "column" : "row"}
          alignItem={matchesSM ? "center" : undefined}
        >
          <Grid item style={{ marginTop: "1em", marginBottom: "0.5em" }}>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            justify="space-around"
            alignItems={matchesSM ? "center" : undefined}
          >
            {/* CONTAINER with the texfields */}
            <Grid
              container
              item
              direction="column"
              alignItems="center"
              md={7}
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginTop: matchesMD ? "1.5em" : 0 }}>
                <Typography variant="h4" gutterBottom>
                  Confirm Message
                </Typography>
              </Grid>
              <Grid item container direction="column" alignItems="center">
                <Grid
                  item
                  container
                  direction="column"
                  style={{ maxWidth: matchesXS ? "100%" : "20em" }}
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
                {/*--ITEM Textfield with message of the user--*/}
                <Grid
                  item
                  container
                  justify="center"
                  style={{ maxWidth: matchesXS ? "100%" : "20em" }}
                >
                  <TextField
                    multiline
                    fullWidth
                    rows="10"
                    id="message"
                    placeholder="Tell us more about your project"
                    value={message}
                    className={classes.message}
                    InputProps={{ disableUnderline: true }}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    paragraph
                    align={matchesSM ? "center" : undefined}
                    style={{ lineHeight: 1.25 }}
                  >
                    We can create this digital solution for an estimated{" "}
                    <span className={classes.specialText}>
                      ${total.toFixed(2)}
                    </span>
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    align={matchesSM ? "center" : undefined}
                  >
                    Fill on yor name, phone number and email, place your
                    request, and we'll back to you with details moving forward
                    and a final price.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/*ITEM with options checked */}
            <Grid
              item
              container
              direction="column"
              alignItems={matchesSM ? "center" : undefined}
              md={5}
              style={{
                maxWidth: "30em",
                marginTop: matchesMD ? "1.5em" : undefined,
              }}
            >
              <Grid item>
                {questions.length > 2 ? softwareSelection : websiteSelection}
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={sendEstimate}
                  disabled={
                    name.length === 0 ||
                    emailHelper.length !== 0 ||
                    email.length === 0 ||
                    phoneHelper.length !== 0 ||
                    phone.length === 0 ||
                    message.length === 0
                  }
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <React.Fragment>
                      Place Request{" "}
                      <img
                        src={send}
                        alt="paper airplane"
                        style={{ marginLeft: "0.5em" }}
                      />
                    </React.Fragment>
                  )}
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid item style={{ marginTop: matchesSM ? "1.5em" : null }}>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/*--SNACKBAR confirmation of sending message--*/}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4200}
      />
    </Grid>
  );
};

export default Estimate;
