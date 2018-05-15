var App = (props) => (
    <div>
        <h1>MovieList</h1>
        <div>
            {props.movies.map(movie => 
               <window.MovieList movie={movie} />
            )}
        </div>
    </div>
)

window.App = App;