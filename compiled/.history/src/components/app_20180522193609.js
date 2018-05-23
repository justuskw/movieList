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
            currentList: [],
            textBox: '',
            addMovieText: '',
            all: []
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
                url: 'http://localhost:3000/',
                type: 'GET',
                dataType: 'json',
                success: function success(data) {
                    console.log('data', data);
                    callback(data);
                }
            });
        }
    }, {
        key: 'handleGetMoviesClick',
        value: function handleGetMoviesClick() {
            console.log('clicked');
            this.setState({
                all: this.getMovies(function (data) {
                    return data;
                }),
                currentList: this.getMovies(function (data) {
                    return data;
                })
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
                    { onCLick: this.handleGetMoviesClick.bind(this) },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL2FwcF8yMDE4MDUyMjE5MzYwOS5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwidGV4dEJveCIsImFkZE1vdmllVGV4dCIsImFsbCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiY29uY2F0Iiwid2F0Y2hlZCIsInllYXIiLCJmaWx0ZXJCeVRvV2F0Y2giLCJmaWx0ZXJCeVdhdGNoZWQiLCJlIiwidmlldyIsImNhbGxiYWNrIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRNb3ZpZXMiLCJoYW5kbGVHZXRNb3ZpZXNDbGljayIsImJpbmQiLCJzaG93QWxsTW92aWVzIiwiZmlsdGVyVG9XYXRjaE9uQ2xpY2siLCJmaWx0ZXJXYXRjaGVkT25DbGljayIsImhhbmRsZUFkZE1vdmllQ2xpY2siLCJhZGRNb3ZpZVRleHRCb3hDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDbGljayIsInRleHRCb3hDaGFuZ2UiLCJtYXAiLCJpIiwidG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsRUFESjtBQUVUQyxxQkFBUyxFQUZBO0FBR1RDLDBCQUFjLEVBSEw7QUFJVEMsaUJBQUs7QUFKSSxTQUFiO0FBRmU7QUFRbEI7Ozs7c0NBRWFDLEksRUFBTTtBQUNoQixpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZKLHlCQUFTRztBQURDLGFBQWQ7QUFH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SUFBa0IsT0FBT2pDLEtBQXpCLEVBQWdDLEtBQUtpQyxDQUFyQztBQUNJLHNEQUEwQixPQUFLQyx3QkFBTCxDQUE4QlYsSUFBOUIsQ0FBbUMsTUFBbkM7QUFEOUIsMEJBRHdCO0FBQUEscUJBQTNCO0FBREw7QUFoQkosYUFESjtBQTBCSDs7OztFQS9JYVcsTUFBTUMsUzs7QUFrSnhCQyxPQUFPL0MsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcF8yMDE4MDUyMjE5MzYwOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IFtdLFxuICAgICAgICAgICAgdGV4dEJveDogJycsXG4gICAgICAgICAgICBhZGRNb3ZpZVRleHQ6ICcnLFxuICAgICAgICAgICAgYWxsOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGV4dEJveENoYW5nZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dEJveDogdGV4dFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlck1vdmllcyh0ZXh0KSB7XG4gICAgICAgIGlmICh0ZXh0ID09PSAnJykgeyBcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50TGlzdDsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxsLmZpbHRlciggbW92aWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZmlsdGVyTW92aWVzKHRoaXMuc3RhdGUudGV4dEJveClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVBZGRNb3ZpZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0LmNvbmNhdChbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLmFkZE1vdmllVGV4dCxcbiAgICAgICAgICAgICAgICB3YXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB5ZWFyOiAyMDAxXG4gICAgICAgICAgICB9XSksXG4gICAgICAgICAgICBhbGw6IHRoaXMuc3RhdGUuY3VycmVudExpc3QuY29uY2F0KFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWVUZXh0LFxuICAgICAgICAgICAgICAgIHdhdGNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHllYXI6IDIwMDFcbiAgICAgICAgICAgIH1dKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZE1vdmllVGV4dEJveENoYW5nZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWRkTW92aWVUZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyVG9XYXRjaE9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZmlsdGVyQnlUb1dhdGNoKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJCeVRvV2F0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFsbC5maWx0ZXIobW92aWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmllLndhdGNoZWQgPT09IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlcldhdGNoZWRPbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmZpbHRlckJ5V2F0Y2hlZCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyQnlXYXRjaGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hbGwuZmlsdGVyKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS53YXRjaGVkO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVdhdGNoQnV0dG9uT25DbGljayhlKSB7XG4gICAgICAgIGUubW92aWUud2F0Y2hlZCA9IGUubW92aWUud2F0Y2hlZCA/ICFlLm1vdmllLndhdGNoZWQgOiB0cnVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpZXc6IHRoaXMuc3RhdGUudmlld1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dBbGxNb3ZpZXMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuc3RhdGUuYWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0TW92aWVzKGNhbGxiYWNrKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUdldE1vdmllc0NsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWxsOiB0aGlzLmdldE1vdmllcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmdldE1vdmllcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPk1vdmllTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNMaWNrPXt0aGlzLmhhbmRsZUdldE1vdmllc0NsaWNrLmJpbmQodGhpcyl9PmdldCBtb3ZpZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXt0aGlzLnNob3dBbGxNb3ZpZXMuYmluZCh0aGlzKX0+c2hvdyBhbGwgbW92aWVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17dGhpcy5maWx0ZXJUb1dhdGNoT25DbGljay5iaW5kKHRoaXMpfT5maWx0ZXIgdG8gd2F0Y2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmlsdGVyV2F0Y2hlZE9uQ2xpY2suYmluZCh0aGlzKX0+ZmlsdGVyIHdhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxBZGRNb3ZpZSBcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkTW92aWVDbGljaz17dGhpcy5oYW5kbGVBZGRNb3ZpZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGFkZE1vdmllVGV4dEJveENoYW5nZT17dGhpcy5hZGRNb3ZpZVRleHRCb3hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PHdpbmRvdy5TZWFyY2ggXG4gICAgICAgICAgICAgICAgICAgIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TGlzdH0gXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2hDbGljay5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgdGV4dEJveENoYW5nZT17dGhpcy50ZXh0Qm94Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudExpc3QubWFwKChtb3ZpZSxpKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx3aW5kb3cuTW92aWVMaXN0IG1vdmllPXttb3ZpZX0ga2V5PXtpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2s9e3RoaXMudG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgKVxuICAgIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=