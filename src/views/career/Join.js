import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '../../components/Button';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import FormatQuote from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles(theme => ({
  box : {
    width: "80%",
    padding:12,
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    margin: "0 auto",
    marginBottom:62,
    borderRadius: 12,
    border: "1px solid #FFFFFF",
      WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    whiteSpace:"pre-wrap",
    "@media only screen and (max-width: 600px)": {
      width: "90%",
    }
  },
  hide: {
    width:"80%",
    "@media only screen and (min-width: 600px)": {
      display: "none"
    }
},
typography: {
  maxWidth:500,
  margin:32,
  marginLeft: 75,
  "@media only screen and (max-width: 600px)": {
   marginLeft: 24
  }
}
}))
const Join = (props) => {
  const classes = useStyles();
  if(props.description.length>0){
        return (<React.Fragment><Typography variant="h6" className={classes.typography}>
        <p style={{fontFamily: "Georgia",fontWeight: "bold"}}>Join US 😃</p>
        </Typography>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
        <div className={classes.box}>
            <img style={{height:"90%",width:"100%"}} src={props.description[0].HeaderImage[0].url} alt=""/>
        </div>
        </GridItem> 
        <GridItem xs={12} sm={12} md={6}>
        <Typography variant="subtitle1" style={{maxWidth:500,margin:32,whiteSpace:"pre-wrap",}}>
         <p> {props.description[0].content}</p>
        </Typography><hr className={classes.hide}/>
        <Typography variant="h6" style={{padding:12,marginLeft: 28}}>
         <div style={{display:"flex"}}><div><FormatQuote/></div> <div>{props.description[1].content}</div> </div><br/>
         <Button color="success" onClick={props.callback}>See All Openings</Button>
        </Typography><br/>
        </GridItem>
       </GridContainer></React.Fragment>)
  }else{
    return (<div></div>)
  }}

export default Join;
