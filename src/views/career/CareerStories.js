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
    width: "30%",
    marginTop: 42,
    textDecoration:"none",
    paddingTop:35,
    backgroundColor: "#FFFFFF",
    margin: "0 auto",
    marginBottom:82,
    borderRadius: 12,
    border: "1px solid #FFFFFF",
      WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    whiteSpace:"pre-wrap",
    "@media only screen and (max-width: 600px)": {
      width: "90%",
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
    autoplaySpeed: 2500,
    pauseOnHover: false,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />
  };
  const classes = useStyles();
  if(props.data.length>0){
        return (<div className={classes.slider}>
           
                      <Slider {...settings}>
                      {
                props.data.map((instance,index)=>{
                    return(
                      <div key={index}>
                    <div className={classes.box}>
                    {instance.Avatar? <Avatar src={instance.Avatar[0].url} aria-label="recipe" className={classes.avatar}/>:<Avatar aria-label="recipe" className={classes.avatar}>
      {instance.Name.charAt(0)}
          </Avatar>}
          <Typography variant="h6" className={classes.typography}>
          {instance.Name}
          </Typography>
          {instance.Subtitle?<div className={classes.typography}>
          {instance.Subtitle}
          </div>:null}<br/><br/>
          <div style={{textAlign:"center"}}><div><FormatQuote/></div> <div style={{margin:"0 auto",maxWidth:"90%"}}>{instance.Message}</div> </div><br/><br/>
                    </div>
                    </div>
                     )
                    })
                }
                    </Slider>  
                    <br/><br/>
        </div>)
  }else{
    return (<div></div>)
  }}

export default Career;



  
      