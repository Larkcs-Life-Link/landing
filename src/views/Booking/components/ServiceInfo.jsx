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
	
	console.log('Props : ',props);
	
	const classes = useStyles();
	
	function handleConfirmBookingButton() {
	
		console.log('From handleConfirmBookingButton function : Props - ', props);
		
		{/*if (values.Name === "" || values.Email === "" || values.Feedback === "") {
		
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
		}*/}
	}

    return (
	
        <Box className={classes.bookingCard} pl={12} py={6}>
	
			<Box className={classes.bookingForm}>
			
				<Typography variant="h5">SERVICE INFORMATION</Typography>
				
				<FormControl>

					<ToolBar style={{alignItems: 'flex-start', marginTop: '30px'}}>
					
						<Typography variant="body">Service:</Typography>
					
						<RadioGroup className={classes.inputMargin} value={props.service} onChange={props.handleServiceChange}>
						
							<FormControlLabel value="Professional Care Manager" control={<Radio />} label="Professional Care Manager" />
							<FormControlLabel value="Hospital Care Manager" control={<Radio />} label="Hospital Care Manager" />  
						
						</RadioGroup>
					
					</ToolBar>

					{/*<ToolBar>
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
					</ToolBar>*/}

				</FormControl>
								
				<Button className={classes.nextButton} variant="contained" color="success" type="submit" onClick={handleConfirmBookingButton} endIcon={<ChevronRightIcon />}>Confirm Booking</Button>
			
			</Box>
			
			<div className={classes.bgImage}>
			
				<img src={require('./../../../assets/images/Booking-Illustration3.png')} style={{height: '500px',}} />
			
			</div>
			
		</Box>
    );
}