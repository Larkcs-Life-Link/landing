import React from 'react';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import FlatButton from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
      box: {
          padding: 24,
        maxWidth:"320px",
        minHeight: 350,
        height: "fit-content",
        marginBottom: "52px !important",
        border: "1px solid #ffffff",
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
        boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
        borderRadius: 12,
        "@media only screen and (max-width: 600px)": {
          width: "90%",
        }
      },
      icon: {
        WebkitBoxShadow: "10px 10px 11px 8px rgba(136,136,136,0.14)",
        boxShadow: "10px 10px 11px 8px rgba(136,136,136,0.14)",
        borderRadius: "50%",
        padding:5,
        height: 50, 
        width: 55,
        marginRight:24
      }
}))
const Cards = (props) => {
    const handleClassName = (index)=>{
        switch(index) {
            case 0:
              return 'blue-neon'
              break;
              case 1:
                return 'green-neon'
                break;
                case 2:
              return 'pink-neon'
              break;
              case 3:
              return 'yellow-neon'
              break;
              case 4:
              return 'violet-neon'
              break;
            default:
                return 'black-neon'
          }
        }
        const handleColor = (index)=>{
            switch(index) {
                case 0:
                  return {color:'#00b8d4',backgroundColor:"#f5f5f5"}
                  break;
                  case 1:
                    return {color:'#fb8c00',backgroundColor:"#f5f5f5"}
                    break;
                    case 2:
                  return {color:'#FE53BB',backgroundColor:"#f5f5f5"}
                  break;
                  case 3:
                  return {color:'#F5D201',backgroundColor:"#f5f5f5"}
                  break;
                  case 4:
                  return {color:'#7122FA',backgroundColor:"#f5f5f5"}
                  break;
                default:
                    return {color:'green',backgroundColor:"#f5f5f5"}
              }
            }
    const classes = useStyles();
    return (
        <div>
    <GridContainer style={{justifyContent: "center"}}>
            {props.data.map((instance,index)=>{

                return(
                    <div className={classes.box} key={index} style={{margin:"24px"}}>
                         {instance.Icon?<div className={classes.icon}><img style={{margin:"0 auto",width: "inherit",height: "inherit"}} src={instance.Icon[0].url}/></div>:null}
      <GridItem><br/>
      <Typography variant="h6" style={{maxWidth:500}} >
         {instance.Title?<div style={{fontFamily: "Georgia",fontWeight: "bold"}}>
         {instance.Title}</div>:null}
    </Typography><br/>
    <Divider id={handleClassName(index)}/><br/>
        {instance.Content?<Typography variant="h6" style={{fontSize:16,width:"fit-content"}}>
           {instance.Content}
        </Typography>:null}<br/>
        <Link to="/services" style={{textDecoration:"none"}}><FlatButton style={handleColor(index)}>Learn More</FlatButton></Link>
        </GridItem></div>
                )
            })}
            </GridContainer>    
        </div>
    );
};

export default Cards;