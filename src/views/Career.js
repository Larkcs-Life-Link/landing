import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import LocationOn from "@material-ui/icons/LocationOn";
import Button from "../components/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Helmet } from "react-helmet";
import Testimonials from "../components/Testimonials";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardHeader from "@material-ui/core/CardHeader";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import FlatButton from "@material-ui/core/Button";
import Header from "../components/Header";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalPharmacy from "@material-ui/icons/LocalPharmacy";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import PermMedia from "@material-ui/icons/PermMedia";
import Home from "@material-ui/icons/Home";
import Group from "@material-ui/icons/Group";
import MenuBook from "@material-ui/icons/MenuBook";
import Footer from "../components/Footer";
import CareerHeader from "../components/CareerHeader";

const scrollToRef = (ref) =>
    window.scrollTo({
        top: ref.current.offsetTop,
        bottom: 0,
        behavior: "smooth",
    });

const useStyles = makeStyles((theme) => ({
    box: {
        width: "70%",
        margin: "0 auto !important",
        marginBottom: "52px !important",
        border: "1px solid #ffffff",
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
        boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
        borderRadius: 12,
        "@media only screen and (max-width: 600px)": {
            width: "90%",
        },
    },
    ExpansionPanelDetails: {
        display: "block",
    },
    paper: {
        padding: theme.spacing(2),
        width: 200,
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
        boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    },
    button: {
        textDecoration: "none",
    },
    hide: {
        width: "80%",
        "@media only screen and (min-width: 600px)": {
            display: "none",
        },
    },
}));
const Career = () => {
    const myRef = useRef(null);
    const executeScroll = () => {
        scrollToRef(myRef);
    };

    useEffect(() => {
        axios
            .all([
                axios.get("/api/sync/loadConfig").then((response) => {
                    setConfig(response.data);
                }),
                axios.get("/api/sync/loadCareer").then((response) => {
                    setPostings(response.data);
                }),
                axios.get("/api/sync/loadStories").then((response) => {
                    setStories(response.data);
                }),
                axios.get("/api/sync/loadAbout").then((response) => {
                    console.log(response.data);
                    setPhn(response.data);
                }),
                axios.get("/api/sync/loadDescription").then((response) => {
                    setDescription(response.data);
                }),
                axios.get("/api/sync/loadMediaLinks").then((response) => {
                    console.log(response.data);
                    setMedia(response.data);
                }),
            ])
            .then(
                axios.spread(function () {
                    setLoading(false);
                })
            );
    }, []);
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const [config, setConfig] = React.useState([]);
    const [postings, setPostings] = React.useState([]);
    const [stories, setStories] = React.useState([]);
    const [description, setDescription] = React.useState([]);
    const [phn, setPhn] = React.useState([]);
    const [media, setMedia] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const bookingConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Booking";
              })[0].Hide
                ? true
                : false
            : false;
    const downloadConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Download";
              })[0].Hide
                ? true
                : false
            : false;
    const aboutConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "About";
              })[0].Hide
                ? true
                : false
            : false;
    const teamConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Team";
              })[0].Hide
                ? true
                : false
            : false;
    const servicesConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Services";
              })[0].Hide
                ? true
                : false
            : false;
    const blogConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Blog";
              })[0].Hide
                ? true
                : false
            : false;
    const galleryConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Gallery";
              })[0].Hide
                ? true
                : false
            : false;
    const statisticsConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Statistics";
              })[0].Hide
                ? true
                : false
            : false;
    const tesimonialsConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Testimonials";
              })[0].Hide
                ? true
                : false
            : false;
    const feedBackConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Feedback";
              })[0].Hide
                ? true
                : false
            : false;
    const mediaConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Media";
              })[0].Hide
                ? true
                : false
            : false;
    const careerConfig =
        config.length > 0
            ? config.filter((item) => {
                  return item.Name == "Career";
              })[0].Hide
                ? true
                : false
            : false;

    const classes = useStyles();
    if (loading === true) {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Career | Larkcs Life Link</title>
                    <meta
                        name="description"
                        content="With Larkcs, unleash your untapped potential by being part of a revolutionary health care platform. Discover the new you."
                    />
                </Helmet>
                <LinearProgress />
            </React.Fragment>
        );
    } else {
        return (
            <div>
                <Helmet>
                    <title>Career | Larkcs Life Link</title>
                    <meta
                        name="description"
                        content="With Larkcs, unleash your untapped potential by being part of a revolutionary health care platform. Discover the new you."
                    />
                </Helmet>
                <Header
                    bookingConfig={bookingConfig}
                    downloadConfig={downloadConfig}
                    phn={phn[0].BookingNo}
                    menu={true}
                    handleClick={handleClick}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <CareerHeader description={description} callback={executeScroll} />
                <Typography style={{ textAlign: "center", fontSize: 24 }} variant="h6" ref={myRef}>
                    <p>Job Openings</p>
                </Typography>
                <br />
                <br />
                {postings.length > 0
                    ? postings.map((post, index) => {
                          return (
                              <div key={index}>
                                  <ExpansionPanel className={classes.box}>
                                      <ExpansionPanelSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                      >
                                          <CardHeader
                                              title={
                                                  <Typography
                                                      onClick={(event) => event.stopPropagation()}
                                                      onFocus={(event) => event.stopPropagation()}
                                                      style={{ fontSize: 17 }}
                                                      variant="h6"
                                                  >
                                                      {post.opening}
                                                  </Typography>
                                              }
                                              subheader={
                                                  <Typography style={{ fontSize: 13 }}>
                                                      <span>
                                                          {post.jobType ? (
                                                              <span>{post.jobType},</span>
                                                          ) : null}
                                                          <span>
                                                              <LocationOn
                                                                  style={{
                                                                      marginLeft: 0,
                                                                      marginBottom: -3,
                                                                      fontSize: 17,
                                                                  }}
                                                              />
                                                              {post.location}
                                                          </span>
                                                      </span>
                                                      <br />
                                                      <br />
                                                      <Link
                                                          to={{ pathname: `/apply/${post.link}/` }}
                                                          className={classes.button}
                                                      >
                                                          <Button color="success">Apply Now</Button>
                                                      </Link>
                                                      <FlatButton
                                                          color="#00000"
                                                          style={{
                                                              margin: 12,
                                                              backgroundColor: "#F5F5F5",
                                                          }}
                                                      >
                                                          Learn More
                                                      </FlatButton>
                                                  </Typography>
                                              }
                                          />
                                      </ExpansionPanelSummary>
                                      <ExpansionPanelDetails
                                          className={classes.ExpansionPanelDetails}
                                      >
                                          <br />
                                          <GridContainer>
                                              {post.description ? (
                                                  <GridItem
                                                      xs={12}
                                                      sm={12}
                                                      md={post.VideoLink ? 6 : 12}
                                                  >
                                                      <Typography variant="subtitle1">
                                                          About the Role
                                                      </Typography>
                                                      <hr />
                                                      <br />
                                                      <Typography
                                                          style={{ whiteSpace: "pre-wrap" }}
                                                      >
                                                          {post.description}
                                                      </Typography>
                                                  </GridItem>
                                              ) : null}
                                              {post.VideoLink ? (
                                                  <GridItem
                                                      xs={12}
                                                      sm={12}
                                                      md={post.VideoLink ? 6 : 12}
                                                      style={{ marginTop: 42 }}
                                                  >
                                                      <div className={classes.box}>
                                                          <iframe
                                                              style={{ marginTop: 42 }}
                                                              src={post.VideoLink}
                                                              title="Larkcs"
                                                              style={{
                                                                  margin: 10,
                                                                  borderRadius: 12,
                                                              }}
                                                              width="95%"
                                                              height="auto"
                                                              frameBorder="0"
                                                              allow="autoplay; fullscreen"
                                                              allowFullScreen
                                                          ></iframe>
                                                      </div>
                                                  </GridItem>
                                              ) : null}
                                          </GridContainer>
                                          <br />
                                          <br />
                                          <Typography variant="subtitle1">
                                              What You'll Do
                                          </Typography>
                                          <hr />
                                          <br />
                                          <Typography component={"span"}>
                                              {post.responsibilities ? (
                                                  <ul>
                                                      {post.responsibilities
                                                          .trim()
                                                          .split("\n")
                                                          .map((points, index) => {
                                                              return <li key={index}>{points}</li>;
                                                          })}
                                                  </ul>
                                              ) : null}
                                              <br />
                                              {post.NB ? (
                                                  <em style={{ fontSize: 12 }}>
                                                      <strong>NB:</strong>
                                                      {post.NB}
                                                  </em>
                                              ) : null}
                                          </Typography>
                                          <br />
                                          <br />
                                          <Link
                                              to={{ pathname: `/apply/${post.link}/` }}
                                              style={{ textDecoration: "none" }}
                                          >
                                              <Button color="success">Apply Now</Button>
                                          </Link>
                                          <br />
                                          <br />
                                      </ExpansionPanelDetails>
                                  </ExpansionPanel>
                              </div>
                          );
                      })
                    : null}
                <Typography style={{ textAlign: "center", fontSize: 24 }} variant="h6">
                    <p>Hear from our Employees!</p>
                </Typography>
                <Testimonials data={stories} />
                <Popover
                    classes={{
                        paper: classes.paper,
                    }}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <List>
                        <Link to="/home" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Home style={{ color: "#39802D" }} />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                        </Link>

                        {!aboutConfig ? (
                            <Link to="/about" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <VerifiedUser style={{ color: "#39802D" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="About" />
                                </ListItem>
                            </Link>
                        ) : null}

                        {!servicesConfig ? (
                            <Link
                                to="/services"
                                style={{ textDecoration: "none", color: "#1C1C1C" }}
                            >
                                <ListItem button>
                                    <ListItemIcon>
                                        <LocalPharmacy style={{ color: "#39802D" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Services" />
                                </ListItem>
                            </Link>
                        ) : null}

                        {!blogConfig ? (
                            <ListItem
                                button
                                onClick={() => {
                                    window.location.href = "https://blog.larkcs.com";
                                }}
                            >
                                <ListItemIcon>
                                    <MenuBook style={{ color: "#39802D" }} />
                                </ListItemIcon>
                                <ListItemText primary="Blog" />
                            </ListItem>
                        ) : null}

                        {!galleryConfig ? (
                            <Link
                                to="/gallery"
                                style={{ textDecoration: "none", color: "#1C1C1C" }}
                            >
                                <ListItem button>
                                    <ListItemIcon>
                                        <PermMedia style={{ color: "#39802D" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Gallery" />
                                </ListItem>
                            </Link>
                        ) : null}

                        {!teamConfig ? (
                            <Link to="/team" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <Group style={{ color: "#39802D" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Our Team" />
                                </ListItem>
                            </Link>
                        ) : null}
                    </List>
                </Popover>
                <Footer data={media} />
            </div>
        );
    }
};

export default Career;
