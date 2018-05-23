var MovieDetails = (props) => (
    <div>
        <div>Year: {props.movie.year}</div>
        <button onClick={() => props.toggleWatchButtonOnClick(props)}>{props.watched}</button>
    </div>
);