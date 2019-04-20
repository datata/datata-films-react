import React from 'react';

import './Footer.scss'

//importamos componente Link
import {Link} from '@reach/router';



const Footer =() => (

    <nav className="footer">

        <Link to="/movies/popular">popular</Link>
        <Link to="/movies/top">top rated</Link>
        <Link to="/movies/upcoming">upcoming</Link>

    </nav>



);

export default Footer;

