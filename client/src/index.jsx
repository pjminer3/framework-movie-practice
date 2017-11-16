import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      searchVal: '',
      addVal: ''
    }
  }

  onClickAddMovie (event) {
    console.log('Movie added: ', event.target.movie);
    let newVids = this.state.movies;
    newVids.push({title: this.state.addVal});
    this.setState({movies: newVids});
    this.setState({addVal: ''});
  }

  onClickSearch (event) {
    let searchVal = this.state.searchVal;

    let newVids = this.state.movies.filter( movie => {
      return movie.title.toLowerCase().includes(this.state.searchVal.toLowerCase());
    });

    this.setState({movies: newVids});
    this.setState({searchVal: ''});
  }

  onChangeSearchValChange (event) {
    this.setState({searchVal: event.target.value});
  }

  onChangeAddValChange (event) {
    this.setState({addVal: event.target.value});
  }

  render() {
    return (
      <div>
        <Search 
          onClickSearch={this.onClickSearch.bind(this)} 
          searchVal={this.state.searchVal}
          onChangeSearchValChange={this.onChangeSearchValChange.bind(this)}
        />
        <br/>
        <h4>Add a Movie:</h4>
        <input 
        onChange={this.onChangeAddValChange.bind(this)} 
        value={this.state.addVal}
        />
        <button onClick={this.onClickAddMovie.bind(this)}>Submit</button>
        <br/>
        <br/>

        {this.state.movies.length === 0 ? 
        // If no movies in search results send message
        <div> No movies available. Please try again </div> : 
        // else render movies
        this.state.movies.map( (movie, index) => {
          return <Movie movie={movie} key={index} />
        })}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
// TODO : kill it