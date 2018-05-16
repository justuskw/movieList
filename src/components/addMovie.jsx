var AddMovie = (props) => (
    <div>
        <input type="text" placeholder="add a movie" onChange={(e) => props.addMovieTextBoxChange(e.target.value)}/>
        <input type="submit" value="Add" onClick={props.handleAddMovieClick}/>
    </div>
)