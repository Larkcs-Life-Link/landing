import React, {useEffect} from 'react';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {container,headerStyle} from '../assets/landingStyle';
import Header from '../components/Header';
import Team from './Team'
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles(theme => ({
    image: {
        margin:32,
        "@media only screen and (max-width: 600px)": {
          maxWidth: "100%",
          margin:"0 auto"
        }
      },
      hide: {
        width:"80%",
        "@media only screen and (min-width: 600px)": {
          display: "none"
        }
      },
      box: {
        maxHeight: 250,
        maxWidth: 450,
        "@media only screen and (min-width: 600px)": {
          margin:32,
          border: "1px solid #ffffff",
          WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
        boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
        borderRadius: 12
        }
      }
}))

const style={
  image: {
      height: 46,
      width: 46,
      margin: 32,
      cursor: "pointer"
  }
}
const Services = () => {
    useEffect(() => {
        axios.all([
            axios.get('/api/sync/loadAboutDetail')
            .then( (response)=> {
              console.log(response.data)
              setAbout(response.data);
            }),
            axios.get('/api/sync/loadTeam')
            .then( (response)=> {
              console.log(response.data)
              setTeam(response.data);
            })
        ])
        .then(axios.spread(function () {
            setLoading(false)
           }))
      }, []);
     
      const [loading, setLoading] = React.useState(true);
      const [about, setAbout] = React.useState([]);
      const [team, setTeam] = React.useState([]);
    const classes = useStyles();
    if (loading===true){
      return(<LinearProgress />)
    }else{
      return (
        <React.Fragment>
          <Header/><br/><br/><br/><br/><br/>
          <Typography style={{textAlign:"center",fontFamily: "Georgia",
  fontWeight: "bold",
      fontSize: 24}} variant="h6">{about[0].Title}</Typography><br/><br/><br/>
      <div style={container}>
             {about.map((about,index)=>{
        return(
            <React.Fragment  key={index}>
         {index!=0? <React.Fragment><Typography variant="h6" style={{maxWidth:500,margin:12}}>
        <p style={{fontFamily: "Georgia",fontWeight: "bold"}}> <DoubleArrow style={{color:"#39802D",marginRight:12,marginBottom:-4}} />{about.Title}</p>
    </Typography></React.Fragment>:null}
    <GridContainer>
    <GridItem xs={12} sm={12} md={about.VideoLink?6:10}>
    <Typography variant="subtitle1" style={{margin:32}}>
      <p>{about.Content}</p>
    </Typography>
    </GridItem>
     {about.VideoLink?
     <GridItem xs={12} sm={12} md={6}>
     <div className={classes.box}>
     <iframe src={about.VideoLink} title="Larkcs" style={{margin:10,borderRadius:12}} width="95%" height="250" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>
    </GridItem>: null
     }
    </GridContainer>
    
    </React.Fragment>
        )
        
      })}
      <Team data={team}/>
      </div>
        </React.Fragment>
    );
    }

};

export default Services;