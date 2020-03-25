import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import ChevronLeft from '@material-ui/icons/ArrowBack';
import ChevronRight from '@material-ui/icons/ArrowForward';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/slick.css";

const useStyles = makeStyles(theme => ({
  box : {
    width: "60%",
    maxHeight: 500,
    overflow: "hidden",
    marginTop: 42,
    textDecoration:"none",
    padding:"8px !important",
    backgroundColor: "#FFFFFF",
    margin: "0 auto",
    marginBottom:82,
    borderRadius: 12,
    border: "1px solid #FFFFFF",
      WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    whiteSpace:"pre-wrap",
    "@media only screen and (max-width: 600px)": {
      width:"90% !important"
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
const HeaderSlider = (props) => {
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
  if(props.headers.length>0){
        return (<div className={classes.slider}>
           
                      <Slider {...settings}>
                      {
                props.headers.map((headers,index)=>{
                    return(
                      <div key={index}>
                    <div className={classes.box}>
                        <img style={{width:"100%",maxHeight: 500,}} src={headers.Attachments[0].url} alt=""/>
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

export default HeaderSlider;



  
      