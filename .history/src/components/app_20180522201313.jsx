class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: this.props.movies,
            textBox: '',
            addMovieText: '',
            all: this.props.movies
        }
    }

    textBoxChange(text) {
        this.setState({
            textBox: text
        })
    }

    filterMovies(text) {
        if (text === '') { 
          return this.state.currentList; 
        }
        else {
          return this.state.all.filter( movie => {
            return movie.title.toLowerCase().includes(text.toLowerCase());
          });
        }
      }

    handleSearchClick() {
        this.setState({
            currentList: this.filterMovies(this.state.textBox)
        })
    }

    handleAddMovieClick() {
        this.setState({
            currentList: this.state.currentList.concat([{
                title: this.state.addMovieText,
                watched: false,
                year: 2001
            }]),
            all: this.state.currentList.concat([{
                title: this.state.addMovieText,
                watched: false,
                year: 2001
            }])
        })
    }

    addMovieTextBoxChange(text) {
        this.setState({
            addMovieText: text
        })
    }

    filterToWatchOnClick() {
        this.setState({
            currentList: this.filterByToWatch()
        })
    }

    filterByToWatch() {
        return this.state.all.filter(movie => {
            return movie.watched === false;
        })
    }

    filterWatchedOnClick() {
        this.setState({
            currentList: this.filterByWatched()
        })
    }

    filterByWatched() {
        return this.state.all.filter(movie => {
            return movie.watched;
        })
    }

    toggleWatchButtonOnClick(e) {
        e.movie.watched = e.movie.watched ? !e.movie.watched : true;
        this.setState({
            view: this.state.view
        })
    }

    showAllMovies() {
        this.setState({
            currentList: this.state.all
        })
    }

    getMovies(callback) {
        $.ajax({
            url: 'http://localhost:3000/server.js',
            type: 'GET',
            success: function(data) {
                console.log('data', data);
                callback(data);
            },
            error: function() {
                console.error('failed to get movies')
            }
        })
    }

    callGetMovies() {
        return this.getMovies(function(data) {
            return data;
        })
    }

    handleGetMoviesClick() {
        console.log('clicked')
        this.setState({
            all: this.callGetMovies(),
            currentList: this.callGetMovies()
        })
    }

    render() {
        return (
            <div>
                <h1>MovieList</h1>
                <button onClick={this.handleGetMoviesClick.bind(this)}>get movies</button>
                <button  onClick={this.showAllMovies.bind(this)}>show all movies</button>
                <button  onClick={this.filterToWatchOnClick.bind(this)}>filter to watch</button>
                <button onClick={this.filterWatchedOnClick.bind(this)}>filter watched</button>
                <div><AddMovie 
                    handleAddMovieClick={this.handleAddMovieClick.bind(this)}
                    addMovieTextBoxChange={this.addMovieTextBoxChange.bind(this)}
                /></div>
                <div><window.Search 
                    movies={this.state.currentList} 
                    search={this.handleSearchClick.bind(this)} 
                    textBoxChange={this.textBoxChange.bind(this)}
                    />
                </div>
                <div>
                    {this.state.currentList.map((movie,i) => 
                        <window.MovieList movie={movie} key={i} 
                            toggleWatchButtonOnClick={this.toggleWatchButtonOnClick.bind(this)}
                            />
                    )}
                </div>
            </div> 
        )
    }
}

window.App = App;