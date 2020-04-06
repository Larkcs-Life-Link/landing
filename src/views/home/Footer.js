import React from 'react';
import { Typography } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CountUp from 'react-countup';

const Statistics = (props) => {
    
    console.log(props.data)
    if(props.data.length>0){
        return (<GridContainer style={{margin:24,padding:24}}>
{
     props.data.map((instance,index)=>{
        return (
            <div key={index} style={{margin:"14px auto",textAlign:"center"}}>
                <GridItem>
        <Typography style={{fontSize:18,fontWeight:700,whiteSpace:"pre-wrap"}} variant="h6">
            {instance.Notes}
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