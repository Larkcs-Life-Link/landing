import React, {useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import playstore from '../assets/images/playstore.jpg';
import axios from 'axios';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import MenuRounded from '@material-ui/icons/MenuRounded';
import ThumbUp from '@material-ui/icons/ThumbUp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalPharmacy from '@material-ui/icons/LocalPharmacy';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Contacts from '@material-ui/icons/Contacts';
import PermMedia from '@material-ui/icons/PermMedia';
import Work from '@material-ui/icons/Work';
import {headerStyle, subtitleStyle} from "../assets/landingStyle";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { faFacebookF,faInstagram,faTwitter,faWhatsapp,faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { Helmet } from 'react-helmet';
import Slider from './home/Slider';
import Statistics from './home/Statistics';
import CareerStories from "./career/CareerStories";
import FlatButton from '@material-ui/core/Button';

const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop,
  bottom: 0,
  behavior: 'smooth'
});
const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(1),
    },
    container: {
      width:"90%",
      margin:"0 auto",
      borderRadius:12,
      WebkitBoxShadow: "10px 10px 21px 20px rgba(136,136,136,0.24)",
      boxShadow: "10px 10px 21px 20px rgba(136,136,136,0.24)",
      marginBottom: 42
},
    box: {
      maxHeight: 250,
      maxWidth: 450,
      "@media only screen and (min-width: 600px)": {
        margin:32,
        border: "1px solid #ffffff",
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
      boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
      borderRadius: 12
      }
    },
    image: {
      margin:32,
      "@media only screen and (max-width: 600px)": {
        maxWidth: "100%",
        margin:"0 auto"
      }
    },
      paper: {
        padding: theme.spacing(1),
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
         boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
      },
      logo: {
        height:150,
        marginRight: -152,
        "@media only screen and (max-width: 600px)": {
          display: "none"
        }
      },
      margin: {
        marginLeft: "36%",
        marginTop: -80,
        "@media only screen and (min-width: 800px)": {
          marginLeft:"65%"
        }
      },
      services: {
         "@media only screen and (min-width: 600px)": {
          maxHeight:180,
        maxWidth: 700,
        margin:32,
        border: "10px solid #ffffff",
        borderRadius: 12,
        WebkitBoxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
         boxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
        },
        "@media only screen and (max-width: 600px)": {
        width:"95%",
        marginBottom: 22,
        margin:"0 auto",
        border: "10px solid #ffffff",
        borderRadius: 12,
        WebkitBoxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
         boxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
        },
      },
      hide: {
        width:"80%",
        "@media only screen and (min-width: 600px)": {
          display: "none"
        }
      },
      follow: {
        "@media only screen and (max-width: 600px)": {
          display: "none"
        }
      },
      mobbanner: {
        display: "block",
      margin:"0 auto",
      maxWidth: 400,
      marginTop: 32,
        "@media only screen and (min-width: 600px)": {
          display: "none"
        }
      },
      banner: {
        display: "block",
      margin:"0 auto",
      maxWidth: 800,
        "@media only screen and (max-width: 600px)": {
          display: "none"
        }
      }

  }));

const style={
    image: {
        height: 46,
        width: 46,
        margin: 32,
        cursor: "pointer"
    },
  logo: {
    height:150,
    "@media only screen and (max-width: 600px)": {
      visibility: "hidden"
    }
  },
    pop: {
         WebkitBoxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
         boxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
    }
}




