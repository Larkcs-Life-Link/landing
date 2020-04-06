import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import GridContainer from '../components/Grid/GridContainer';
import { Helmet } from 'react-helmet';
import GridItem from '../components/Grid/GridItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {container,headerStyle} from '../assets/landingStyle';
import Header from '../components/Header';
import Team from './Team'
import DoubleArrow from '@material-ui/icons/DoubleArrow';
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
      paper: {
        padding: theme.spacing(2),
        width: 200,
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
         boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
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
        axios.all([
            axios.get('/api/sync/loadAboutDetail')
            .then( (response)=> {
              console.log(response.data)
              setAbout(response.data);
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
      const [about, setAbout] = React.useState([]);
      const [team, setTeam] = React.useState([]);
    const classes = useStyles();
    if (loading===true){
      return(<React.Fragment><Helmet>
        <title>About | Larkcs Life Link</title>
        <meta name="description" content="Larkcs Life Link Career page" />
      </Helmet>
        <LinearProgress />
      </React.Fragment>)
    }else{
      return (
        <React.Fragment>
          <Helmet>
          <title>About | Larkcs Life Link</title>
          <meta name="description" content="Larkcs Life Link Career page" />
        </Helmet>
          <Header menu={true} handleClick={handleClick}/><br/><br/><br/><br/><br/>
          <Typography style={{textAlign:"center",fontFamily: "Georgia",
  fontWeight: "bold",
      fontSize: 24}} variant="h6">{about[0].Title}</Typography><br/><br/><br/>
      <div style={container}>
             {about.map((about,index)=>{
        return(
            <React.Fragment  key={index}>
         {index!=0? <React.Fragment><Typography variant="h6" style={{maxWidth:500,margin:12}}>
        <p style={{fontFamily: "Georgia",fontWeight: "bold"}}> <DoubleArrow style={{color:"#39802D",marginRight:12,marginBottom:-4}} />{about.Title}</p>
    </Typography></React.Fragment>:null}
    <GridContainer>
    <GridItem xs={12} sm={12} md={about.VideoLink?6:10}>
    <Typography variant="subtitle1" style={{margin:32}}>
      <p>{about.Content}</p>
    </Typography>
    </GridItem>
     {about.VideoLink?
     <GridItem xs={12} sm={12} md={6}>
     <div className={classes.box}>
     <iframe src={about.VideoLink} title="Larkcs" style={{margin:10,borderRadius:12}} width="95%" height="250" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>
    </GridItem>: null
     }
    </GridContainer>
    
    </React.Fragment>
        )
        
      })}
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
        <Link to="/home" style={{textDecoration:"none",color:"#1C1C1C"}}>
          <ListItem button>
        <ListItemIcon>
          <Home style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Home" /></ListItem></Link>
      <Link to="/services" style={{textDecoration:"none",color:"#1C1C1C"}}>
      <ListItem button>
        <ListItemIcon>
          <LocalPharmacy style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </ListItem></Link>
        <Link to="/gallery" style={{textDecoration:"none",color:"#1C1C1C"}}>
        <ListItem button>
        <ListItemIcon>
          <PermMedia style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Gallery" />
      </ListItem></Link>
      <Link to="/team" style={{textDecoration:"none",color:"#1C1C1C"}}>
      <ListItem button>
        <ListItemIcon>
          <Group style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Our Team" />
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