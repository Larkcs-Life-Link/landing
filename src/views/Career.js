import React, { useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Typography from '@material-ui/core/Typography';
import { logoStyle, titleStyle } from "../assets/landingStyle";
import LinearProgress from '@material-ui/core/LinearProgress';
import LocationOn from '@material-ui/icons/LocationOn';
import Button from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import CareerStories from './career/CareerStories';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardHeader from '@material-ui/core/CardHeader';
import Join from './career/Join';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import FlatButton from '@material-ui/core/Button';

const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop,
  bottom: 0,
  behavior: 'smooth'
});

const useStyles = makeStyles(theme => ({
  box: {
    width: "70%",
    margin: "0 auto !important",
    marginBottom: "52px !important",
    border: "1px solid #ffffff",
    WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    borderRadius: 12,
    "@media only screen and (max-width: 600px)": {
      width: "90%",
    }
  },
  ExpansionPanelDetails: {
    display: "block"
  },
  button: {
    textDecoration: "none"
  },
  hide: {
    width:"80%",
    "@media only screen and (min-width: 600px)": {
      display: "none"
    }
  }
}))
const Career = () => {
  const myRef = useRef(null)
  const executeScroll = () => {scrollToRef(myRef)}

  useEffect(() => {
    axios.get('/api/sync/loadCareer')
      .then((response) => {
        axios.get('/api/sync/loadStories')
        .then((response) => {
          axios.get('/api/sync/loadDescription')
           .then((response) => {
            setDescription(response.data)
            setLoading(false)
             console.log(response.data)
              })
          setStories(response.data)
          console.log(response.data)
        })
        setPostings(response.data)
        console.log(response.data)
      })
  }, []);
  const [postings, setPostings] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [description, setDescription] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();
  if (loading === true) {
    return (<React.Fragment><Helmet>
      <title>Career | Larkcs Life Link</title>
      <meta name="description" content="Larkcs Life Link Career page" />
    </Helmet>
      <LinearProgress />
    </React.Fragment>)
  } else {
    return (
      <div>
        <Helmet>
          <title>Career | Larkcs Life Link</title>
          <meta name="description" content="Larkcs Life Link Career page" />
        </Helmet>
        <Typography variant="h6" color="inherit">
          <img src={logo} alt="" style={logoStyle} />
          <p style={titleStyle}>LARKCS</p>
        </Typography><br />
        <Join description={description} callback={executeScroll}/>
        <Typography style={{  textAlign: "center", fontSize: 24 }} variant="h6" ref={myRef}>
          <p>Job Openings</p>
        </Typography><br /><br />
        {
          (postings.length > 0) ?
            postings.map((post, index) => {
              return (
                <div key={index}>
                  <ExpansionPanel className={classes.box}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <CardHeader
                        title={<Typography
                          onClick={event => event.stopPropagation()}
                          onFocus={event => event.stopPropagation()} style={{ fontSize: 17 }} variant="h6">{post.opening}</Typography>}
                        subheader={<Typography style={{ fontSize: 14}}><span>{post.jobType},<span><LocationOn style={{ marginLeft: 12, marginBottom: -6 }} />{post.location}</span></span>
                          <br/><br/><Link to={{ pathname: `/apply/${post.link}/` }} className={classes.button}>
                            <Button color="success">Apply Now</Button></Link>
                            <FlatButton color="#00000" style={{margin:12,backgroundColor:"#F5F5F5"}}>Learn More</FlatButton>
                        </Typography>}
                      />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.ExpansionPanelDetails}><br />
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={post.VideoLink?6:12}><Typography variant="subtitle1">About the Role</Typography><hr /><br />
                      <Typography>{post.description}</Typography></GridItem>
                      {post.VideoLink?<GridItem xs={12} sm={12} md={post.VideoLink?6:12} style={{marginTop:42}}>
                    <div className={classes.box}>
                    <iframe style={{marginTop:42}} src={post.VideoLink} title="Larkcs" style={{margin:10,borderRadius:12}} width="95%" height="auto" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div></GridItem>: null}
                    </GridContainer>
                      <br /><br />
                      <Typography variant="subtitle1">What You'll Do</Typography><hr /><br />
                      <Typography component={'span'}>
                        <ul>
                          {post.responsibilities.map((points, index) => {
                            return (
                              <li key={index}>{points}</li>
                            )
                          })}
                        </ul>
                        <br />
                        <em style={{ fontSize: 12 }}><strong>NB:</strong>
                          {post.NB}
                        </em>
                      </Typography><br /><br />
                      <Link to={{ pathname: `/apply/${post.link}/` }} style={{ textDecoration: "none" }}>
                        <Button color="success">Apply Now</Button></Link><br /><br />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              )
            }) : null
        }
        <Typography style={{  textAlign: "center", fontSize: 24 }} variant="h6">
         <p>Hear from our Employees!</p>
       </Typography>
        <CareerStories stories={stories} />
      </div>)
  }
};

export default Career;



