import React, { useEffect } from 'react';
import remote from '../assets/images/remote-team.svg';
import Typography from '@material-ui/core/Typography';
import { box } from "../assets/js-styles/landingStyle";
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Form from '../components/Form';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Apply = (props) => {
  const path = props.location.pathname ? props.location.pathname.slice(6).replace(/\//g, "") : "";
  useEffect(() => {
    let array = [];

    axios.all([
      axios.post('/api/sync/loadApplicationDetails', { url: path }).then((response) => {
        setTitle(response.data[0].opening);
        setmailContent(response.data[0].mailContent)
        axios.post('/api/sync/loadFieldDetails', { values: response.data[0].Fields }).then((res) => {
          setData(res.data);
        })
      }),
      axios.get('/api/sync/loadAbout')
        .then((response) => {
          console.log(response.data)
          setPhn(response.data);
        }),
      axios.get('/api/sync/loadMediaLinks')
        .then((response) => {
          console.log(response.data)
          setMedia(response.data);
        })
    ])
      .then(axios.spread(function () {
        setLoading(false)
      }))
  }, []);
  const [data, setData] = React.useState([]);
  const [media, setMedia] = React.useState([]);
  const [phn, setPhn] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [mailContent, setmailContent] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  if (loading === true) {
    return (<LinearProgress />)
  } else {
    return (
      <React.Fragment>
        <Header phn={phn[0].BookingNo} />
        <Typography style={{ margin: "0 auto", textAlign: "center", fontSize: 18 }} variant="h6">
          <p>{title}</p>
        </Typography><br /><br />
        <div style={box}>
          <GridContainer><GridItem xs={12} sm={12} md={6}><img src={remote} alt=""></img></GridItem> <GridItem xs={12} sm={12} md={6}>
            <Form url={path} data={data} opening={title} mailContent={mailContent} />
          </GridItem></GridContainer>

        </div>
        <Footer data={media} />
      </React.Fragment>
    )
  }
}

export default Apply;