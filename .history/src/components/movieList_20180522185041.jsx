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
        var details = this.state.movieDetails ? <MovieDetails watched={watched} movie={this.props.movie} /> : '';

        return (
            <div>
                <div onClick={this.handleTitleClick.bind(this)}>{this.props.movie.title}</div>
                <div>{details}</div>
                <button type="button" onClick={() => this.props.toggleWatchButtonOnClick(this.props)}>{watched}</button>
            </div>
        )
    }
}




window.MovieList = MovieList