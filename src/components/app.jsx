class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: this.props.movies,
            textBox: ''
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

    handleClick() {
        this.setState({
            currentList: this.filterMovies(this.state.textBox)
        })
    }

    render() {
        return (
            <div>
            <h1>MovieList</h1>
            <div><window.Search 
                    movies={this.state.currentList} 
                    search={this.handleClick.bind(this)} 
                    textBoxChange={this.textBoxChange.bind(this)}
                    /></div>
            <div>
                {this.state.currentList.map((movie,i) => 
                   <window.MovieList movie={movie} key={i} />
                )}
            </div>
        </div> 
        )
    }
}

window.App = App;