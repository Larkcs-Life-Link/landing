import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Button from '../components/Button';
import {container,headerStyle} from '../assets/landingStyle';
import Header from '../components/Header';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalPharmacy from '@material-ui/icons/LocalPharmacy';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import PermMedia from '@material-ui/icons/PermMedia';
import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';

const useStyles = makeStyles(theme => ({
    image: {
        margin:32,
        "@media only screen and (max-width: 600px)": {
          maxWidth: "100%",
          margin:"0 auto"
        }
      },
      hide: {
        width:"80%",
        "@media only screen and (min-width: 600px)": {
          display: "none"
        }
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
      }
}))

const style={
  image: {
      height: 46,
      width: 46,
      margin: 32,
      cursor: "pointer"
  }
}
const Services = () => {
    useEffect(() => {
        axios.get('/api/sync/loadServicesDetail')
        .then( (response)=> {
          console.log(response.data)
          setServices(response.data);
          setLoading(false)
        })
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
      const [services, setServices] = React.useState([]);
    const classes = useStyles();
    if (loading===true){
      return(<LinearProgress />)
    }else{
      return (
        <React.Fragment>
          <Header menu={true} handleClick={handleClick}/> <br/><br/><br/><br/><br/>
                     <Typography style={{textAlign:"center",fontFamily: "Georgia",
  fontWeight: "bold",
  fontSize: 24}} variant="h6">Our Services</Typography><br/>
                     <div style={container}>
             {services.map((service,index)=>{
        console.log(service)
        return(
<React.Fragment key={index}>
         <Typography variant="h6" style={{maxWidth:500,margin:32,paddingTop:32}}>
         <p style={{fontFamily: "Georgia",fontWeight: "bold"}}>{service.Title}</p>
    </Typography>
    <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
    <Typography variant="subtitle1" style={{maxWidth:500,margin:32}}>
      <p>{service.Description}</p>
    </Typography>
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
        
      })}</div>
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
        <Link to="/home" style={{textDecoration:"none",color:"#1C1C1C"}}>
          <ListItem button>
        <ListItemIcon>
          <Home style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Home" /></ListItem></Link>
        <Link to="/about" style={{textDecoration:"none",color:"#1C1C1C"}}>
        <ListItem button>
        <ListItemIcon>
          <VerifiedUser style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem></Link>
      <Link to="/gallery" style={{textDecoration:"none",color:"#1C1C1C"}}>
      <ListItem button>
        <ListItemIcon>
          <PermMedia style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Gallery" />
      </ListItem></Link>
      <Link to="/career" style={{textDecoration:"none",color:"#1C1C1C"}}>
      <ListItem button>
        <ListItemIcon>
          <Work style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Career" />
      </ListItem></Link></List>
      </Popover>
        </React.Fragment>
    );
    }

};

export default Services;