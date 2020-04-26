import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { logoStyle, titleStyle } from "../assets/landingStyle";
import logo from '../assets/images/logo.png';
import IconButton from '@material-ui/core/IconButton';
import MenuRounded from '@material-ui/icons/MenuRounded';
import Phone from '@material-ui/icons/Phone';
import Button from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin : {
        marginLeft: "30%",
        marginTop: -78,
      },
      float: {
        float: "right",
        marginRight: 24
      },
      display: {
        "@media only screen and (max-width: 600px)": {
          display: "none"
        }
      },
      header: {
          padding: 12,
          position: "fixed",
          width:"100%",
          minHeight: 50,
          zIndex: 2,
          top: "0px !important",
          minHeight: "50px",
          backgroundColor: "#fff",
          WebkitBoxShadow: "10px 10px 11px 10px rgba(136,136,136,0.10)",
          boxShadow: "10px 10px 11px 10px rgba(136,136,136,0.10)",
      }
}))
function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <Typography variant="h6" color="inherit">
            <Link to='/home' style={{textDecoration:"none",color:"#000000"}}><img src={logo} alt="" style={logoStyle} /></Link>
          <Link to='/home' className={classes.display} style={{textDecoration:"none",color:"#000000"}}><p style={titleStyle}>Larkcs Life Link</p></Link>
        </Typography><br />
        <div className={classes.margin}>
                   
        {props.menu?
        <div className={classes.float}><Button color="success" onClick={props.handleClickOpen}>Download App</Button>
          <Button className={classes.display} color="info"  onClick={()=>{window.open(`tel:${props.phn}`,'_blank');}} ><Phone style={{marginRight:6}}/>Call us for booking</Button>

                   <IconButton aria-describedby={props.id} variant="contained" onMouseEnter={props.handleClick} onClick={props.handleClick}>
                     
                   <MenuRounded/></IconButton></div>
                :
                null
                }
                   
                   </div>
                   
        </div>
    );
}

export default Header;