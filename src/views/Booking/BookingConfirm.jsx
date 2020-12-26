import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {makeStyles} from '@material-ui/core/styles';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import Header from '../../components/Header';
import ApplicantInfo from './components/ApplicantInfo';
import PatientInfo from './components/PatientInfo';
import ServiceInfo from './components/ServiceInfo';



const useStyles = makeStyles({
    parentDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
    },
    bookingCard: {
        width: '40%',
        textAlign: 'center',
        margin: '0 0 20px 40px',
        
        borderRadius: '10px',
        boxShadow: '0px 1px 25px 5px rgba(0, 0, 0, 0.1)',
    },
    bgImage: {
        width: '50%',
        textAlign: 'right',
    },
    bookingForm: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
    },
    inputMargin: {
        marginLeft: '20px',
    },
    nextButton: {
        marginTop: '30px',
        background: '#4CAF50',
        color: 'white',
        alignSelf: 'flex-start',
        '&:hover': {
            background: '#4CAF50',
        }
    },
    emoji: {
        color: '#4CAF50',
        margin: ' 0 10px 0 0',
        position: 'relative',
        top: '3px',
    }
})

export default function BookingConfirm(){

    const classes = useStyles();

    const [modal, setOpen] = React.useState(false);
    const [config, setConfig] = React.useState([]);
    const [about, setAbout] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const bookingConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Booking") })[0].Hide ? true : false : false;
    const downloadConfig = config.length > 0 ? config.filter((item) => { return (item.Name == "Download") })[0].Hide ? true : false : false;
  

    function handleClickOpen() {
        setOpen(true);
      }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
      }

    return (
        <div>
            <Header downloadConfig={downloadConfig} bookingConfig={bookingConfig} openPop={true} phn={about} menu={true} handleClick={handleClick} handleClickOpen={handleClickOpen} />
            <br /><br /><br /><br /><br />
            <div className={classes.parentDiv}>
            <Box mt={2} p={5} className={classes.bookingCard}>
                <Typography variant="h5" align="center" gutterBottom><EmojiEmotionsIcon className={classes.emoji} />Thank you for choosing us!</Typography>          
                <Typography variant="subtitle1" align="center"  gutterBottom>Our executives will contact you soon.</Typography>
                <Typography variant="subtitle1" align="center"  gutterBottom><em>Go back to   </em><Link to='/home' style={{color: '#4CAF50'}}> Home Page</Link></Typography>
            </Box>
            </div>

        </div>
    );
}