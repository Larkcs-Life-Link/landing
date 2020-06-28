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
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';

const useStyles = makeStyles(theme => ({
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
          height: 55,
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
          <GridContainer>
            <GridItem xs={4} sm={3} md={8}>
            <Typography variant="h6" color="inherit" style={{maxWidth:150}}>
            <Link to='/home' style={{textDecoration:"none",color:"#000000"}}><img src={logo} alt="" style={logoStyle} /></Link>
          <Link to='/home' style={{textDecoration:"none",color:"#000000"}}><p style={titleStyle}>Larkcs</p></Link>
        </Typography></GridItem><br />
        <GridItem xs={8} sm={9} md={4}>
        {props.menu?
        <div className={classes.float}>
          {!props.openPop? <Link to="/download" style={{textDecoration:"none",color:"#1C1C1C"}}><Button className={classes.display} color="success">Download App</Button></Link>
          :          <Button className={classes.display} color="success" onClick={props.handleClickOpen}>Download App</Button>
        }
          <Button className={classes.display} color="info"  onClick={()=>{window.open(`tel:${props.phn}`);}} ><Phone style={{marginRight:6}}/>Call us for booking</Button>

                   <IconButton aria-describedby={props.id} variant="contained" onMouseEnter={props.handleClick} onClick={props.handleClick}>
                     
                   <MenuRounded/></IconButton></div>
                :
                null
                }
                </GridItem>
                   </GridContainer>  
        </div>
    );
}

export default Header;