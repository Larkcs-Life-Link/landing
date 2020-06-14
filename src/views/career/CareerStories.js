import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
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
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    marginTop: 42,
    minHeight: 500,
    textDecoration: "none",
    paddingTop: 35,
    paddingLeft: 12,
    paddingRight: 12,
    background: "#373d42",
    color: "white",
    margin: "0 auto",
    marginBottom: 82,
    borderRadius: 12,
    border: "1px solid #FFFFFF",
    WebkitBoxShadow: "10px 10px 21px 20px rgba(136,136,136,0.07)",
    boxShadow: "10px 10px 21px 20px rgba(136,136,136,0.07)",
    whiteSpace: "pre-wrap",
    "@media only screen and (max-width: 600px)": {
      width: "80%",
      minHeight: 720,
    }
  },
  slider: {
    border: "none",
    outline: "none"
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginLeft:24
  },
  typography: {
    textAlign: "left",
    marginLeft: 12,
    fontWeight: 500,
    marginBottom: 8
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
    autoplaySpeed: 15000,
    pauseOnHover: false,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />
  };
  const classes = useStyles();
  if (props.data.length > 0) {
    return (<div className={classes.slider}>

      <Slider {...settings}>
        {
          props.data.map((instance, index) => {
            return (
              <div key={index}>
                <div id={instance.boxColor} className={classes.box}>
                  <div>
                  {instance.Message ? <div><div><FormatQuote id={instance.iconColor} style={{ display: "block", fontSize: instance.iconSize, margin:"0 auto" }} /></div>
                    <br/><div style={{ margin: "0 auto", maxWidth: "90%",lineHeight:2,fontSize: instance.messageSize }}>{instance.Message}</div><br />
                    <Divider style={{ maxWidth: "80%", margin: "0 auto" }} /><br />
                    <div style={{ display: "flex"}}>
                      {instance.Avatar ? <Avatar style={{}} src={instance.Avatar[0].url} aria-label="recipe" className={classes.avatar} /> : <Avatar aria-label="recipe" className={classes.avatar}>
                        {instance.Name.charAt(0)}
                      </Avatar>}
                      <div>
                      {instance.Name ? <div className={classes.typography} style={{fontSize: instance.authorSize}} >
                        {instance.Name}
                        </div> : null}
                      {instance.Subtitle ? <div className={classes.typography} style={{fontSize: instance.subtitleSize}} >
                        {instance.Subtitle}
                      </div> : null}</div></div><br />
                  </div> : null}
                  <br /><br />
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
      <br /><br />
    </div>)
  } else {
    return (<div></div>)
  }
}

export default Career;




