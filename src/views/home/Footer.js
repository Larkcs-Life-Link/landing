import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { LocationOnSharp } from '@material-ui/icons';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

const Statistics = (props) => {
    return (<GridContainer style={{ marginBottom: 44,marginLeft: "5%",padding: 24 }}>
       <GridItem xs={12} sm={6} md={4}>
                <div style={{display: 'flex'}}>
                <div><LocationOnSharp/></div>
                <div style={{whiteSpace: 'pre-wrap'}}>
               {props.data[0].Notes}
                </div>
                </div>
                <br/>
            </GridItem>
        <GridItem xs={12} sm={6} md={4}>
        <Link to="/terms&conditions" style={{textDecoration:"none",color:"#1C1C1C"}}>
            <Button color="primary" style={{ backgroundColor:"#f5f5f5" }}>Terms and Conditions</Button></Link>
        <br/><br/>
            </GridItem> 
            <GridItem xs={12} sm={6} md={4}>
            ©️ Larkcs Life Link, 2020
            </GridItem>
    </GridContainer>)
};

export default Statistics;