import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/movie.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {console.log(movies)}
        {movies.map( (movie, index) => {
          return <Movie movie={movie} key={index} />
        })}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
// TODO : kill it