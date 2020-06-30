import React, { Component } from 'react';
import Button from "./Button";
import { Typography, LinearProgress } from "@material-ui/core";
import notfound from '../assets/images/not-found.svg';
import Header from "./Header";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../views/home/Footer';

class Download extends Component {
    state = {
        media: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/api/sync/loadMediaLinks')
            .then((response) => {
                this.setState({ media: response.data })
                this.setState({ loading: false })
            })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.loading ?
                    <LinearProgress /> :
                    <React.Fragment>
                        <Header />
                        <div style={{ textAlign: "center", margin: 32 }}>
                            <div style={{ minHeight: 300 }}><img src={notfound} alt="" style={{ maxWidth: "100%", maxHeight: 500 }}></img></div>
                            <Typography variant="h6">
                                We are not live yet! The app will be soon coming to playstore and apple appstore.
                    </Typography><br />
                            <Link to="/home" style={{ textDecoration: "none", color: "#1C1C1C" }}><Button color="success">Go to Homepage</Button></Link>
                        </div>
                        <Footer data={this.state.media} />
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default Download;