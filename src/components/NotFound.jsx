import React from 'react';

//importamos componente Link
import {Link} from '@reach/router';

const NotFound =() => (

    <nav className="error404">

     <h1>Error en la ruta</h1>

    <Link to="/movies/popular">Go to popular</Link>

    </nav>

);

export default NotFound;