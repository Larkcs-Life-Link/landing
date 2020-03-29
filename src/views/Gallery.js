import React, {useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';


const useStyles = makeStyles(theme => ({
    container: {
        "@media only screen and (max-width: 600px)": {
            textAlign: "center"
          }
    },
    mainImage: {
        maxHeight: 280,
        maxWidth: 400,
        margin: "2em",
        "@media only screen and (max-width: 600px)": {
          maxWidth: "80%",
        }
    },
    containedImages: {
        maxHeight: 280,
        maxWidth: "90%",
        margin: 12,
        "@media only screen and (max-width: 600px)": {
            textAlign: "center"
          }
    },
    events: {
        display:"block",
        padding: "0px 0px 0px",
        "@media only screen and (max-width: 600px)": {
            textAlign: "center"
          }
    }
  }));


const Career = () => {
  useEffect(() => {
    axios.get('/api/sync/loadGallery')
    .then( (response)=> {
      var result = response.data.reduce( (acc, obj) => {
        acc[obj.Name] = acc[obj.Name] || [];
        acc[obj.Name].push(obj);
        return acc;
    }, {});
      setData(result)
      setLoading(false)
    })
    
  },[]);

  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
      if (loading===true){
        return(<React.Fragment><Helmet>
          <title>Gallery | Larkcs Life Link</title>
          <meta name="description" content="Larkcs Life Link Gallery page" />
      </Helmet>
      <LinearProgress />
      </React.Fragment>)
      }else{
          return(
              <div>
                    <Header menu={false}/>
                    <br/><br/><br/><br/><br/>
{
     Object.entries(data).map(function(key, values) {
         if(key[0]=="Main"){
            return(
                <div className={classes.container}>
                 {key[1].map(img=>{
                       return(<img  className={classes.mainImage} src={img.Attachments[0].url} alt=" "/>)
                    })}
              </div>)
         }else{
            return(
                <React.Fragment>
                  <ExpansionPanel style={{margin:24, border: "1px solid #ffffff",
    WebkitBoxShadow: "10px 10px 11px 10px rgba(136,136,136,0.24)",
  boxShadow: "10px 10px 11px 10px rgba(136,136,136,0.24)"}} defaultExpanded={true}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{key[0]}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.events}>
            {key[1].map(img=>{
                       return(<img className={classes.containedImages} src={img.Attachments[0].url} alt=" "/>)
                    })}
            </ExpansionPanelDetails>
          </ExpansionPanel>
              </React.Fragment>)
         }
        
      })
}
              </div>
          )
       }
};

export default Career;
