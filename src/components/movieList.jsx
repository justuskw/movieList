class MovieList extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {

        var watched = this.props.movie.watched ? 'watched' : 'to watch';

        return (
            <div>
                <div>{this.props.movie.title}</div>
                <button type="button" onClick={() => this.props.toggleWatchButtonOnClick(this.props)}>{watched}</button>
            </div>
        )
    }
}




window.MovieList = MovieList