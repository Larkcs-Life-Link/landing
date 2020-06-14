import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import MenuBook from '@material-ui/icons/MenuBook';
import {container} from '../assets/landingStyle';
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


const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
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
      },
      doc: {
          width: "90%",
          height: "90%",
          margin:"0 auto"
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
const Terms = (props) => {
    useEffect(() => {
        axios.get('/api/sync/loadTerms')
        .then( (response)=> {
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
  fontSize: 24}} variant="h6">Terms and conditions</Typography><br/>
                     <div style={container}>
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
        </React.Fragment>
    );
    }

};

export default Terms;
