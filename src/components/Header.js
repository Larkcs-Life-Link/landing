import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { logoStyle, titleStyle } from "../assets/landingStyle";
import logo from '../assets/images/logo.png';
import IconButton from '@material-ui/core/IconButton';
import MenuRounded from '@material-ui/icons/MenuRounded';
import Button from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin : {
        marginLeft: "20%",
        marginTop: -78,
        "@media only screen and (min-width: 800px)": {
          marginLeft:"75%"
        }
      },
      header: {
          padding: 12,
          position: "fixed",
          width:"100%",
          minHeight: 50,
          zIndex: 1,
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
          <img src={logo} alt="" style={logoStyle} />
          {!props.menu?<Link to='/home' style={{textDecoration:"none",color:"#000000"}}><p style={titleStyle}>LARKCS</p></Link>:null}
        </Typography><br />
        <div className={classes.margin}>
                   
        {props.menu?<div><Button color="success" onClick={props.handleClickOpen}>Download App</Button>

                   
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