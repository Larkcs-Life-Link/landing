import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import MenuBook from '@material-ui/icons/MenuBook';
import {container} from '../../assets/landingStyle';
import Header from '../../components/Header';
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
import Footer from '../home/Footer';

const useStyles = makeStyles(theme => ({
      paper: {
        padding: theme.spacing(2),
        width: 200,
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
         boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
      },
      box: {
        maxHeight: 250,
        maxWidth: 450,
        padding:12,
        "@media only screen and (min-width: 600px)": {
          margin:32,
          border: "1px solid #ffffff",
          WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
        boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
        borderRadius: 12
        }
      }
}))

const Services = (props) => {
    useEffect(() => {
      axios.all([
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
      const [services, setServices] = React.useState([]);
      const [media, setMedia] = React.useState([]);
    const classes = useStyles();
    if (loading===true){
      return(<LinearProgress />)
    }else{
      return (
        <React.Fragment>
          <Header menu={true} handleClick={handleClick}/> <br/><br/><br/><br/><br/>
                     <Typography style={{textAlign:"center",fontFamily: "Georgia",
  fontWeight: "bold",
  fontSize: 24}} variant="h6">Terms and Conditions</Typography><br/>
                     <div style={container}>
             
    <iframe src="https://dl.airtable.com/.attachments/f971b5d34bbc3ed660ef3c0b77901f55/14c6924d/LarkcsTermsandConditionsVersion1.023.04.2020.pdf" width="100%" height="759" frameborder="0" allowfullscreen webkitallowfullscreen msallowfullscreen>
            </iframe></div>
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
      <ListItem button onClick={()=>{window.location.href="https://blog.larkcs.com"}}>
        <ListItemIcon>
          <MenuBook style={{color:"#39802D"}} />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItem>
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
      <Footer data={media}/>
        </React.Fragment>
    );
    }

};

export default Services;