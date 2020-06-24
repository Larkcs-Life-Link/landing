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
        maxWidth:"500px",
        marginBottom: "52px !important",
        border: "1px solid #ffffff",
        WebkitBoxShadow: "10px 10px 21px 20px rgba(136,136,136,0.05)",
        boxShadow: "10px 10px 21px 20px rgba(136,136,136,0.05)",
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
                    <div className={classes.box} style={{margin:"24px",textAlign:"center"}}>
      <GridItem>
          <Typography variant="h6" style={{fontSize:20,margin:"0 auto",fontWeight: "bold"}}>
           {props.data[0].Name}
        </Typography><br/>
        <Typography variant="h6" style={{fontSize:16,width:"fit-content",
        minHeight:"175px",}}>
            {props.data[0].Content}
        </Typography><br/>
        <Button color="success" onClick={()=>{window.open(props.data[0].url,'_blank');}}>Read our Blog</Button>
        </GridItem></div>
        <div className={classes.box} style={{margin:"24px",textAlign:"center"}}>
      <GridItem>
          <Typography variant="h6" style={{fontSize:20,fontWeight: "bold"}}>
           Gallery
        </Typography><br/>
        <GridContainer style={{minHeight:"200px",justifyContent: "center"}}>
            {props.images.map((image,index)=>{
               return  <div key={index} style={{maxWidth:190,textAlign:"center"}}>
                   <GridItem style={{padding:5}}><img width={150} src={image.Attachments[0].thumbnails.large.url} alt=""/></GridItem>
                   </div>
            })}
        </GridContainer>
        <Link to="/gallery" style={{textDecoration:"none"}}>
        <Button color="success">View Gallery</Button></Link>
        </GridItem></div>
            </GridContainer>    
        </div>
    );
};

export default Cards;