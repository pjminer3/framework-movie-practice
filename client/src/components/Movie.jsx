import React from 'react';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: false
        }
    }

    onClickMovieWatched (event) {
        this.setState({watched: !this.state.watched});
    }

    render () {
        return (
            <div className='movie'>
                <div>{this.props.movie.title}</div>
                    {/* Conditional Rendering of Buttons */}
                    {this.state.watched ? 
                    <button 
                        onClick={() => {
                            this.onClickMovieWatched.bind(this)()
                            this.props.onClickToggleWatched(this.props.key)}}> Movie Watched!
                    </button> : 
                    <button 
                        onClick={() => {
                            this.onClickMovieWatched.bind(this)()
                            this.props.onClickToggleWatched(this.props.key)}}>Watched?
                    </button>}
            </div>
        )
    }
}

// const Movie = ({movie}) => {
//     return (
//         <div className='movie'>
//             <div>{movie.title}</div>
//             <div className='buttons'>
//                 <button></button>
//             </div>
//         </div>
        
//     )
// }


export default Movie;