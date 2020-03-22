import React, {useEffect } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Typography from '@material-ui/core/Typography';
import {logoStyle,titleStyle} from "../assets/landingStyle";
import LinearProgress from '@material-ui/core/LinearProgress';
import LocationOn from '@material-ui/icons/LocationOn';
import Button from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles(theme => ({
  box : {
    width: "70%",
    padding:32,
    margin: "0 auto",
    marginBottom:42,
      border: "1px solid #ffffff",
      WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    borderRadius: 12
  }
}))
const Career = () => {
  useEffect(() => {
    axios.get('/api/sync/loadCareer')
    .then( (response)=> {
      setPostings(response.data)
      setLoading(false)
      console.log(response.data)
    })
  },[]);
  const [postings, setPostings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const classes = useStyles();
      if (loading===true){
        return(<React.Fragment><Helmet>
          <title>Career | Larkcs Life Link</title>
          <meta name="description" content="Larkcs Life Link Career page" />
      </Helmet>
      <LinearProgress />
      </React.Fragment>)
      }else{
        return(
        <div>
          <Helmet>
          <title>Career | Larkcs Life Link</title>
          <meta name="description" content="Larkcs Life Link Career page" />
          </Helmet>
         <Typography variant="h6" color="inherit">
         <img src={logo} alt="" style={logoStyle}/>
         <p style={titleStyle}>LARKCS</p>
       </Typography><br/>
       <Typography style={{margin:"0 auto",textAlign:"center",fontSize:24}} variant="h6">
         <p>Job Openings</p>
         </Typography><br/><br/>
  <div className={classes.box}>
{
(postings.length>0)?
  postings.map((post,index)=>{
    return(
      <React.Fragment key={index}>
         <Typography style={{fontSize:18}} variant="h6">
           <p>{post.opening}</p>
         </Typography>
         <Typography style={{fontSize:14}} variant="subtitle1">
           <span>{post.jobType},<span><LocationOn style={{marginLeft:12,marginBottom:-6}}/>{post.location}</span></span>
         </Typography><br/><br/>
         <Link to={{pathname: `/apply/${post.link}/`}} style={{textDecoration:"none"}}>
           <Button color="success">Apply Now</Button></Link><br/><br/><br/>
         <Typography variant="subtitle1">About the Role</Typography><hr/><br/>
         <Typography>{post.description}</Typography><br/><br/>
         <Typography variant="subtitle1">What You'll Do</Typography><hr/><br/>
         <Typography component={'span'}>
          <ul>  
          {post.responsibilities.map((points,index)=>{
            return(
            <li key={index}>{points}</li>
            )
          })}
          </ul>
              <br/>
          <em style={{fontSize:12}}><strong>NB:</strong> 
          {post.NB}
          </em>
  
  
         </Typography><br/><br/>
         <Link to={{pathname: '/apply/'+post.link+'', about: { title: 'Apply for Business Development Executive (BDE): Intern'}}} style={{textDecoration:"none"}}>
           <Button color="success">Apply Now</Button></Link><br/><br/>
           
      </React.Fragment>
    )
  }): null
}
</div>
      </div>)}
};

export default Career;