const Home = () => {
  useEffect(() => {
    axios.get('/api/sync/loadHeaders')
    .then( (response)=> {
      console.log(response.data)
      setHeaders(response.data);
      axios.get('/api/sync/loadAbout')
    .then( (response)=> {
      console.log(response.data)
      setAbout(response.data);
      axios.get('/api/sync/loadServices')
    .then( (response)=> {
      console.log(response.data)
      setServices(response.data);
      axios.get('/api/sync/loadTestimonials')
      .then( (response)=> {
        console.log(response.data)
        setTestimonials(response.data);
        axios.get('/api/sync/loadStatistics')
        .then( (response)=> {
          console.log(response.data)
          setStatistics(response.data);
          setLoading(false)
        })
      })
    })
    })
    })
  }, []);
 
  const [modal, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [snack, setSnack] = React.useState(false);
  const [headers, setHeaders] = React.useState([]);
  const [about, setAbout] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const [statistics, setStatistics] = React.useState([]);
  const [testimonials, setTestimonials] = React.useState([]);
  const [values, setValues] = React.useState({
    name: '',
    email: "",
    feedback: "",
    msg: "Error. Try again"
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
 
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleCloseModal() {
    setOpen(false);
  }
  function handleCloseSnack() {
    setSnack(false);
  }

  function handleSnack() {
    if(values.name===""||values.email===""||values.feedback===""){
      setValues({ ...values, msg: "Please fill all fields" });
      setSnack(true)
    }
    else{
      setValues({ ...values, msg: "Feedback Received" });
      $.ajax({
        url: "https://formsubmit.co/ajax/support@larkcs.com",
        method: "POST",
        data: {
          name: values.name,
          email: values.email,
          feedback: values.feedback
        }
      })
      setSnack(true)
    }
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const myRef = useRef(null)
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)
  const myRef4 = useRef(null)
  const executeScroll = () => {handleClose();scrollToRef(myRef)}
  const executeScroll1 = () => {handleClose();scrollToRef(myRef1)}
  const executeScroll3 = () => {handleClose();scrollToRef(myRef3)}
  const executeScroll4 = () => {handleClose();scrollToRef(myRef4)}
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  if (loading===true){
    return(<LinearProgress />)
  }else{
    return (
        <React.Fragment>
          <Helmet>
          <title>Larkcs Life Link</title>
          <meta name="description" content="Larkcs Life Link Home page" />
          </Helmet>
          <Snackbar
      style={{maxWidth:300,margin:"0 auto"}}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={snack}
          autoHideDuration={3000}
          TransitionComponent={Fade}
          onClose={handleCloseSnack}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={values.msg}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={handleCloseSnack}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
                    <img style={style.image} src={Logo} alt=" "/>
                    <div className={classes.margin}>
                   
                    <Button color="success" onClick={handleClickOpen}>Download App</Button>

                    <IconButton aria-describedby={id} variant="contained" onMouseEnter={handleClick} onClick={handleClick}>
                      
                    <MenuRounded/></IconButton>
                    </div><GridContainer style={{margin:"0 auto",maxWidth:600}}>
            <img className={classes.logo} src={Logo} alt=" "/>
            <Typography style={{margin:"0 auto",textAlign:"center",marginTop:32}}>
                <span style={headerStyle}>Larkcs Life Link</span><br/>
                <span style={subtitleStyle}>Always be with you.</span><br/><br/>
             </Typography>
            </GridContainer>
            <Slider headers={headers}/>
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
        <List><ListItem button onClick={executeScroll}>
        <ListItemIcon>
          <VerifiedUser style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button onClick={executeScroll1}>
        <ListItemIcon>
          <LocalPharmacy style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </ListItem>
      <Link to="/gallery" style={{textDecoration:"none",color:"#1C1C1C"}}>
      <ListItem button>
        <ListItemIcon>
          <PermMedia style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Gallery" />
      </ListItem></Link>
        <ListItem button onClick={executeScroll3}>
        <ListItemIcon>
          <Contacts style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Contact" /></ListItem><ListItem button onClick={executeScroll4}>
        <ListItemIcon>
          <Work style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Career" /></ListItem></List>
      </Popover><br/><br/><br/>
      <div className={classes.container}>
    <br/><Typography variant="h6" style={{maxWidth:500,margin:32}} ref={myRef}>
      <p style={{fontFamily: "Georgia",fontWeight: "bold"}}><VerifiedUser style={{color:"#39802D",marginRight:12}} />{about[0].Title}</p>
    </Typography>
    <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
    <Typography variant="subtitle1" style={{maxWidth:500,margin:32}}>
      <p>{about[0].content}</p>
    </Typography><hr className={classes.hide}/>
    <Typography variant="h6" style={{padding:12}}>
          <img src={playstore} alt=" " style={{height:60,float:"left",marginRight:12,marginTop:10}}/>
          <p>Download our Android app from Playstore</p><br/>
          <Button color="success" onClick={handleClickOpen}>Download App</Button>
    </Typography>
    </GridItem>
     <GridItem xs={12} sm={12} md={6}>
       <div className={classes.box}>
       <iframe src={about[0].VideoLink} title="Larkcs" style={{margin:10,borderRadius:12}} width="95%" height="250" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>
      </GridItem>
    </GridContainer>
    <br/><Typography variant="h6" style={{maxWidth:500,margin:32}} ref={myRef1}>
         <p style={{fontFamily: "Georgia",fontWeight: "bold"}}><LocalPharmacy style={{color:"#39802D",marginRight:12}} />Our Services</p>
    </Typography><br/>
    <div style={{margin:"0 auto",maxWidth: "90%"}} ref={myRef1}>
      {services.map((service,index)=>{
        console.log(service)
        return(
<React.Fragment key={index}>
         <Typography variant="h6" style={{maxWidth:500,marginTop:32,marginLeft:32}}>
         <p style={{fontFamily: "Georgia",fontWeight: "bold"}}>{service.Title}</p>
    </Typography>
    <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
    <Typography variant="subtitle1" style={{maxWidth:500,margin:32}}>
      <p>{service.Description}</p>
    </Typography>
    <Button color="success" style={{margin:32,marginTop: -16}}>Learn More</Button>
    <hr className={classes.hide}/><br/>
    <img className={classes.image} src={service.Posters[0].url} alt=""/>
    </GridItem>
     <GridItem xs={12} sm={12} md={6}>
       <div className={classes.box}>
       <iframe src={service.VideoLink} title="Larkcs" style={{margin:10,borderRadius:12}} width="95%" height="250" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>
      </GridItem>
    </GridContainer>
    </React.Fragment>
        )
        
      })}
    </div><br/><br/>
    <Typography variant="h6" style={{maxWidth:500,margin:32}} ref={myRef3}>
         <p style={{fontFamily: "Georgia",fontWeight: "bold"}}>
         <FlightTakeoff style={{color:"#39802D",marginRight:12}} />
           We are Growing!</p>
    </Typography><br/>
    <div className={classes.container} style={{textAlign:"center",padding:24}}><Statistics data={statistics}/><br/></div><br/>
    <Typography variant="h6" style={{maxWidth:500,margin:32}} >
         <p style={{fontFamily: "Georgia",fontWeight: "bold"}}>
         <SentimentVerySatisfiedIcon style={{color:"#39802D",marginRight:12}} />
           Our Happy Customers!</p>
    </Typography>
    <CareerStories data={testimonials}/>
    <Typography variant="h6" style={{maxWidth:500,margin:32}} ref={myRef3}>
         <p style={{fontFamily: "Georgia",fontWeight: "bold"}}>
         <ThumbUp style={{color:"#39802D",marginRight:12}} />
           We are Social!</p>
    </Typography><br/>
    <div className={classes.container} style={{textAlign:"center"}}>
    <FontAwesomeIcon icon={faFacebookF} size="2x" onClick={()=>{window.open('https://www.facebook.com/LARKCSLifeLink/','_blank');}} style={{margin:30,marginBottom:0,height:82,cursor:"pointer"}}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faInstagram} size="2x" onClick={()=>{window.open('https://instagram.com/larkcslifelink?igshid=pxivuzwpuuws','_blank');}} style={{margin:30,marginBottom:0,height:82,cursor:"pointer"}}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faWhatsapp} size="2x" onClick={()=>{window.open('https://wa.me/918111888892','_blank');}} style={{margin:30,marginBottom:0,height:82,cursor:"pointer"}}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faYoutube} size="2x"onClick={()=>{window.open('https://www.youtube.com/channel/UCNlA-ZkvtqSw1IXbQwIwZYQ','_blank');}} style={{margin:30,marginBottom:0,height:82,cursor:"pointer"}}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faLinkedinIn} size="2x" onClick={()=>{window.open('https://www.linkedin.com/company/larkcs/about/','_blank');}} style={{margin:30,marginBottom:0,height:82,cursor:"pointer"}}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faTwitter} size="2x" onClick={()=>{window.open('https://twitter.com/larkcslife','_blank');}} style={{margin:30,marginBottom:0,height:82,cursor:"pointer"}}></FontAwesomeIcon>
      <br/><br/><Typography variant="subtitle1" style={{fontWeight:"initial"}}>
         <GridContainer style={{maxWidth:500,margin:"0 auto"}}>
          <GridItem xs={12} sm={12} md={6} style={{cursor:"pointer",marginBottom:24}} onClick={()=>{window.open('mailto:support@larkcs.com','_blank');}}>
          <FontAwesomeIcon icon={faEnvelope} style={{marginRight:6}}></FontAwesomeIcon>
          support@larkcs.com </GridItem>
          <GridItem xs={12} sm={12} md={6} style={{cursor:"pointer",marginBottom:24}} onClick={()=>{window.open('tel:+918111888892','_blank');}}>
          <FontAwesomeIcon icon={faPhoneAlt} style={{marginRight:6}}></FontAwesomeIcon>
          +918111888892 </GridItem></GridContainer></Typography><br/>
      </div><br/><Typography variant="h6" style={{maxWidth:500,margin:32}} ref={myRef3}>
         <p style={{fontFamily: "Georgia",fontWeight: "bold"}}>
         <Contacts style={{color:"#39802D",marginRight:12}} />
           Contact Us!</p>
    </Typography><br/>
    <div style={{
      minHeight:360,
        maxWidth: 700,
        padding:12,
        margin:24,
        border: "10px solid #ffffff",
        borderRadius: 12,
        WebkitBoxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
         boxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
        }}>
    <TextField
          id="standard-name"
          name="Name"
          label="Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
        /><br/><TextField
          id="standard-name"
          name="Email"
          label="Email"
          type="email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
        /><br/>
        <TextField
        fullWidth
          id="standard-name"
          name="Feedback"
          label="Your Feedback"
          multiline
          rows="4"
          className={classes.textField}
          value={values.feedback}
          onChange={handleChange('feedback')}
          margin="normal"
        /><br/><br/>
        <Button style={{float:"right"}} color="success" type="submit" onClick={handleSnack}>
            Submit
          </Button></div>
        <br/><br/>
      <div style={{height:150,backgroundColor:"#F3F3FE",padding:32}}>
        <Typography style={{margin:"0 auto",textAlign:"center"}} ref={myRef4}>
         <span style={headerStyle}>We are Hiring!!</span><br/>
         <Link to='/career' style={{textDecoration:"none"}}>
           <Button color="success">Go to Career Page</Button></Link>
       </Typography></div>
  </div> <Dialog open={modal} onClose={handleClose} aria-labelledby="form-dialog-title">
  <form method="POST" action="https://formsubmit.co/support@larkcs.com">
        <DialogTitle id="form-dialog-title">We are not live yet!!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Drop in your email to recieve notification upon release.
          </DialogContentText>
          <TextField
            id="name"
            label="Email Address"
            type="email"
            name="Email"
            fullWidth
          /> <input type="hidden" name="New Subscription" value="Subscription from landing page"></input></DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="gray">
            Cancel
          </Button>
          <Button onClick={handleCloseModal} color="success" type="submit">
            Subscribe
          </Button>
        </DialogActions><DialogContent><div className={classes.follow}><DialogContentText>Follow our channels for more updates:</DialogContentText><div style={{textAlign:"center"}}>
        <FontAwesomeIcon icon={faFacebookF} size="2x" onClick={()=>{window.open('https://www.facebook.com/LARKCSLifeLink/','_blank');}} style={{margin:28,marginBottom:0,cursor:"pointer"}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} size="2x" onClick={()=>{window.open('https://instagram.com/larkcslifelink?igshid=pxivuzwpuuws','_blank');}} style={{margin:28,marginBottom:0,cursor:"pointer"}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" onClick={()=>{window.open('https://wa.me/918111888892','_blank');}} style={{margin:28,marginBottom:0,cursor:"pointer"}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faYoutube} size="2x" onClick={()=>{window.open('https://www.youtube.com/channel/UCNlA-ZkvtqSw1IXbQwIwZYQ','_blank');}} style={{margin:28,marginBottom:0,cursor:"pointer"}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" onClick={()=>{window.open('https://www.linkedin.com/company/larkcs/about/','_blank');}} style={{margin:28,marginBottom:0,cursor:"pointer"}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter} size="2x" onClick={()=>{window.open('https://twitter.com/larkcslife','_blank');}} style={{margin:28,marginBottom:0,cursor:"pointer"}}></FontAwesomeIcon>
      <Typography variant="subtitle1" style={{fontWeight:"initial"}}>
      </Typography><br/>
      </div></div></DialogContent>
      <input type="hidden" name="_next" value="http://www.larkcs.com"></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </form>
      </Dialog>
        </React.Fragment>
    );
      }
};

export default Home;
