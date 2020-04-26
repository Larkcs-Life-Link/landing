import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/Button';

const useStyles = makeStyles(theme => ({
      box: {
          padding: 24,
        maxWidth:"320px",
        height: "fit-content",
        marginBottom: "52px !important",
        border: "1px solid #ffffff",
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
        boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
        borderRadius: 12,
        "@media only screen and (max-width: 600px)": {
          width: "90%",
        }
      }
}))
const Cards = (props) => {
    const classes = useStyles();
    return (
        <div>
    <GridContainer style={{justifyContent: "center"}}>
            {props.data.map((instance,index)=>{

                return(
                    <div className={classes.box} key={index} style={{margin:"24px"}}>
      <GridItem>
      <Typography variant="h6" style={{maxWidth:500,display:"flex"}} >
     {instance.Icon?<div><img height={50} width={50} style={{marginRight:12}} src={instance.Icon[0].url}/></div>:null}
         {instance.Title?<div style={{fontFamily: "Georgia",fontWeight: "bold"}}>
         {instance.Title}</div>:null}
    </Typography><br/>
        {instance.Content?<Typography variant="h6" style={{fontSize:16,width:"fit-content"}}>
           {instance.Content}
        </Typography>:null}<br/>
        <Link to="/services" style={{textDecoration:"none"}}><Button color="success">Learn More</Button></Link>
        </GridItem></div>
                )
            })}
            </GridContainer>    
        </div>
    );
};

export default Cards;