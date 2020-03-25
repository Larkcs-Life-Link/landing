import React from 'react';
import Typography from '@material-ui/core/Typography';
import { logoStyle, titleStyle } from "../assets/landingStyle";
import logo from '../assets/images/logo.png';

function Header(props) {
    return (
        <React.Fragment>
            <Typography variant="h6" color="inherit">
          <img src={logo} alt="" style={logoStyle} />
          <p style={titleStyle}>LARKCS</p>
        </Typography><br />
        </React.Fragment>
    );
}

export default Header;