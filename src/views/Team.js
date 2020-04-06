import React from 'react';
import Group from '@material-ui/icons/Group';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    team: {
        height: 150,
        border: "4px solid #ffffff",
        borderRadius: "50%",
        WebkitBoxShadow: "10px 10px 11px 8px rgba(136,136,136,0.24)",
        boxShadow: "10px 10px 11px 8px rgba(136,136,136,0.24)",
      },
      container: {
          margin:32,
          justifyContent: "center"
      }
}))
const Team = (props) => {
    const classes = useStyles();
    return (
        <div>
             <Typography variant="h6" style={{maxWidth:500,margin:32}}>
         <p style={{fontFamily: "Georgia",fontWeight: "bold"}}>
         <Group style={{color:"#39802D",marginRight:12}} />
           Our Team</p>
    </Typography><br/>
    <GridContainer className={classes.container}>
            {props.data.map((instance,index)=>{
                return(
                    <div key={index} style={{margin:"24px",textAlign:"center"}}>
      <GridItem alignContent="flex-start" alignItems="flex-start" xs={12} sm={6} md={3}>
    <Typography variant="h6" style={{fontSize:16,width:"fit-content"}}>
    <img src={instance.Avatar[0].url} alt=" " className={classes.team}/>
            <p>{instance.Name}</p>
            <p>{instance.Position}</p>
    </Typography>
    <div style={{display:"flex",marginLeft:50}}><FontAwesomeIcon icon={faEnvelope} onClick={()=>{window.open(`mailto:${instance.MailId}`,'_blank');}} style={{cursor:"pointer"}}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faLinkedinIn} onClick={()=>{window.open(instance.LinkedIn,'_blank');}} style={{cursor:"pointer",marginLeft:32}}></FontAwesomeIcon></div>
    <br/><br/><br/></GridItem></div>
                )
            })}
            </GridContainer>    
        </div>
    );
};

export default Team;