import React from 'react';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { container } from '../assets/js-styles/landingStyle';


const styles = {
    image: {
        margin: 32,
        "@media only screen and (max-width: 600px)": {
            maxWidth: "100%",
            margin: "0 auto"
        }
    },
    hide: {
        width: "80%",
        "@media only screen and (min-width: 600px)": {
            display: "none"
        }
    },
    paper: {
        padding: 2,
        width: 200,
        WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
        boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
    },
    box: {
        maxHeight: 269,
        maxWidth: 450,
        "@media only screen and (min-width: 600px)": {
            margin: 32,
            border: "1px solid #ffffff",
            WebkitBoxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
            boxShadow: "20px 20px 31px 30px rgba(136,136,136,0.24)",
            borderRadius: 12
        }
    }
}


class ServiceComponent extends React.Component {
    constructor(props) {
        super(props)
        props.services.forEach(service => {
            this[`${service.ref}_ref`] = React.createRef()
        });
    }
    componentDidMount() {
        if (this.props.navigateTo) {
            this.aFunction(this.props.navigateTo)
        }
    }
    aFunction = (ref) => {
        const offsetTop =  this[`${ref}_ref`].current.offsetTop-80
        const param = { behavior: 'smooth',top:offsetTop };
        window.scrollTo(param);
    }
    render() {
        const { services, classes } = this.props;
        return (
            <React.Fragment>
                <Typography style={{
                    textAlign: "center", fontFamily: "Georgia",
                    fontWeight: "bold",
                    fontSize: 24
                }} variant="h6">Our Services</Typography><br />
                <div style={container}>
                    {services.map((service, index) => {
                        return (
                            <div key={index} style={{paddingTop:index==0?32:0,paddingBottom:index==0?0:36}}>
                                <Typography variant="h6" ref={this[`${service.ref}_ref`]} style={{ maxWidth: 500, marginLeft: 32,marginRight:32 }}>
                                    <p style={{ fontFamily: "Georgia", fontWeight: "bold" }}>{service.Title}</p>
                                </Typography>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={service.VideoLink ? 6 : 9}>
                                        <Typography variant="subtitle1" style={{ marginLeft: 32,marginRight:32,whiteSpace:"pre-wrap" }}>
                                            {service.Description ? <p>{service.Description}</p> : null}
                                        </Typography>
                                        <hr className={classes.hide} /><br />
                                        {service.Posters ? <img className={classes.image} src={service.Posters[0].url} alt="" /> : null}
                                    </GridItem>
                                    {service.VideoLink ? <GridItem xs={12} sm={12} md={6}>
                                        <div className={classes.box}>
                                            <iframe src={service.VideoLink} title="Larkcs" style={{ margin: 10, borderRadius: 12 }} width="95%" height="250" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>
                                    </GridItem> : null}
                                </GridContainer>
                            </div>
                        )

                    })}</div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ServiceComponent);