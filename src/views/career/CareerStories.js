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
    minHeight: 400,
    textDecoration: "none",
    paddingTop: 35,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#FFFFFF",
    margin: "0 auto",
    marginBottom: 82,
    borderRadius: 12,
    border: "1px solid #FFFFFF",
    WebkitBoxShadow: "10px 10px 21px 20px rgba(136,136,136,0.07)",
    boxShadow: "10px 10px 21px 20px rgba(136,136,136,0.07)",
    whiteSpace: "pre-wrap",
    "@media only screen and (max-width: 600px)": {
      width: "80%",
      minHeight: 500,
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
    marginLeft: 12
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
                <div className={classes.box}>
                  <div>
                  {instance.Message ? <div><div><FormatQuote style={{ display: "block", color: "#4CAF50", fontSize: 52, marginLeft: "4%" }} /></div>
                    <br/><div style={{ margin: "0 auto", maxWidth: "90%",lineHeight:2 }}>{instance.Message}</div><br />
                    <Divider style={{ maxWidth: "80%", margin: "0 auto" }} /><br />
                    <div style={{ display: "flex"}}>
                      {instance.Avatar ? <Avatar style={{}} src={instance.Avatar[0].url} aria-label="recipe" className={classes.avatar} /> : <Avatar aria-label="recipe" className={classes.avatar}>
                        {instance.Name.charAt(0)}
                      </Avatar>}
                      <div>
                      {instance.Name ? <Typography variant="h6" style={{fontSize:16}} className={classes.typography}>
                        {instance.Name}
                      </Typography> : null}
                      {instance.Subtitle ? <div className={classes.typography} style={{fontSize:14}} >
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




