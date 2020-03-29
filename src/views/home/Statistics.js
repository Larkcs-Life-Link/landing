import React from 'react';
import { Typography } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CountUp from 'react-countup';

const Statistics = (props) => {
    
    console.log(props.Statistics)
    if(props.data.length>0){
        return (<GridContainer style={{margin:24,padding:24}}>
{
     props.data.map((instance,index)=>{
        return (
            <div key={index} style={{margin:"14px auto",textAlign:"center"}}>
                <GridItem>
                <img width={54} height={54} src={instance.Icon[0].url} alt=""/><br/>
        <Typography style={{fontSize:16}} variant="h6">{instance.Title}</Typography><br/>
        <Typography style={{fontSize:18,fontWeight:700}} variant="h6"><CountUp delay={4} duration={2} end={instance.Data} />
        </Typography>
        
        </GridItem>
   
            </div>
        );
    })
} </GridContainer>)
       
    }else{
        return (<div></div>)
    }
};

export default Statistics;