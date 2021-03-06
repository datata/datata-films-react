import React, { Component } from 'react';
import {Router, Redirect} from '@reach/router';

import './App.scss';

//importamos componentes
import Navigation from './components/Navigation';
import Footer from './components/Footer';

//importamos views
import MovieDetails from './views/MovieDetails';
import MovieList from './views/MovieList';
import NotFound from './components/NotFound';




class App extends Component {
  render() {
    return (
      <div className="app">

      <Navigation />
      <Router className="main">

      <MovieList path = "/movies/:type" />
      <MovieDetails path = "/movie/:id"/>
      <Redirect default from ="*" to="movies/popular" noThrow/>
      <NotFound path="notFound"/>
                  
      </Router>  
      <Footer/>



      </div>
    );
  }
}

export default App;
