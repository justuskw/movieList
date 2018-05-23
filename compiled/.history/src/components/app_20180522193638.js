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
                },
                error: function error() {
                    console.error('failed to get movies');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL2FwcF8yMDE4MDUyMjE5MzYzOC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwidGV4dEJveCIsImFkZE1vdmllVGV4dCIsImFsbCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiY29uY2F0Iiwid2F0Y2hlZCIsInllYXIiLCJmaWx0ZXJCeVRvV2F0Y2giLCJmaWx0ZXJCeVdhdGNoZWQiLCJlIiwidmlldyIsImNhbGxiYWNrIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldE1vdmllcyIsImhhbmRsZUdldE1vdmllc0NsaWNrIiwiYmluZCIsInNob3dBbGxNb3ZpZXMiLCJmaWx0ZXJUb1dhdGNoT25DbGljayIsImZpbHRlcldhdGNoZWRPbkNsaWNrIiwiaGFuZGxlQWRkTW92aWVDbGljayIsImFkZE1vdmllVGV4dEJveENoYW5nZSIsImhhbmRsZVNlYXJjaENsaWNrIiwidGV4dEJveENoYW5nZSIsIm1hcCIsImkiLCJ0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxFQURKO0FBRVRDLHFCQUFTLEVBRkE7QUFHVEMsMEJBQWMsRUFITDtBQUlUQyxpQkFBSztBQUpJLFNBQWI7QUFGZTtBQVFsQjs7OztzQ0FFYUMsSSxFQUFNO0FBQ2hCLGlCQUFLQyxRQUFMLENBQWM7QUFDVkoseUJBQVNHO0FBREMs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dkIsQ0FBMkIsVUFBQ2pDLEtBQUQsRUFBT2tDLENBQVA7QUFBQSwrQkFDeEIsb0JBQUMsTUFBRCxDQUFRLFNBQVIsSUFBa0IsT0FBT2xDLEtBQXpCLEVBQWdDLEtBQUtrQyxDQUFyQztBQUNJLHNEQUEwQixPQUFLQyx3QkFBTCxDQUE4QlYsSUFBOUIsQ0FBbUMsTUFBbkM7QUFEOUIsMEJBRHdCO0FBQUEscUJBQTNCO0FBREw7QUFoQkosYUFESjtBQTBCSDs7OztFQWxKYVcsTUFBTUMsUzs7QUFxSnhCQyxPQUFPaEQsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcF8yMDE4MDUyMjE5MzYzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IFtdLFxuICAgICAgICAgICAgdGV4dEJveDogJycsXG4gICAgICAgICAgICBhZGRNb3ZpZVRleHQ6ICcnLFxuICAgICAgICAgICAgYWxsOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGV4dEJveENoYW5nZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dEJveDogdGV4dFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlck1vdmllcyh0ZXh0KSB7XG4gICAgICAgIGlmICh0ZXh0ID09PSAnJykgeyBcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50TGlzdDsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxsLmZpbHRlciggbW92aWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZmlsdGVyTW92aWVzKHRoaXMuc3RhdGUudGV4dEJveClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVBZGRNb3ZpZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0LmNvbmNhdChbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLmFkZE1vdmllVGV4dCxcbiAgICAgICAgICAgICAgICB3YXRjaGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB5ZWFyOiAyMDAxXG4gICAgICAgICAgICB9XSksXG4gICAgICAgICAgICBhbGw6IHRoaXMuc3RhdGUuY3VycmVudExpc3QuY29uY2F0KFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWVUZXh0LFxuICAgICAgICAgICAgICAgIHdhdGNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHllYXI6IDIwMDFcbiAgICAgICAgICAgIH1dKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZE1vdmllVGV4dEJveENoYW5nZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWRkTW92aWVUZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyVG9XYXRjaE9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZmlsdGVyQnlUb1dhdGNoKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJCeVRvV2F0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFsbC5maWx0ZXIobW92aWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmllLndhdGNoZWQgPT09IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlcldhdGNoZWRPbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmZpbHRlckJ5V2F0Y2hlZCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyQnlXYXRjaGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hbGwuZmlsdGVyKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS53YXRjaGVkO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVdhdGNoQnV0dG9uT25DbGljayhlKSB7XG4gICAgICAgIGUubW92aWUud2F0Y2hlZCA9IGUubW92aWUud2F0Y2hlZCA/ICFlLm1vdmllLndhdGNoZWQgOiB0cnVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpZXc6IHRoaXMuc3RhdGUudmlld1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dBbGxNb3ZpZXMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuc3RhdGUuYWxsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0TW92aWVzKGNhbGxiYWNrKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgdG8gZ2V0IG1vdmllcycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlR2V0TW92aWVzQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbGw6IHRoaXMuZ2V0TW92aWVzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZ2V0TW92aWVzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TW92aWVMaXN0PC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ0xpY2s9e3RoaXMuaGFuZGxlR2V0TW92aWVzQ2xpY2suYmluZCh0aGlzKX0+Z2V0IG1vdmllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e3RoaXMuc2hvd0FsbE1vdmllcy5iaW5kKHRoaXMpfT5zaG93IGFsbCBtb3ZpZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXt0aGlzLmZpbHRlclRvV2F0Y2hPbkNsaWNrLmJpbmQodGhpcyl9PmZpbHRlciB0byB3YXRjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5maWx0ZXJXYXRjaGVkT25DbGljay5iaW5kKHRoaXMpfT5maWx0ZXIgd2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXY+PEFkZE1vdmllIFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBZGRNb3ZpZUNsaWNrPXt0aGlzLmhhbmRsZUFkZE1vdmllQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgYWRkTW92aWVUZXh0Qm94Q2hhbmdlPXt0aGlzLmFkZE1vdmllVGV4dEJveENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48d2luZG93LlNlYXJjaCBcbiAgICAgICAgICAgICAgICAgICAgbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRMaXN0fSBcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaENsaWNrLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94Q2hhbmdlPXt0aGlzLnRleHRCb3hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5tYXAoKG1vdmllLGkpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHdpbmRvdy5Nb3ZpZUxpc3QgbW92aWU9e21vdmllfSBrZXk9e2l9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVdhdGNoQnV0dG9uT25DbGljaz17dGhpcy50b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICApXG4gICAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==