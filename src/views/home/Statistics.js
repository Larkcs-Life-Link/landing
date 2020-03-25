import React from 'react';
import { Typography } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
const Statistics = (props) => {
    console.log(props.Statistics)
    if(props.data.length>0){
        return (<div style={{display:"flex"}}><GridContainer>
{
     props.data.map((instance,index)=>{
        return (
            <div key={index} style={{textAlign:"center",margin:24}}>
                <GridItem>
                <img width={54} height={54} src={instance.Icon[0].url} alt=""/><br/>
        <Typography style={{fontSize:16}} variant="h6">{instance.Title}</Typography>
        <Typography style={{fontSize:16}} variant="h6">{instance.Data}</Typography>
        </GridItem>
   
            </div>
        );
    })
} </GridContainer>
        </div>)
       
    }else{
        return (<div></div>)
    }
};

export default Statistics;