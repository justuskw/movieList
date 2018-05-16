class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: this.props.movies,
            textBox: '',
            addMovieText: '',
            // watched: false,
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
          return this.state.currentList.filter( movie => {
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
            currentList: this.state.currentList.concat([{title: this.state.addMovieText}])
        })
    }

    addMovieTextBoxChange(text) {
        this.setState({
            addMovieText: text
        })
    }

    // toggleWatchButtonOnClick() {
    //     console.log('this works')
    //     this.setState({
    //         watched: !this.state.watched
    //     })
    // }



    render() {
        return (
            <div>
                <h1>MovieList</h1>
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
                            // toggleWatchButtonOnClick={this.toggleWatchButtonOnClick.bind(this)}
                            // watched={this.state.watched}
                            />
                    )}
                </div>
            </div> 
        )
    }
}

window.App = App;