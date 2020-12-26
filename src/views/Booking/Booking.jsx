import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import axios from "axios";
import { Helmet } from "react-helmet";
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

import Header from '../../components/Header';
import ApplicantInfo from './components/ApplicantInfo';
import PatientInfo from './components/PatientInfo';
import ServiceInfo from './components/ServiceInfo';




const useStyles = makeStyles({
    step: {
        margin: '10px',
        textAlign: 'center',
        background: '#E5E5E5',
        color: '#636363',
        borderRadius: '50%',
        height: '30px',
        width: '30px',
        border: 'none',
        outline: 'none',
    },
    stepActive: {
        background: '#4CAF50',
        color: 'white',
    },
    bookingCard: {
        width: '80%',
        margin: '0 0 20px 40px',
        display: 'flex',
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
    }
})

export default function Booking(){

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
    
    const [steps, setSteps] = React.useState({'step1':true, 'step2': false, 'step3': false});

    const handleSteps = (event) => {
        if(event.target.innerHTML == 1)
            setSteps({'step1': true, 'step2': false, 'step3': false});
        else if(event.target.innerHTML == 2)
            setSteps({'step1': false, 'step2': true, 'step3': false});
        else if(event.target.innerHTML == 3)
            setSteps({'step1': false, 'step2': false, 'step3': true});
    }

    const handleNextStep = (event) => {
        if(event.currentTarget.id == "applicantinfo")
            setSteps({'step1': false, 'step2': true, 'step3': false});
        if(event.currentTarget.id == "patientinfo")
            setSteps({'step1': false, 'step2': false, 'step3': true});
        console.log(event.currentTarget)
    }

    return (
        <div>
            <Header downloadConfig={downloadConfig} bookingConfig={bookingConfig} openPop={true} phn={about} menu={true} handleClick={handleClick} handleClickOpen={handleClickOpen} />
            <br /><br /><br /><br /><br />
            <Box display="flex" mt={2}>
            <Box display="flex" flexDirection="column" pl={4}>
                <div >
                <button className={clsx(classes.step, {[classes.stepActive]: steps.step1 })} onClick={handleSteps}>1</button>
                </div>

                <div >
                <button className={clsx(classes.step, {[classes.stepActive]: steps.step2 })} onClick={handleSteps}>2</button>
                </div>

                <div >
                <button className={clsx(classes.step, {[classes.stepActive]: steps.step3 })} onClick={handleSteps}>3</button>
                </div>            
            </Box>
            {steps.step1==true && <ApplicantInfo handleNextStep={handleNextStep} />}
            {steps.step2==true && <PatientInfo handleNextStep={handleNextStep} />}
            {steps.step3==true && <ServiceInfo handleNextStep={handleNextStep} />}            
            </Box>

        </div>
    );
}