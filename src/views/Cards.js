import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/Button';

const useStyles = makeStyles(theme => ({
    team: {
        height: 150,
        border: "4px solid #ffffff",
        borderRadius: "50%",
        WebkitBoxShadow: "10px 10px 11px 8px rgba(136,136,136,0.24)",
        boxShadow: "10px 10px 11px 8px rgba(136,136,136,0.24)",
      },
      container: {
          margin:32
      },
      box: {
          padding: 24,
        maxWidth:"320px",
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
    <GridContainer className={classes.container}>
            {props.data.map((instance,index)=>{
                return(
                    <div className={classes.box} key={index} style={{margin:"24px",textAlign:"center"}}>
      <GridItem>
          <Typography variant="h6" style={{fontSize:20,margin:"0 auto",fontWeight: "bold"}}>
           {instance.Title}
        </Typography><br/>
        <Typography variant="h6" style={{fontSize:16,width:"fit-content",minWidth:"300px",
        minHeight:"200px",}}>
           {instance.Content}
        </Typography><br/>
        <Link to='/services' style={{textDecoration:"none"}}><Button color="success">Learn More</Button></Link>
        </GridItem></div>
                )
            })}
            </GridContainer>    
        </div>
    );
};

export default Cards;