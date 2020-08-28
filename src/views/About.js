import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../components/Grid/GridContainer';
import { Helmet } from 'react-helmet';
import GridItem from '../components/Grid/GridItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { container, headerStyle } from '../assets/js-styles/landingStyle';
import Header from '../components/Header';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import MenuBook from '@material-ui/icons/MenuBook';
import LinearProgress from '@material-ui/core/LinearProgress';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalPharmacy from '@material-ui/icons/LocalPharmacy';
import Group from '@material-ui/icons/Group';
import PermMedia from '@material-ui/icons/PermMedia';
import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({
  image: {
    margin: 32,
    "@media only screen and (max-width: 600px)": {
      maxWidth: "100%",
      margin: "0 auto"
    }
  },
  hide: {
    width: "80%",
    "@media only screen and (min-width: 600px)": {
      display: "none"
    }
  },
  paper: {
    padding: theme.spacing(2),
    width: 200,
    WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
  },
  box: {
    maxHeight: 269,
    maxWidth: 450,
    "@media only screen and (min-width: 600px)": {
      margin: 32,
      border: "1px solid #ffffff",
      WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
      boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
      borderRadius: 12
    }
  }
}))

const Services = () => {
  useEffect(() => {
    axios.all([
      axios.get('/api/sync/loadConfig')
        .then((response) => {
          setConfig(response.data);
        }),
      axios.get('/api/sync/loadAboutDetail')
        .then((response) => {
          console.log(response.data)
          setAbout(response.data);
        }),

      axios.get('/api/sync/loadAbout')
        .then((response) => {
          console.log(response.data)
          setPhn(response.data);
        }),
      axios.get('/api/sync/loadMediaLinks')
        .then((response) => {
          console.log(response.data)
          setMedia(response.data);
        })
    ])
      .then(axios.spread(function () {
        setLoading(false)
      }))
  }, []);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [loading, setLoading] = React.useState(true);
  const [config, setConfig] = React.useState([]);
  const [about, setAbout] = React.useState([]);
  const [phn, setPhn] = React.useState([]);
  const [media, setMedia] = React.useState([]);

  const bookingConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Booking") })[0].Hide ? true : false : false;
  const downloadConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Download") })[0].Hide ? true : false : false;
  const aboutConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "About") })[0].Hide ? true : false : false;
  const teamConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Team") })[0].Hide ? true : false : false;
  const servicesConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Services") })[0].Hide ? true : false : false;
  const blogConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Blog") })[0].Hide ? true : false : false;
  const galleryConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Gallery") })[0].Hide ? true : false : false;
  const statisticsConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Statistics") })[0].Hide ? true : false : false;
  const tesimonialsConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Testimonials") })[0].Hide ? true : false : false;
  const feedBackConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Feedback") })[0].Hide ? true : false : false;
  const mediaConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Media") })[0].Hide ? true : false : false;
  const careerConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Career") })[0].Hide ? true : false : false;


  const classes = useStyles();
  if (loading === true) {
    return (<React.Fragment><Helmet>
      <title>About | Larkcs Life Link</title>
      <meta name="description" content="We are a dedicated team aimed at providing assisted living facilities to people in need of health assistance. Our service is tailored with compassion and integrity." />
    </Helmet>
      <LinearProgress />
    </React.Fragment>)
  } else {
    return (
      <React.Fragment>
        <Helmet>
          <title>About | Larkcs Life Link</title>
          <meta name="description" content="We are a dedicated team aimed at providing assisted living facilities to people in need of health assistance. Our service is tailored with compassion and integrity." />
        </Helmet>
        <Header bookingConfig={bookingConfig} downloadConfig={downloadConfig} phn={phn[0].BookingNo} menu={true} handleClick={handleClick} /><br /><br /><br /><br /><br />
        <Typography style={{
          textAlign: "center", fontFamily: "Georgia",
          fontWeight: "bold",
          fontSize: 24
        }} variant="h6">{about[0].Title}</Typography><br /><br /><br />
        <div style={container}>
          <br/><br/>
          {about.map((about, index) => {
            return (
              <React.Fragment key={index}>
                {index != 0 ? <React.Fragment><Typography variant="h6" style={{ maxWidth: 500,  marginLeft: 12,marginRight:12 }}>
                  <p style={{ fontFamily: "Georgia", fontWeight: "bold" }}> <DoubleArrow style={{ color: "#39802D", marginRight: 12, marginBottom: -4 }} />{about.Title}</p>
                </Typography></React.Fragment> : null}
                <GridContainer>
                  <GridItem xs={12} sm={12} md={about.VideoLink ? 6 : 10}>
                    <Typography variant="subtitle1" style={{ marginLeft: 32,marginRight:32,whiteSpace:"pre-wrap" }}>
                      <p>{about.Content}</p>
                    </Typography>
                  </GridItem>
                  {about.VideoLink ?
                    <GridItem xs={12} sm={12} md={6}>
                      <div className={classes.box}>
                        <iframe src={about.VideoLink} title="Larkcs" style={{ margin: 10, borderRadius: 12 }} width="95%" height="250" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>
                    </GridItem> : null
                  }
                </GridContainer>

              </React.Fragment>
            )

          })}<br/><br/>
        </div>
        <Popover
          classes={{
            paper: classes.paper,
          }}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <List>
            <Link to="/home" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <Home style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="Home" /></ListItem></Link>

            {!servicesConfig?<Link to="/services" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <LocalPharmacy style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="Services" />
              </ListItem></Link>:null}

            {!blogConfig?<ListItem button onClick={() => { window.location.href = "https://blog.larkcs.com" }}>
              <ListItemIcon>
                <MenuBook style={{ color: "#39802D" }} />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>:null}

           {!galleryConfig? <Link to="/gallery" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <PermMedia style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItem></Link>:null}

           {!teamConfig? <Link to="/team" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <Group style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="Our Team" />
              </ListItem></Link>:null}

           {!careerConfig? <Link to="/career" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <Work style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="Career" />
              </ListItem></Link>:null}
              
              </List>
        </Popover>
        <Footer data={media} />
      </React.Fragment>
    );
  }

};

export default Services;