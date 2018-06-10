import React from 'react';
import { Link } from "react-router-dom";

const styles = {
    logo: {
        width: 50,
        height: 50
    }
}

const Logo = (
    <div><Link to="/"><img style={styles.logo} alt="" src={require('../images/logo.png')} /></Link></div>
)

export default Logo;