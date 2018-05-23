class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetails: false,
        }
    }

    handleTitleClick(movie) {
        console.log('click')
        this.setState({
            movieDetails: this.state.movieDetails ? false : true
        })
    }

    render() {

        var watched = this.props.movie.watched ? 'watched' : 'to watch';
        var details = this.state.movieDetails ? <MovieDetails toggleWatchButtonOnClick={this.props.toggleWatchButtonOnClick} watched={watched} movie={this.props.movie} /> : '';

        return (
            <div>
                <div onClick={this.handleTitleClick.bind(this)}>{this.props.movie.title}</div>
                <div>{details}</div>
            </div>
        )
    }
}




window.MovieList = MovieList