import React, { Component } from 'react';

//importamos axios
import axios from 'axios';

//importamos componentes
import MovieCard from '../components/MovieCard'

//importamos scss
import './MovieList.scss'



class MovieList extends Component {

  extractType = () => {
    const type = this.props.type;

    if (type === 'top_rated' || type === 'upcoming' || type === 'popular') {
      return type;
    }
  };

  state = {
    movies: [],
    type: '',
  };

  getMovies(type) {
    let url = (_type) => `https://api.themoviedb.org/3/movie/${_type}?api_key=323112ea2281b9eb70f319f4df422c6b`;

    return axios.get(url(type))
      .then(res => this.setState({ movies: res.data.results, type: type }))
      .catch(() => this.props.navigate('/notFound'));
  }

  render() {
    const newType = this.extractType(this.props.uri)
    console.log(this.props)
    if (newType !== this.state.type) {
      this.getMovies(newType);
      return <h1>loading movies</h1>
    } else {
      return (
        <section className="MovieList">

          <h1> {this.state.type} movies</h1>

          <div className='movies'>
            {this.state.movies.map(movie => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        </section>
      );
    }


  }
}

export default MovieList;
