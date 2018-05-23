'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            currentList: _this.props.movies,
            textBox: '',
            addMovieText: '',
            all: _this.props.movies
        };
        return _this;
    }

    _createClass(App, [{
        key: 'textBoxChange',
        value: function textBoxChange(text) {
            this.setState({
                textBox: text
            });
        }
    }, {
        key: 'filterMovies',
        value: function filterMovies(text) {
            if (text === '') {
                return this.state.currentList;
            } else {
                return this.state.all.filter(function (movie) {
                    return movie.title.toLowerCase().includes(text.toLowerCase());
                });
            }
        }
    }, {
        key: 'handleSearchClick',
        value: function handleSearchClick() {
            this.setState({
                currentList: this.filterMovies(this.state.textBox)
            });
        }
    }, {
        key: 'handleAddMovieClick',
        value: function handleAddMovieClick() {
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
            });
        }
    }, {
        key: 'addMovieTextBoxChange',
        value: function addMovieTextBoxChange(text) {
            this.setState({
                addMovieText: text
            });
        }
    }, {
        key: 'filterToWatchOnClick',
        value: function filterToWatchOnClick() {
            this.setState({
                currentList: this.filterByToWatch()
            });
        }
    }, {
        key: 'filterByToWatch',
        value: function filterByToWatch() {
            return this.state.all.filter(function (movie) {
                return movie.watched === false;
            });
        }
    }, {
        key: 'filterWatchedOnClick',
        value: function filterWatchedOnClick() {
            this.setState({
                currentList: this.filterByWatched()
            });
        }
    }, {
        key: 'filterByWatched',
        value: function filterByWatched() {
            return this.state.all.filter(function (movie) {
                return movie.watched;
            });
        }
    }, {
        key: 'toggleWatchButtonOnClick',
        value: function toggleWatchButtonOnClick(e) {
            e.movie.watched = e.movie.watched ? !e.movie.watched : true;
            this.setState({
                view: this.state.view
            });
        }
    }, {
        key: 'showAllMovies',
        value: function showAllMovies() {
            this.setState({
                currentList: this.state.all
            });
        }
    }, {
        key: 'getMovies',
        value: function getMovies(callback) {
            $.ajax({
                url: 'http://localhost:3000/movies',
                type: 'GET',
                success: function success(data) {
                    console.log('success', data);
                    callback(data);
                },
                error: function error() {
                    console.error('failed to get movies');
                }
            });
        }
    }, {
        key: 'handleGetMoviesClick',
        value: function handleGetMoviesClick() {

            var callGetMovies = function callGetMovies(movies) {
                this.setState({
                    all: movies,
                    currentList: movies
                });
            };
            this.getMovies(callGetMovies.bind(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'MovieList'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleGetMoviesClick.bind(this) },
                    'get movies'
                ),
                React.createElement(
                    'button',
                    { onClick: this.showAllMovies.bind(this) },
                    'show all movies'
                ),
                React.createElement(
                    'button',
                    { onClick: this.filterToWatchOnClick.bind(this) },
                    'filter to watch'
                ),
                React.createElement(
                    'button',
                    { onClick: this.filterWatchedOnClick.bind(this) },
                    'filter watched'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(AddMovie, {
                        handleAddMovieClick: this.handleAddMovieClick.bind(this),
                        addMovieTextBoxChange: this.addMovieTextBoxChange.bind(this)
                    })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(window.Search, {
                        movies: this.state.currentList,
                        search: this.handleSearchClick.bind(this),
                        textBoxChange: this.textBoxChange.bind(this)
                    })
                ),
                React.createElement(
                    'div',
                    null,
                    this.state.currentList.map(function (movie, i) {
                        return React.createElement(window.MovieList, { movie: movie, key: i,
                            toggleWatchButtonOnClick: _this2.toggleWatchButtonOnClick.bind(_this2)
                        });
                    })
                )
            );
        }
    }]);

    return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL2FwcF8yMDE4MDUyMjIwMjQ0NS5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwibW92aWVzIiwidGV4dEJveCIsImFkZE1vdmllVGV4dCIsImFsbCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiY29uY2F0Iiwid2F0Y2hlZCIsInllYXIiLCJmaWx0ZXJCeVRvV2F0Y2giLCJmaWx0ZXJCeVdhdGNoZWQiLCJlIiwidmlldyIsImNhbGxiYWNrIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjYWxsR2V0TW92aWVzIiwiZ2V0TW92aWVzIiwiYmluZCIsImhhbmRsZUdldE1vdmllc0NsaWNrIiwic2hvd0FsbE1vdmllcyIsImZpbHRlclRvV2F0Y2hPbkNsaWNrIiwiZmlsdGVyV2F0Y2hlZE9uQ2xpY2siLCJoYW5kbGVBZGRNb3ZpZUNsaWNrIiwiYWRkTW92aWVUZXh0Qm94Q2hhbmdlIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJ0ZXh0Qm94Q2hhbmdlIiwibWFwIiwiaSIsInRvZ2dsZVdhdGNoQnV0dG9uT25DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHlCQUFhLE1BQUtGLEtBQUwsQ0FBV0csTUFEZjtBQUVUQyxxQkFBUyxFQUZBO0FBR1RDLDBCQUFjLEVBSEw7QUFJVEMsaUJBQUssTUFBS04sS0FBTCxDQUFXRztBQUpQLFNBQWI7QUFGZTtBQVFsQjs7OztzQ0FFYUks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QTJCLFVBQUNqQyxLQUFELEVBQU9rQyxDQUFQO0FBQUEsK0JBQ3hCLG9CQUFDLE1BQUQsQ0FBUSxTQUFSLElBQWtCLE9BQU9sQyxLQUF6QixFQUFnQyxLQUFLa0MsQ0FBckM7QUFDSSxzREFBMEIsT0FBS0Msd0JBQUwsQ0FBOEJYLElBQTlCLENBQW1DLE1BQW5DO0FBRDlCLDBCQUR3QjtBQUFBLHFCQUEzQjtBQURMO0FBaEJKLGFBREo7QUEwQkg7Ozs7RUFoSmFZLE1BQU1DLFM7O0FBbUp4QkMsT0FBT2pELEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHBfMjAxODA1MjIyMDI0NDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLnByb3BzLm1vdmllcyxcbiAgICAgICAgICAgIHRleHRCb3g6ICcnLFxuICAgICAgICAgICAgYWRkTW92aWVUZXh0OiAnJyxcbiAgICAgICAgICAgIGFsbDogdGhpcy5wcm9wcy5tb3ZpZXNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRleHRCb3hDaGFuZ2UodGV4dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRleHRCb3g6IHRleHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJNb3ZpZXModGV4dCkge1xuICAgICAgICBpZiAodGV4dCA9PT0gJycpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudExpc3Q7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFsbC5maWx0ZXIoIG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmZpbHRlck1vdmllcyh0aGlzLnN0YXRlLnRleHRCb3gpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQWRkTW92aWVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS5hZGRNb3ZpZVRleHQsXG4gICAgICAgICAgICAgICAgd2F0Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgeWVhcjogMjAwMVxuICAgICAgICAgICAgfV0pLFxuICAgICAgICAgICAgYWxsOiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0LmNvbmNhdChbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLmFkZE1vdmllVGV4dCxcbiAgICAgICAgICAgICAgICB3YXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB5ZWFyOiAyMDAxXG4gICAgICAgICAgICB9XSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRNb3ZpZVRleHRCb3hDaGFuZ2UodGV4dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFkZE1vdmllVGV4dDogdGV4dFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlclRvV2F0Y2hPbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmZpbHRlckJ5VG9XYXRjaCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyQnlUb1dhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hbGwuZmlsdGVyKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS53YXRjaGVkID09PSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJXYXRjaGVkT25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJCeVdhdGNoZWQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlckJ5V2F0Y2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxsLmZpbHRlcihtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2soZSkge1xuICAgICAgICBlLm1vdmllLndhdGNoZWQgPSBlLm1vdmllLndhdGNoZWQgPyAhZS5tb3ZpZS53YXRjaGVkIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aWV3OiB0aGlzLnN0YXRlLnZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93QWxsTW92aWVzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLnN0YXRlLmFsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldE1vdmllcyhjYWxsYmFjaykge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL21vdmllcycsXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWxlZCB0byBnZXQgbW92aWVzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVHZXRNb3ZpZXNDbGljaygpIHtcblxuICAgICAgICB2YXIgY2FsbEdldE1vdmllcyA9IGZ1bmN0aW9uKG1vdmllcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWxsOiBtb3ZpZXMsXG4gICAgICAgICAgICAgICAgY3VycmVudExpc3Q6IG1vdmllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRNb3ZpZXMoY2FsbEdldE1vdmllcy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Nb3ZpZUxpc3Q8L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVHZXRNb3ZpZXNDbGljay5iaW5kKHRoaXMpfT5nZXQgbW92aWVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17dGhpcy5zaG93QWxsTW92aWVzLmJpbmQodGhpcyl9PnNob3cgYWxsIG1vdmllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e3RoaXMuZmlsdGVyVG9XYXRjaE9uQ2xpY2suYmluZCh0aGlzKX0+ZmlsdGVyIHRvIHdhdGNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZpbHRlcldhdGNoZWRPbkNsaWNrLmJpbmQodGhpcyl9PmZpbHRlciB3YXRjaGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdj48QWRkTW92aWUgXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFkZE1vdmllQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW92aWVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBhZGRNb3ZpZVRleHRCb3hDaGFuZ2U9e3RoaXMuYWRkTW92aWVUZXh0Qm94Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pjx3aW5kb3cuU2VhcmNoIFxuICAgICAgICAgICAgICAgICAgICBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudExpc3R9IFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNoQ2xpY2suYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgIHRleHRCb3hDaGFuZ2U9e3RoaXMudGV4dEJveENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRMaXN0Lm1hcCgobW92aWUsaSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8d2luZG93Lk1vdmllTGlzdCBtb3ZpZT17bW92aWV9IGtleT17aX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrPXt0aGlzLnRvZ2dsZVdhdGNoQnV0dG9uT25DbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIClcbiAgICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19