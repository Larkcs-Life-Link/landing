import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Header from '../components/Header';
import LocalPharmacy from '@material-ui/icons/LocalPharmacy';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Group from '@material-ui/icons/Group';
import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import MenuBook from '@material-ui/icons/MenuBook';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({
  container: {
    "@media only screen and (max-width: 600px)": {
      textAlign: "center",
      margin: "0 auto"
    }
  },
  mainImage: {
    maxHeight: 280,
    maxWidth: 380,
    margin: "2em",
    "@media only screen and (max-width: 600px)": {
      maxWidth: "80%",
    }
  },
  paper: {
    padding: theme.spacing(2),
    width: 200,
    WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
  },
  containedImages: {
    maxHeight: 280,
    maxWidth: "90%",
    margin: 12,
    "@media only screen and (max-width: 600px)": {
      textAlign: "center"
    }
  },
  events: {
    display: "block",
    padding: "0px 0px 0px",
    "@media only screen and (max-width: 600px)": {
      textAlign: "center"
    }
  }
}));


const Gallery = () => {
  useEffect(() => {
    axios.all([
      axios.get('/api/sync/loadConfig')
        .then((response) => {
          setConfig(response.data);
        }),
      axios.get('/api/sync/loadGallery')
        .then((response) => {
          var result = response.data.reduce((acc, obj) => {
            acc[obj.Name] = acc[obj.Name] || [];
            acc[obj.Name].push(obj);
            return acc;
          }, {});
          setData(result)
        }),
      axios.get('/api/sync/loadMediaLinks')
        .then((response) => {
          console.log(response.data)
          setMedia(response.data);
        }),
      axios.get('/api/sync/loadAbout')
        .then((response) => {
          console.log(response.data)
          setPhn(response.data);
        }),
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
  const classes = useStyles();
  const [config, setConfig] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [media, setMedia] = React.useState([]);
  const [phn, setPhn] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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


  if (loading === true) {
    return (<React.Fragment><Helmet>
      <title>Gallery | Larkcs Life Link</title>
      <meta name="description" content="ake a sneak peek into our gallery to find out more about the quality services we deliver and the various activities that go on in the background to provide you with the best healthcare." />
    </Helmet>
      <LinearProgress />
    </React.Fragment>)
  } else {
    return (
      <React.Fragment>
        <Helmet>
      <title>Gallery | Larkcs Life Link</title>
      <meta name="description" content="ake a sneak peek into our gallery to find out more about the quality services we deliver and the various activities that go on in the background to provide you with the best healthcare." />
    </Helmet>
        <Header bookingConfig={bookingConfig} downloadConfig={downloadConfig} phn={phn[0].BookingNo} menu={true} handleClick={handleClick} />
        <br /><br /><br /><br /><br />
        {
          Object.entries(data).map(function (key, values) {
            if (key[0] == "Main") {
              return (
                <div className={classes.container}>
                  {key[1].map(img => {
                    return (
                      <React.Fragment>
                        {img.VideoLink ? <iframe className={classes.mainImage} width="400" height="300" src={img.VideoLink} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                          : <img className={classes.mainImage} src={img.Attachments[0].url} alt=" " />
                        }
                      </React.Fragment>)
                  })}
                </div>)
            } else {
              return (
                <React.Fragment>
                  <ExpansionPanel style={{
                    margin: 24, border: "1px solid #ffffff",
                    WebkitBoxShadow: "10px 10px 11px 10px rgba(136,136,136,0.24)",
                    boxShadow: "10px 10px 11px 10px rgba(136,136,136,0.24)"
                  }} defaultExpanded={true}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{key[0]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.events}>
                      {key[1].map(img => {
                        return (
                          <React.Fragment>
                            {img.VideoLink ? <iframe className={classes.containedImages} width="400" height="300" src={img.VideoLink} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                              : <img className={classes.containedImages} src={img.Attachments[0].url} alt=" " />
                            }
                          </React.Fragment>)
                      })}
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </React.Fragment>)
            }

          })
        }
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

            {!teamConfig?<Link to="/team" style={{ textDecoration: "none", color: "#1C1C1C" }}>
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
    )
  }
};

export default Gallery;
