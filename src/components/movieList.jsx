class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: false
        }
    }

    toggleWatched() {
        this.setState({
            watched: !this.state.watched
        })
    }

    render() {

        var watched = this.state.watched ? 'to watch' : 'watched';

        return (
            <div>
                <div>{this.props.movie.title}</div>
                <button type="button" onClick={this.toggleWatched.bind(this)}>{watched}</button>
            </div>
        )
    }
}




window.MovieList = MovieList