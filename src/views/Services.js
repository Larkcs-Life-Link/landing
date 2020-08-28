import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import MenuBook from '@material-ui/icons/MenuBook';
import Header from '../components/Header';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Group from '@material-ui/icons/Group';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import PermMedia from '@material-ui/icons/PermMedia';
import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet';
import ServiceComponent from '../components/serviceComponent';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    width: 200,
    WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
  }
}))

const Services = (props) => {

  useEffect(() => {
    axios.all([
      axios.get('/api/sync/loadConfig')
        .then((response) => {
          setConfig(response.data);
        }),
      axios.get('/api/sync/loadServicesDetail')
        .then((response) => {
          setServices(response.data);
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
        setLoading(false);
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
  const [services, setServices] = React.useState([]);
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
    return (
    <React.Fragment>
      <Helmet>
          <title>Services | Larkcs Life Link</title>
          <meta name="description" content="We are dedicated to bringing standard caregiving services, reliable health tips and a friend in need at your service around the clock." />
        </Helmet>
        <LinearProgress />
    </React.Fragment>
   )
  } else {
    return (
      <React.Fragment>
        <Helmet>
          <title>Services | Larkcs Life Link</title>
          <meta name="description" content="We are dedicated to bringing standard caregiving services, reliable health tips and a friend in need at your service around the clock." />
        </Helmet>
        <Header bookingConfig={bookingConfig} downloadConfig={downloadConfig} phn={phn[0].BookingNo} menu={true} handleClick={handleClick} /> <br /><br /><br /><br /><br />
        <ServiceComponent services={services} navigateTo={props.location.state?props.location.state.ref:null} />
        <Footer data={media} />
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

            {!aboutConfig?<Link to="/about" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <VerifiedUser style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem></Link>:null}

            {!blogConfig?<ListItem button onClick={() => { window.location.href = "https://blog.larkcs.com" }}>
              <ListItemIcon>
                <MenuBook style={{ color: "#39802D" }} />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>:null}

            {!teamConfig?<Link to="/gallery" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <PermMedia style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItem></Link>:null}

            {!teamConfig?<Link to="/team" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <Group style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="Our Team" />
              </ListItem></Link>:null}

            {!careerConfig?<Link to="/career" style={{ textDecoration: "none", color: "#1C1C1C" }}>
              <ListItem button>
                <ListItemIcon>
                  <Work style={{ color: "#39802D" }} />
                </ListItemIcon>
                <ListItemText primary="Career" />
              </ListItem></Link>:null}
              
              </List>
        </Popover>

      </React.Fragment>
    );
  }

};

export default Services;