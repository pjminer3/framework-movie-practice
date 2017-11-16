import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {title: 'Mean Girls', watched: 'false'},
        {title: 'Hackers', watched: 'false'},
        {title: 'The Grey', watched: 'false'},
        {title: 'Sunshine', watched: 'false'},
        {title: 'Ex Machina', watched: 'false'},
      ],
      searchVal: '',
      addVal: ''
    }
  }

  // ------- ON-CLICK FUNCTIONS -------
  // adds a movie to the list when it's clicked
  onClickAddMovie (event) {
    let newVids = this.state.movies;
    newVids.push({title: this.state.addVal, watched: 'false'});
    this.setState({movies: newVids});
    this.setState({addVal: ''});
  }

  // searches for a specific string when clicked
  onClickSearch (event) {
    let searchVal = this.state.searchVal;

    let newVids = this.state.movies.filter( movie => {
      return movie.title.toLowerCase().includes(this.state.searchVal.toLowerCase());
    });

    this.setState({movies: newVids});
    this.setState({searchVal: ''});
  }

  onClickToggleWatched (index) {
    console.log('Toggle watch triggered!', index);
  }


  // ------- ON-CHANGE FUNCTIONS TO KEEP TRACK OF STATE -------
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
        <AddMovie 
          onChangeAddValChange={this.onChangeAddValChange.bind(this)} 
          value={this.state.addVal}
          onClickAddMovie={this.onClickAddMovie.bind(this)}
        />
        <br/>
        <div className='buttons'>
          <button className='watched'>Watched</button>
          <button className='toWatch'>To Watch</button>
        </div>

        {this.state.movies.length === 0 ? 
        // If no movies in search results send message
        <div> No movies available. Please try again </div> : 
        // else render movies
        this.state.movies.map( (movie, index) => {
          return <Movie movie={movie} key={index}  onClickToggleWatched={this.onClickToggleWatched.bind(this)}/>
        })}
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));