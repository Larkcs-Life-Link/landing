import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Uploader from './Uploader.js';
import { CloudinaryContext} from 'cloudinary-react';
import cloudinaryConfig from '../constants/Cloudinary_config.js';
import { CircularProgress, ThemeProvider } from '@material-ui/core';
import Button from '../components/Button';
import axios from 'axios';
import swal from 'sweetalert'; 
import { withRouter } from 'react-router';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            fieldData: [],
            Name: "",
            Email: "",
            PhoneNo: "",
            url: "",
            custom1: "",
            custom2: "",
            custom3: "",
            custom4: "",
            custom5: "",
            custom6: "",
            custom7: "",
            custom8: "",
            errorMsg: "",
            mailContent: this.props.mailContent,
            opening: this.props.opening
        }
    }

      handleRequiredArray = (response)=>{
        let array = []
        for(let i=0;i<response.length;i++){
          if(response[i].required){
            array.push(response[i].label)
          }
        }
      this.setState({arr:array})
     }
    handleChange = (value, name) => {
        this.setState({ [name]: value });
      };
  handleSubmit = (values)=>{
        const formData = {
          "Name":this.state.Name,
          "Email":this.state.Email,
          "PhoneNo":this.state.PhoneNo,
          "url":this.state.url,
          "custom1": this.state.custom1,
          "custom2": this.state.custom2,
          "custom3": this.state.custom3,
          "custom4": this.state.custom4,
          "custom5": this.state.custom5,
          "custom6": this.state.custom6,
          "custom7": this.state.custom7,
          "custom8": this.state.custom8,
          "mailContent": this.state.mailContent,
          "opening": this.state.opening
      };
      var flag = false;
        swal({
          title: `Submit your Application`,
          text: "Thank you for your interest in our job posting. You will receive an email with further instructions once you confirm the submission",
          buttons: {
            cancel: {
              text: "Cancel",
              value: null,
              visible: true,
              closeModal: true,
            },
            confirm: {
              text: "Submit",
              value: true,
              visible: true,
              closeModal: false
            }
          },
        })
        .then((willConfirm) => {
          if (willConfirm) {
            axios.post('/api/sync/applyForJob', formData).then((res)=>{
              
                if(res.data=="success"){
                  setTimeout(()=>{
                  this.props.history.push('/home');
                },2100)
                 }
              
              
              swal(`Congrats! You've successfully applied.`, {
                icon: "success",
                buttons: false,
                timer: 2000
              });
            })
            .catch(function (error) {
              swal(`There was an error! Please try again`, {
                icon: "error",
                buttons: false,
                timer: 2000
              });
            })
          } else {
            swal.close();
          }
          
      })
    }
      handleClear = () => {
        this.setState({
            Name: "",
            Email: "",
            PhoneNo: "",
            url: "",
            custom1: "",
            custom2: "",
            custom3: "",
            custom4: "",
            custom5: "",
            custom6: "",
            custom7: "",
            custom8: ""
        });
      };
    render() {
         
        
        return (
            <div>
                {this.props.data.map((field, index)=>{
                    return(
                        <React.Fragment
                        key={index}>
                        <TextField
                        id={field.Name}
                        name={field.Name}
                        fullWidth={field.MultiLine?true:false}
                        rows={field.MultiLine?4:1}
                        label={field.label}
                        value={this.state[field.Name]}
                        required={field.Required}
                        multiline={field.MultiLine?true:false}
                        onChange={(event)=>this.handleChange(event.target.value, field.Name)}
                        margin="normal"
                      />
                       <br/>
                       </React.Fragment>
                    )
                })}
                <br/><br/>
                  <CloudinaryContext cloudName={cloudinaryConfig.cloud_name}
                        style={{marginLeft:-14}}>
      <Uploader handleUrl={(url)=>{this.setState({url})}} handleLoading={(bool)=>{this.setState({loading:bool})}}/>
        </CloudinaryContext><br/>
        {this.state.loading?<CircularProgress style={{marginLeft:14}}/>:null}<br/>
        {this.state.errorMsg!==""?<p style={{color:"red"}}>{this.state.errorMsg}</p>:null}
           <br/> <Button disabled={this.state.arr.length>0} color="success" type="submit" onClick={this.handleSubmit}>Submit</Button>
           <Button style={{marginLeft:18}}  type="submit" onClick={this.handleClear}>Clear</Button>
            </div>
        );
    }
}
export default withRouter(Form);