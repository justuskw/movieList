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
                url: 'http://localhost:3000',
                type: 'GET',
                dataType: 'json',
                success: function success(data) {
                    console.log('data', data);
                    callback(data);
                },
                error: function error() {
                    console.error('failed to get movies');
                }
            });
        }
    }, {
        key: 'callGetMovies',
        value: function callGetMovies() {
            return this.getMovies(function (data) {
                return data;
            });
        }
    }, {
        key: 'handleGetMoviesClick',
        value: function handleGetMoviesClick() {
            console.log('clicked');
            this.setState({
                all: this.callGetMovies(),
                currentList: this.callGetMovies()
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL2FwcF8yMDE4MDUyMjIwMDI1OS5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwibW92aWVzIiwidGV4dEJveCIsImFkZE1vdmllVGV4dCIsImFsbCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiY29uY2F0Iiwid2F0Y2hlZCIsInllYXIiLCJmaWx0ZXJCeVRvV2F0Y2giLCJmaWx0ZXJCeVdhdGNoZWQiLCJlIiwidmlldyIsImNhbGxiYWNrIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldE1vdmllcyIsImNhbGxHZXRNb3ZpZXMiLCJoYW5kbGVHZXRNb3ZpZXNDbGljayIsImJpbmQiLCJzaG93QWxsTW92aWVzIiwiZmlsdGVyVG9XYXRjaE9uQ2xpY2siLCJmaWx0ZXJXYXRjaGVkT25DbGljayIsImhhbmRsZUFkZE1vdmllQ2xpY2siLCJhZGRNb3ZpZVRleHRCb3hDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDbGljayIsInRleHRCb3hDaGFuZ2UiLCJtYXAiLCJpIiwidG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsTUFBS0YsS0FBTCxDQUFXRyxNQURmO0FBRVRDLHFCQUFTLEVBRkE7QUFHVEMsMEJBQWMsRUFITDtBQUlUQyxpQkFBSyxNQUFLTixLQUFMLENBQVdHO0FBSlAsU0FBYjtBQUZlO0FBUWxC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QUFBO0FBQUE7QUFDSyx5QkFBS25DLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QjBDLEdBQXZCLENBQTJCLFVBQUNsQyxLQUFELEVBQU9tQyxDQUFQO0FBQUEsK0JBQ3hCLG9CQUFDLE1BQUQsQ0FBUSxTQUFSLElBQWtCLE9BQU9uQyxLQUF6QixFQUFnQyxLQUFLbUMsQ0FBckM7QUFDSSxzREFBMEIsT0FBS0Msd0JBQUwsQ0FBOEJWLElBQTlCLENBQW1DLE1BQW5DO0FBRDlCLDBCQUR3QjtBQUFBLHFCQUEzQjtBQURMO0FBaEJKLGFBREo7QUEwQkg7Ozs7RUFwSmFXLE1BQU1DLFM7O0FBdUp4QkMsT0FBT2xELEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHBfMjAxODA1MjIyMDAyNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLnByb3BzLm1vdmllcyxcbiAgICAgICAgICAgIHRleHRCb3g6ICcnLFxuICAgICAgICAgICAgYWRkTW92aWVUZXh0OiAnJyxcbiAgICAgICAgICAgIGFsbDogdGhpcy5wcm9wcy5tb3ZpZXNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRleHRCb3hDaGFuZ2UodGV4dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRleHRCb3g6IHRleHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJNb3ZpZXModGV4dCkge1xuICAgICAgICBpZiAodGV4dCA9PT0gJycpIHsgXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudExpc3Q7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFsbC5maWx0ZXIoIG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmZpbHRlck1vdmllcyh0aGlzLnN0YXRlLnRleHRCb3gpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQWRkTW92aWVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS5hZGRNb3ZpZVRleHQsXG4gICAgICAgICAgICAgICAgd2F0Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgeWVhcjogMjAwMVxuICAgICAgICAgICAgfV0pLFxuICAgICAgICAgICAgYWxsOiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0LmNvbmNhdChbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLmFkZE1vdmllVGV4dCxcbiAgICAgICAgICAgICAgICB3YXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB5ZWFyOiAyMDAxXG4gICAgICAgICAgICB9XSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRNb3ZpZVRleHRCb3hDaGFuZ2UodGV4dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFkZE1vdmllVGV4dDogdGV4dFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlclRvV2F0Y2hPbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmZpbHRlckJ5VG9XYXRjaCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyQnlUb1dhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hbGwuZmlsdGVyKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS53YXRjaGVkID09PSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJXYXRjaGVkT25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJCeVdhdGNoZWQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlckJ5V2F0Y2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxsLmZpbHRlcihtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2soZSkge1xuICAgICAgICBlLm1vdmllLndhdGNoZWQgPSBlLm1vdmllLndhdGNoZWQgPyAhZS5tb3ZpZS53YXRjaGVkIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aWV3OiB0aGlzLnN0YXRlLnZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93QWxsTW92aWVzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLnN0YXRlLmFsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldE1vdmllcyhjYWxsYmFjaykge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgdG8gZ2V0IG1vdmllcycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FsbEdldE1vdmllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TW92aWVzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUdldE1vdmllc0NsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWxsOiB0aGlzLmNhbGxHZXRNb3ZpZXMoKSxcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmNhbGxHZXRNb3ZpZXMoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPk1vdmllTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUdldE1vdmllc0NsaWNrLmJpbmQodGhpcyl9PmdldCBtb3ZpZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXt0aGlzLnNob3dBbGxNb3ZpZXMuYmluZCh0aGlzKX0+c2hvdyBhbGwgbW92aWVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17dGhpcy5maWx0ZXJUb1dhdGNoT25DbGljay5iaW5kKHRoaXMpfT5maWx0ZXIgdG8gd2F0Y2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmlsdGVyV2F0Y2hlZE9uQ2xpY2suYmluZCh0aGlzKX0+ZmlsdGVyIHdhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxBZGRNb3ZpZSBcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkTW92aWVDbGljaz17dGhpcy5oYW5kbGVBZGRNb3ZpZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGFkZE1vdmllVGV4dEJveENoYW5nZT17dGhpcy5hZGRNb3ZpZVRleHRCb3hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PHdpbmRvdy5TZWFyY2ggXG4gICAgICAgICAgICAgICAgICAgIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TGlzdH0gXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2hDbGljay5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgdGV4dEJveENoYW5nZT17dGhpcy50ZXh0Qm94Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudExpc3QubWFwKChtb3ZpZSxpKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx3aW5kb3cuTW92aWVMaXN0IG1vdmllPXttb3ZpZX0ga2V5PXtpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2s9e3RoaXMudG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgKVxuICAgIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=