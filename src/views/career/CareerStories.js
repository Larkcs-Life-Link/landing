import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'; 
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  box : {
    width: "80%",
    padding:0,
    backgroundColor: "#FFFFFF",
    margin: "0 auto",
    marginBottom:82,
    borderRadius: 12,
    border: "1px solid #FFFFFF",
      WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.14)",
    boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    whiteSpace:"pre-wrap",
    "@media only screen and (max-width: 600px)": {
      width: "95%",
    }
  }
}))
const Career = (props) => {
  const classes = useStyles();
  if(props.stories.length>0){
        return (<React.Fragment>
            {
                props.stories.map((stories)=>{
                    return(<div className={classes.box}>
                        <CardHeader
        avatar={stories.Avatar? <Avatar src={stories.Avatar[0].url} aria-label="recipe" className={classes.avatar}/>:<Avatar aria-label="recipe" className={classes.avatar}>
      {stories.Author.charAt(0)}
          </Avatar>}
        title={stories.Author}
        subheader={stories.Position}
      />
       <CardContent>
        <Typography>
          {stories.Message}
        </Typography>
      </CardContent>
                    </div>)
                })
            }
            
        </React.Fragment>)
  }else{
    return (<div></div>)
  }}

export default Career;
