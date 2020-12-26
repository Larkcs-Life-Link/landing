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
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
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


export default function ServiceInfo(props){

    const classes = useStyles();

    const [service, setService] = React.useState('');

    const handleChange = (event) => {
    setService(event.target.value);
    };


    return (
        <Box className={classes.bookingCard} pl={12} py={6}>
                <Box className={classes.bookingForm}>
                <Typography variant="h5">SERVICE INFORMATION</Typography>
                <FormControl>

                    <ToolBar style={{alignItems: 'flex-start', marginTop: '30px'}}>
                        <Typography variant="body">Service:</Typography>
                        <RadioGroup className={classes.inputMargin} aria-label="service" name="service" value={service} onChange={handleChange}>
                            <FormControlLabel value="Professional Care Manager" control={<Radio />} label="Professional Care Manager" />
                            <FormControlLabel value="Hospital Care Manager" control={<Radio />} label="Hospital Care Manager" />  
                        </RadioGroup>
                    </ToolBar>

                    <ToolBar>
                        <Typography variant="body">Lorem: </Typography>
                        <TextField id="Lorem" className={classes.inputMargin} />
                    </ToolBar>

                    <ToolBar style={{marginTop: '50px', }}>
                    <FormControlLabel
                        style={{alignItems: 'flex-start',}}
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat tellus aliquam condimentum arcu. Ac egestas purus dapibus vitae volutpat. Mattis lobortis viverra elit."
                    />
                    </ToolBar>


                </FormControl>
                <Link to='/booking-confirm' style={{textDecoration: 'none'}}><Button id="serviceinfo" onClick={props.handleNextStep} className={classes.nextButton} variant="contained" color="success" endIcon={<ChevronRightIcon />}>Confirm Booking</Button></Link>
                </Box>
                <div className={classes.bgImage}>
                <img src={require('./../../../assets/images/Booking-Illustration3.png')} style={{height: '500px',}} />
                </div>
            </Box>
    );
}