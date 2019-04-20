import React from 'react';

import './Navigation.scss'

//importamos componente Link
import {Link} from '@reach/router';







const Navigation =() => (

    <nav className="navigation">

      
        <Link to="/movies/popular">popular</Link>
        <Link to="/movie/top">top rated</Link>
        <Link to="/movies/upcoming">upcoming</Link>

    </nav>



);

export default Navigation;

