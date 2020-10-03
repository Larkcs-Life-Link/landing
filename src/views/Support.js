import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../components/Button';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Header from '../components/Header';
import LocalPharmacy from '@material-ui/icons/LocalPharmacy';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Group from '@material-ui/icons/Group';
import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import MenuBook from '@material-ui/icons/MenuBook';
import Footer from '../components/Footer';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import PermMedia from '@material-ui/icons/PermMedia';

const useStyles = makeStyles(theme => ({
    container: {
        "@media only screen and (max-width: 600px)": {
            textAlign: "center",
            margin: "0 auto"
        }
    },
    mainImage: {
        maxHeight: 280,
        maxWidth: 380,
        margin: "2em",
        "@media only screen and (max-width: 600px)": {
            maxWidth: "80%",
        }
    },
    paper: {
        padding: theme.spacing(2),
        width: 200,
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
        boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
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
        display: "block",
        padding: "0px 0px 0px",
        "@media only screen and (max-width: 600px)": {
            textAlign: "center"
        }
    }
}));


const Support = () => {
    useEffect(() => {
        axios.all([
            axios.get('/api/sync/loadConfig')
                .then((response) => {
                    setConfig(response.data);
                }),
            axios.get('/api/sync/loadSupport')
                .then((response) => {
                    setSupport(response.data);
                }),
            axios.get('/api/sync/loadMediaLinks')
                .then((response) => {
                    console.log(response.data)
                    setMedia(response.data);
                }),
            axios.get('/api/sync/loadAbout')
                .then((response) => {
                    console.log(response.data)
                    setPhn(response.data);
                }),
        ])
            .then(axios.spread(function () {
                setLoading(false)
            }))
    }, []);
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleSnack() {
        if (values.Name === "" || values.Email === "" || values.Feedback === "") {
            console.log(values)
            setValues({ ...values, msg: "Please fill all fields" });
            setSnack(true)
        }
        else {
            axios.post('/api/sync/supportTickets', { Email: values.Email, Name: values.Name, Issue: values.Issue }).then((response) => {
                if (response) {
                    setValues({
                        Name: '',
                        Email: "",
                        Issue: "",
                        msg: "Ticket Received. We will reach out!"
                    });
                    setSnack(true);
                } else {
                    setValues({ ...values, msg: "Failed to submit Feedback. Please feel free to contact us directly!" });
                    setSnack(true)
                }
            })
        }
    }
    function handleClose() {
        setAnchorEl(null);
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const classes = useStyles();
    const [config, setConfig] = React.useState([]);
    const [media, setMedia] = React.useState([]);
    const [phn, setPhn] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [support, setSupport] = useState([]);
    const [snack, setSnack] = React.useState(false);
    const [values, setValues] = React.useState({
        Name: '',
        Email: "",
        Issue: "",
        msg: "Error. Try again"
    });

    const bookingConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Booking") })[0].Hide ? true : false : false;
    const downloadConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Download") })[0].Hide ? true : false : false;
    const aboutConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "About") })[0].Hide ? true : false : false;
    const teamConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Team") })[0].Hide ? true : false : false;
    const servicesConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Services") })[0].Hide ? true : false : false;
    const blogConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Blog") })[0].Hide ? true : false : false;
    const careerConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Career") })[0].Hide ? true : false : false;
    const supportConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Support") })[0].Hide ? true : false : false;
    const galleryConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Gallery") })[0].Hide ? true : false : false;

    function handleCloseSnack() {
        setSnack(false);
    }
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    if (loading === true) {
        return (<React.Fragment><Helmet>
            <title>Support | Larkcs Life Link</title>
            <meta name="description" content="Register the issues you are facing in app here. Our support team is available 24*7 to resolve your issues." />
        </Helmet>
            <LinearProgress />
        </React.Fragment>)
    } else {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Support | Larkcs Life Link</title>
                    <meta name="description" content="Register the issues you are facing in app here. Our support team is available 24*7 to resolve your issues." />
                </Helmet>
                <Snackbar
                    style={{ maxWidth: 300, margin: "0 auto" }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={snack}
                    autoHideDuration={3000}
                    TransitionComponent={Fade}
                    onClose={handleCloseSnack}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={values.msg}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={handleCloseSnack}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <Header bookingConfig={bookingConfig} downloadConfig={downloadConfig} phn={phn[0].BookingNo} menu={true} handleClick={handleClick} />
                {!supportConfig ?
                <div style={{margin:"140px 15px"}}> 
     <div style={{
                        minHeight: 430,
                        maxWidth: 700,
                        padding: 12,
                        margin: "0 auto",
                        border: "10px solid #ffffff",
                        borderRadius: 12,
                        WebkitBoxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
                        boxShadow: "20px 20px 21px 20px rgba(136,136,136,0.24)",
                    }}>
                        <Typography variant="h6" style={{ margin: "0 auto" }}>
                            <p style={{ fontFamily: "Georgia", fontWeight: "bold" }}>
                                Post your queries!</p>
                        </Typography>
                        {support.map((field, index) => {
                            return (
                                <React.Fragment key={index}><TextField
                                    id="standard-name"
                                    name={field.Title}
                                    label={field.Title}
                                    fullWidth={field.MultiLine ? true : false}
                                    multiline={field.MultiLine ? true : false}
                                    rows={field.MultiLine ? 4 : 1}
                                    className={classes.textField}
                                    value={values[field.Title]}
                                    onChange={handleChange([field.Title])}
                                    margin="normal"
                                />
                                    <br />
                                </React.Fragment>
                            )
                        })}<br />
                        <Button style={{ float: "right" }} color="success" type="submit" onClick={handleSnack}>
                            Submit
          </Button></div> 
                </div>: null}
                <Popover
                    classes={{
                        paper: classes.paper,
                    }}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <List>

                        <Link to="/home" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Home style={{ color: "#39802D" }} />
                                </ListItemIcon>
                                <ListItemText primary="Home" /></ListItem></Link>

                        {!aboutConfig ? <Link to="/about" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <VerifiedUser style={{ color: "#39802D" }} />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItem></Link> : null}

                        {!servicesConfig ? <Link to="/services" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <LocalPharmacy style={{ color: "#39802D" }} />
                                </ListItemIcon>
                                <ListItemText primary="Services" />
                            </ListItem></Link> : null}

                        {!blogConfig ? <ListItem button onClick={() => { window.location.href = "https://blog.larkcs.com" }}>
                            <ListItemIcon>
                                <MenuBook style={{ color: "#39802D" }} />
                            </ListItemIcon>
                            <ListItemText primary="Blog" />
                        </ListItem> : null}

                        {!teamConfig ? <Link to="/team" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Group style={{ color: "#39802D" }} />
                                </ListItemIcon>
                                <ListItemText primary="Our Team" />
                            </ListItem></Link> : null}

                        {!careerConfig ? <Link to="/career" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Work style={{ color: "#39802D" }} />
                                </ListItemIcon>
                                <ListItemText primary="Career" />
                            </ListItem></Link> : null}
                        {!galleryConfig ? <Link to="/gallery" style={{ textDecoration: "none", color: "#1C1C1C" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PermMedia style={{ color: "#39802D" }} />
                                </ListItemIcon>
                                <ListItemText primary="Gallery" />
                            </ListItem></Link> : null}
                    </List>
                </Popover>
                <Footer data={media} />
            </React.Fragment>
        )
    }
};

export default Support;
