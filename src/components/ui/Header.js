import {
  AppBar,
  Toolbar,
  makeStyles,
  Tab,
  Tabs,
  Button,
  Menu,
  MenuItem,
  MenuList,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  ClickAwayListener,
  Popper,
  Grow,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
} from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandMore } from "@mui/icons-material";
import logo from "../../assets/logoAD.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: 0.7,
  },
  drawerItemSelected: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: 1,
  },
  drawerEstimateItem: {
    backgroundColor: theme.palette.common.orange,
  },
  expansion: {
    backgroundColor: theme.palette.common.blue,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    "&.Mui-expanded": {
      margin: 0,
    },
  },
  expansionDetails:{
    padding: 0
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "#fff",
    borderRadius: "0px",
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    color: "#fff",
    "&:hover": {
      opacity: 1,
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "iOS/Android Apps Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Websites Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleClick(event),
    },
    {
      name: "The Revolution",
      link: "/revolution",
      activeIndex: 2,
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 3,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 4,
    },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.value, props.selectedIndex, menuOptions, routes, props]);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    } else if (event.key === "Escape") {
      setOpenMenu(false);
    }
  }

  const tabs = (
    <Fragment>
      <Tabs
        value={props.value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
        onClick={() => props.setValue(5)}
      >
        Free Estimate
      </Button>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left bottom" : "left top",
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={false}
                  id="simple-menu"
                  aria-labelledby="simple-button"
                  onKeyDown={handleListKeyDown}
                  onMouseOver={() => setOpenMenu(true)}
                  onMouseLeave={handleClose}
                  disablePadding
                >
                  {menuOptions.map((option, index) => {
                    return (
                      <MenuItem
                        key={`${option}${index}`}
                        onClick={(event) => {
                          handleClose();
                          props.setValue(1);
                          handleMenuItemClick(event, index);
                        }}
                        selected={
                          index === props.selectedIndex &&
                          props.value === 1 &&
                          window.location.pathname !== "/services"
                        }
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem }}
                      >
                        {option.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map((route) =>
            route.name === "Services" ? (
              <ExpansionPanel
                key={route.name}
                elevation={0}
                classes={{ root: classes.expansion }}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                  {route.name}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails classes={{root: classes.expansionDetails}}>
                  <Grid container direction="column">
                    {menuOptions.map((route) => (
                      <Grid item>
                        <ListItem
                          key={`${route}${route.selectedIndex}`}
                          divider
                          button
                          component={Link}
                          to={route.link}
                          onClick={() => {
                            setOpenDrawer(false);
                            props.setSelectedIndex(route.selectedIndex);
                          }}
                          selected={props.value === route.activeIndex}
                        >
                          <ListItemText
                            disableTypography
                            className={
                              props.value === route.activeIndex
                                ? classes.drawerItemSelected
                                : classes.drawerItem
                            }
                          >
                            {route.name}
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ) : (
              <ListItem
                key={`${route}${route.activeIndex}`}
                divider
                button
                component={Link}
                to={route.link}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
                selected={props.value === route.activeIndex}
              >
                <ListItemText
                  disableTypography
                  className={
                    props.value === route.activeIndex
                      ? classes.drawerItemSelected
                      : classes.drawerItem
                  }
                >
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            className={classes.drawerEstimateItem}
            selected={props.value === 5}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 5
                  ? classes.drawerItemSelected
                  : classes.drawerItem
              }
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </Fragment>
  );
};

export default Header;
