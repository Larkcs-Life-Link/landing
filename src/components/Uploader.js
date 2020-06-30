import React, { Component } from 'react';
import axios from 'axios';
import cloudinaryConfig from '../constants/Cloudinary_config.js'
import Button from '../components/Button';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const cloudName = cloudinaryConfig.cloud_name;
const unsignedUploadPreset = cloudinaryConfig.unsigned_upload_preset;

const styles = theme => ({
  input: {
    display: 'none',
  },
  progress: {
    margin: theme.spacing(2),
  },
  button: {
    margin: 12,
  },
})

class Uploader extends Component {

  constructor(props) {
    super(props);

    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.state = {
      images: [],
      file: "",
      error: ""
    };
    this.fileInput = React.createRef();
  }
  handleUploadFile(event, handleUrl, handleLoading) {
    this.setState({ file: this.fileInput.current.files[0].name });
    handleLoading(true)
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("tags", ["browser_upload", "glitch"]); // Optional - add tag for image admin in Cloudinary
    fd.append("file", event.target.files[0]);
    const me = this;
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
      onUploadProgress: function (progressEvent) {
        var progress = Math.round((progressEvent.loaded * 100.0) / progressEvent.total);
        me.setState({ progress });
      }
    };
    axios.post(url, fd, config)
      .then(function (res) {
        handleLoading(false)
        var response = res.data;
        handleUrl(response.secure_url);
        me.setState({ progress: 0, error: "", images: [...me.state.images, response.public_id] });
      })
      .catch(function (err) {
        this.setState({ error: "Error uploading you file!" })
      });
  }

  render() {
    let fileName = "";
    if (this.state.file !== "") {
      fileName = this.state.file.replace(/C:\\fakepath\\/i, '');
    }
    const { classes, handleUrl, handleLoading } = this.props;
    return (<React.Fragment>
      <div className="upload-btn-wrapper">
        <input
          accept="application/pdf,application/msword,
        application/vnd.openxmlformats-officedocument.wordprocessingml.document/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => { this.handleUploadFile(e, handleUrl, handleLoading) }}
          ref={this.fileInput}
        />
        <label htmlFor="contained-button-file">
          <Button color="info" component="span" className={classes.button}>
            Upload Resume
        </Button>
        </label><br />
        {this.state.loading ? null : <Typography variant="caption" style={{ marginLeft: 12 }}>{this.state.error == "" ? fileName : this.state.error}</Typography>}
      </div>
    </React.Fragment>);
  }
}

export default withStyles(styles)(Uploader);