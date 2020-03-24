import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'; 
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";
import FormatQuote from '@material-ui/icons/FormatQuote';
import ChevronLeft from '@material-ui/icons/ArrowBack';
import ChevronRight from '@material-ui/icons/ArrowForward';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/slick.css";

const useStyles = makeStyles(theme => ({
  box : {
    width: "60%",
    marginTop: 42,
    textDecoration:"none",
    padding:35,
    backgroundColor: "#FFFFFF",
    margin: "0 auto",
    marginBottom:82,
    borderRadius: 12,
    border: "1px solid #FFFFFF",
      WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    whiteSpace:"pre-wrap",
    "@media only screen and (max-width: 600px)": {
      maxWidth:"90%"
    }
  },
  slider:{
    border: "none",
    outline:"none"
  },
  avatar: {
    margin:"0 auto",
    height:100,
    width:100
  },
  typography:{
    textAlign:"center",
    margin:"0 auto"
  }
}))
const Career = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />
  };
  const classes = useStyles();
  if(props.stories.length>0){
        return (<React.Fragment className={classes.slider}>
           
                      <Slider {...settings}>
                      {
                props.stories.map((stories)=>{
                    return(
                      <div>
                    <div className={classes.box}>
                    {stories.Avatar? <Avatar src={stories.Avatar[0].url} aria-label="recipe" className={classes.avatar}/>:<Avatar aria-label="recipe" className={classes.avatar}>
      {stories.Author.charAt(0)}
          </Avatar>}
          <Typography variant="h6" className={classes.typography}>
          {stories.Author}
          </Typography>
          <div className={classes.typography}>
          {stories.Position}
          </div><br/><br/>
          <div style={{margin:"0 auto !important",textAlign:"center"}}><div><FormatQuote/></div> <div>{stories.Message}</div> </div><br/><br/>
                    </div>
                    </div>
                     )
                    })
                }
                    </Slider>  
                    <br/><br/>
        </React.Fragment>)
  }else{
    return (<div></div>)
  }}

export default Career;



  
      