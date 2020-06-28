import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import axios from 'axios';
import FlatButton from '@material-ui/core/Button';
import LocationOn from '@material-ui/icons/LocationOn';

const Statistics = (props) => {
    useEffect(() => {
          axios.get('/api/sync/loadFooter')
          .then((response) => {
            setFooter(response.data)
          })
      }, []);
      const [footer, setFooter] = React.useState([]);
    console.log(props.data)
    if(footer.length>0){
        return (<GridContainer style={{marginLeft:24,padding:33,marginBottom:60}}>
            <GridItem xs="12" sm="6" md="5" style={{display:"flex"}}><div><LocationOn/></div><div style={{whiteSpace:"pre-wrap"}}>{footer[0].Notes}</div></GridItem>
            <GridItem xs="12" sm="6" md="5" style={{marginTop:18}}><FlatButton style={{backgroundColor:"#fafafa"}} color="primary">Terms and Conditions</FlatButton></GridItem>
            <GridItem xs="12" sm="6" md="2" style={{marginTop:18}}>© Larkcs Life Link, 2020</GridItem>
 </GridContainer>)
       
    }else{
        return (<div></div>)
    }
};

export default Statistics;