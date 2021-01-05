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

export default function ApplicantInfo(props){
	
	console.log('Props : ',props);

    const classes = useStyles();

    return (
    
        <Box className={classes.bookingCard} pl={12} py={6}>
    
			<Box className={classes.bookingForm}>

				<Typography variant="h5">APPLICANT INFORMATION</Typography>

				<FormControl>

					<ToolBar>

						<Typography variant="body">Are you a Larkcs employee: </Typography>

						<RadioGroup className={classes.inputMargin} value={props.applicantIsEmployee} onChange={props.handleApplicantIsEmployeeChange}>

							<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
							
							<FormControlLabel value="No" control={<Radio />} label="No" />  

						</RadioGroup>

					</ToolBar>

					<ToolBar>

						<Typography variant="body">Employee ID: </Typography>

						<TextField className={classes.inputMargin} value={props.applicantEmployeeId} onChange={props.handleApplicantEmployeeIdChange}/>

					</ToolBar>

					<Divider style={{margin: '20px 0',}}/>

					<ToolBar>

						<Typography variant="body">Name: </Typography>

						<TextField className={classes.inputMargin} value={props.applicantName} onChange={props.handleApplicantNameChange}/>

					</ToolBar>

					<ToolBar>

						<Typography variant="body">Address: </Typography>

						<TextField className={classes.inputMargin} value={props.applicantAddress} onChange={props.handleApplicantAddressChange}/>

					</ToolBar>

					<ToolBar>

						<Typography variant="body">Phone: </Typography>

						<TextField className={classes.inputMargin} value={props.applicantPhone} onChange={props.handleApplicantPhoneChange}/>

					</ToolBar>

					<ToolBar>
						
						<Typography variant="body">E-mail ID: </Typography>
							
						<TextField className={classes.inputMargin} value={props.applicantEmailId} onChange={props.handleApplicantEmailIdChange}/>
						
					</ToolBar>

				</FormControl>
					
				<Button id="applicantinfo" onClick={props.handleNextStep} className={classes.nextButton} variant="contained" color="success" endIcon={<ChevronRightIcon />}>
				
					Next
				
				</Button>
			
			</Box>
			
			<div className={classes.bgImage}>
			
				<img src={require('./../../../assets/images/Rectangle-4.png')} />
			
			</div>
            
		</Box>
    );
}