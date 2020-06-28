import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import axios from 'axios';
import FlatButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faInstagram,faTwitter,faWhatsapp,faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const useStyles = makeStyles(theme => ({
    container: {
        margin: "0 auto",
        marginBottom: 0,
        paddingBottom: 40,
        marginTop: 42,
        WebkitBoxShadow: "10px 10px 21px 20px rgba(136,136,136,0.24)",
        boxShadow: "10px 10px 21px 20px rgba(136,136,136,0.24)",
    },
}));

const Statistics = (props) => {
    useEffect(() => {
        axios.get('/api/sync/loadMediaLinks')
            .then((response) => {
                console.log(response.data)
                setMedia(response.data);
            })
    }, []);
    const classes = useStyles();

    const [media, setMedia] = React.useState([]);
    if (media.length > 0) {
        return (<div className={classes.container}><GridContainer style={{ marginLeft: 24, padding: 33 }}>
            <GridItem xs="12" sm="6" md="6">
                    {media[0].Link ? <FontAwesomeIcon color="#6385A6" icon={faFacebookF} size="2x" onClick={() => {
                        ReactGA.event({
                            category: "Facebook Link",
                            action: "User tried to visit facebook page",
                        }); window.open(media[0].Link, '_blank');
                    }} style={{ margin: 28, marginBottom: 0, cursor: "pointer" }}></FontAwesomeIcon> : null}
                    {media[1].Link ? <FontAwesomeIcon color="#AF3D83" icon={faInstagram} size="2x" onClick={() => {
                        ReactGA.event({
                            category: "Instagram link",
                            action: "User tried to visit instagram page",
                        }); window.open(media[1].Link, '_blank');
                    }} style={{ margin: 28, marginBottom: 0, cursor: "pointer" }}></FontAwesomeIcon> : null}
                    {media[2].Link ? <FontAwesomeIcon color="#31A940" icon={faWhatsapp} size="2x" onClick={() => {
                        ReactGA.event({
                            category: "Whatsapp",
                            action: "User tried to contact on whatsapp",
                        }); window.open(`https://wa.me/${media[2].Link}`, '_blank');
                    }} style={{ margin: 28, marginBottom: 0, cursor: "pointer" }}></FontAwesomeIcon> : null}
                    {media[3].Link ? <FontAwesomeIcon color="#E83F3A" icon={faYoutube} size="2x" onClick={() => {
                        ReactGA.event({
                            category: "Youtube link",
                            action: "User tried to visit youtube channel",
                        }); window.open(media[3].Link, '_blank');
                    }} style={{ margin: 28, marginBottom: 0, cursor: "pointer" }}></FontAwesomeIcon> : null}
                    {media[4].Link ? <FontAwesomeIcon color="#0678B6" icon={faLinkedinIn} size="2x" onClick={() => {
                        ReactGA.event({
                            category: "Linkedin link",
                            action: "User tried to visit linkedin page",
                        }); window.open(media[4].Link, '_blank');
                    }} style={{ margin: 28, marginBottom: 0, cursor: "pointer" }}></FontAwesomeIcon> : null}
                    {media[5].Link ? <FontAwesomeIcon color="#37B1E2" icon={faTwitter} size="2x" onClick={() => {
                        ReactGA.event({
                            category: "Twitter Link",
                            action: "User tried to visit twitter handle",
                        }); window.open(media[5].Link, '_blank');
                    }} style={{ margin: 28, marginBottom: 0, cursor: "pointer" }}></FontAwesomeIcon> : null}
                    <br /><br /><Typography variant="subtitle1" style={{ fontWeight: "initial" }}>
                        <GridContainer style={{ margin: "0 auto" }}>
                            {media[6].Link ? <GridItem xs={12} sm={12} md={6} style={{ cursor: "pointer",margin: 12 }} onClick={() => {
                                ReactGA.event({
                                    category: "Mail Id",
                                    action: "User tried to contact via mail",
                                }); window.open(`mailto:${media[6].Link}`, '_blank');
                            }}>
                                <FontAwesomeIcon color="#31A940" icon={faEnvelope} style={{ marginRight: 6 }}></FontAwesomeIcon>
          support@larkcs.com </GridItem> : null}
                            {media[7].Link ? <GridItem xs={12} sm={12} md={6} style={{ cursor: "pointer",margin: 12 }} onClick={() => {
                                ReactGA.event({
                                    category: "Phone No.",
                                    action: "User tried to contact on official phone no.",
                                }); window.open(`tel:${media[7].Link}`, '_blank');
                            }}>
                                <FontAwesomeIcon color="#31A940" icon={faPhoneAlt} style={{ marginRight: 6 }}></FontAwesomeIcon>
          +918111888892 </GridItem> : null}</GridContainer></Typography><br />
            </GridItem>
            <GridItem xs="12" sm="6" md="4" style={{ marginTop: 18 }}>
                <FlatButton style={{ backgroundColor: "#fafafa" }} color="primary">Terms and Conditions</FlatButton>
                </GridItem>
            <GridItem xs="12" sm="6" md="2" style={{ marginTop: 18 }}>© Larkcs Life Link, 2020</GridItem>
        </GridContainer></div>)

    } else {
        return (<div></div>)
    }
};

export default Statistics;