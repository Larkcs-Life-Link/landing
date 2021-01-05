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

	console.log('Props : ',props);
    
	const classes = useStyles();

    return (

        <Box className={classes.bookingCard} pl={12} py={6}>
			
			<Box className={classes.bookingForm}>
            
				<Typography variant="h5">PATIENT INFORMATION</Typography>
				
				<FormControl>

					<ToolBar>
						
						<Typography variant="body">Employee ID: </Typography>
					
						<TextField className={classes.inputMargin} value={props.patientEmployeeId} onChange={props.handlePatientEmployeeIdChange}/>
				
					</ToolBar>

					<ToolBar>
					
						<Typography variant="body">Name: </Typography>
					
						<TextField className={classes.inputMargin} value={props.patientName} onChange={props.handlePatientNameChange}/>
				
					</ToolBar>

					<ToolBar>
					
						<Typography variant="body">Hospital: </Typography>
					
						<Select value={props.patientHospital} onChange={props.handlePatientHospitalChange}>
							
							<MenuItem>Hospital1</MenuItem>
							<MenuItem>Hospital2</MenuItem>
					
						</Select>
				
					</ToolBar>

					<ToolBar>
				
						<Typography variant="body">Age: </Typography>
				
						<TextField id="Age" type="number" className={classes.inputMargin} value={props.patientAge} onChange={props.handlePatientAgeChange} error={props.patientAgeError.error} helperText={props.patientAgeError.helperText}/>
				
					</ToolBar>

					<ToolBar>
					
						<Typography variant="body">Gender: </Typography>
					
						<RadioGroup className={classes.inputMargin} value={props.patientGender} onChange={props.handlePatientGenderChange}>
						
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel value="female" control={<Radio />} label="Female" />  
							<FormControlLabel value="other" control={<Radio />} label="Other" />  
					
						</RadioGroup>
				
					</ToolBar>
				
					<ToolBar>
					
						<Typography variant="body">E-mail ID: </Typography>
					
						<TextField className={classes.inputMargin} value={props.patientEmailId} onChange={props.handlePatientEmailIdChange}/>
				
					</ToolBar>

				</FormControl>
			
				<Button id="patientinfo" onClick={props.handleNextStep} className={classes.nextButton} variant="contained" color="success" endIcon={<ChevronRightIcon />}>
					
					Next
				
				</Button>
			
			</Box>
			
			<div className={classes.bgImage}>
			
				<img src={require('./../../../assets/images/Booking-Illustration2.png')} style={{height: '500px',}} />
			
			</div>
		
		</Box>
    );
}