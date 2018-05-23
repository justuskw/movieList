var MovieDetails = (props) => (
    <div>
        <div>Year: {props.movie.year}</div>
        <button onClick={() => this.props.toggleWatchButtonOnClick(this.props)}>{props.watched}</button>
    </div>
);