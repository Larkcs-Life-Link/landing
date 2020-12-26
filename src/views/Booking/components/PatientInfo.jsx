import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
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


export default function PatientInfo(props){

    const classes = useStyles();

    const [gender, setGender] = React.useState('');
    const handleGenderChange = (event) => {
    setGender(event.target.value);
    };

    const [hospital, setHospital] = React.useState('');
    const handleHospitalChange = event => {
        setHospital(event.target.value);
    }

    const [ageError, setAgeError] = React.useState({error: false, helperText: ''});
    const handleAgeChange = event => {
        if(event.target.value < 0){
            setAgeError({error: true, helperText: 'Age cannot be negative'});
        }
        else{
            setAgeError({error: false, helperText: ''});
        }
    }

    return (
        <Box className={classes.bookingCard} pl={12} py={6}>
                <Box className={classes.bookingForm}>
                <Typography variant="h5">PATIENT INFORMATION</Typography>
                <FormControl>

                    <ToolBar>
                        <Typography variant="body">Employee ID: </Typography>
                        <TextField id="employee-id" className={classes.inputMargin} />
                    </ToolBar>

                    <ToolBar>
                        <Typography variant="body">Name: </Typography>
                        <TextField id="Name" className={classes.inputMargin} />
                    </ToolBar>

                    <ToolBar>
                        <Typography variant="body">Hospital: </Typography>
                        <Select value={hospital} onChange={handleHospitalChange}>
                            <MenuItem>Hospital1</MenuItem>
                            <MenuItem>Hospital2</MenuItem>

                        </Select>
                    </ToolBar>

                    <ToolBar>
                    <Typography variant="body">Age: </Typography>
                    <TextField id="Age" type="number" className={classes.inputMargin} onChange={handleAgeChange} error={ageError.error} helperText={ageError.helperText}/>
                    </ToolBar>

                    <ToolBar>
                        <Typography variant="body">Gender: </Typography>
                        <RadioGroup className={classes.inputMargin} row aria-label="gender" name="gender" value={gender} onChange={handleGenderChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />  
                            <FormControlLabel value="other" control={<Radio />} label="Other" />  
                        </RadioGroup>
                    </ToolBar>

                    <ToolBar>
                        <Typography variant="body">E-mail ID: </Typography>
                        <TextField id="email" className={classes.inputMargin} />
                    </ToolBar>

                </FormControl>
                <Button id="patientinfo" onClick={props.handleNextStep} className={classes.nextButton} variant="contained" color="success" endIcon={<ChevronRightIcon />}>Next</Button>
                </Box>
                <div className={classes.bgImage}>
                    <img src={require('./../../../assets/images/Booking-Illustration2.png')} style={{height: '500px',}} />
                </div>
            </Box>
    );
}