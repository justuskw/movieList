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
        value: function getMovies() {}
    }, {
        key: 'handleGetMoviesClick',
        value: function handleGetMoviesClick() {
            this.setState({
                all: this.getMovies()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL2FwcF8yMDE4MDUyMjE5MzAwNi5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwibW92aWVzIiwidGV4dEJveCIsImFkZE1vdmllVGV4dCIsImFsbCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiY29uY2F0Iiwid2F0Y2hlZCIsInllYXIiLCJmaWx0ZXJCeVRvV2F0Y2giLCJmaWx0ZXJCeVdhdGNoZWQiLCJlIiwidmlldyIsImdldE1vdmllcyIsImhhbmRsZUdldE1vdmllc0NsaWNrIiwiYmluZCIsInNob3dBbGxNb3ZpZXMiLCJmaWx0ZXJUb1dhdGNoT25DbGljayIsImZpbHRlcldhdGNoZWRPbkNsaWNrIiwiaGFuZGxlQWRkTW92aWVDbGljayIsImFkZE1vdmllVGV4dEJveENoYW5nZSIsImhhbmRsZVNlYXJjaENsaWNrIiwidGV4dEJveENoYW5nZSIsIm1hcCIsImkiLCJ0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxNQUFLRixLQUFMLENBQVdHLE1BRGY7QUFFVEMscUJBQVMsRUFGQTtBQUdUQywwQkFBYyxFQUhMO0FBSVRDLGlCQUFLLE1BQUtOLEtBQUwsQ0FBV0c7QUFKUCxTQUFiO0FBRmU7QUFRbEI7Ozs7c0NBRWFJLEksRUFBTTtBQUNoQixpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZKLHlCQUFTRztBQURDLGFBQWQ7QUFHSDs7O3FDQUVZQSxJLEVBQU07QUFDZixnQkFBSUEsU0FBUyxF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QUFMLENBQTBCSCxJQUExQixDQUErQixJQUEvQixDQUFqQjtBQUFBO0FBQUEsaUJBTEo7QUFNSTtBQUFBO0FBQUE7QUFBSyx3Q0FBQyxRQUFEO0FBQ0QsNkNBQXFCLEtBQUtJLG1CQUFMLENBQXlCSixJQUF6QixDQUE4QixJQUE5QixDQURwQjtBQUVELCtDQUF1QixLQUFLSyxxQkFBTCxDQUEyQkwsSUFBM0IsQ0FBZ0MsSUFBaEM7QUFGdEI7QUFBTCxpQkFOSjtBQVVJO0FBQUE7QUFBQTtBQUFLLHdDQUFDLE1BQUQsQ0FBUSxNQUFSO0FBQ0QsZ0NBQVEsS0FBS3ZCLEtBQUwsQ0FBV0MsV0FEbEI7QUFFRCxnQ0FBUSxLQUFLNEIsaUJBQUwsQ0FBdUJOLElBQXZCLENBQTRCLElBQTVCLENBRlA7QUFHRCx1Q0FBZSxLQUFLTyxhQUFMLENBQW1CUCxJQUFuQixDQUF3QixJQUF4QjtBQUhkO0FBQUwsaUJBVko7QUFnQkk7QUFBQTtBQUFBO0FBQ0sseUJBQUt2QixLQUFMLENBQVdDLFdBQVgsQ0FBdUI4QixHQUF2QixDQUEyQixVQUFDdEIsS0FBRCxFQUFPdUIsQ0FBUDtBQUFBLCtCQUN4QixvQkFBQyxNQUFELENBQVEsU0FBUixJQUFrQixPQUFPdkIsS0FBekIsRUFBZ0MsS0FBS3VCLENBQXJDO0FBQ0ksc0RBQTBCLE9BQUtDLHdCQUFMLENBQThCVixJQUE5QixDQUFtQyxNQUFuQztBQUQ5QiwwQkFEd0I7QUFBQSxxQkFBM0I7QUFETDtBQWhCSixhQURKO0FBMEJIOzs7O0VBaklhVyxNQUFNQyxTOztBQW9JeEJDLE9BQU90QyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwXzIwMTgwNTIyMTkzMDA2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5wcm9wcy5tb3ZpZXMsXG4gICAgICAgICAgICB0ZXh0Qm94OiAnJyxcbiAgICAgICAgICAgIGFkZE1vdmllVGV4dDogJycsXG4gICAgICAgICAgICBhbGw6IHRoaXMucHJvcHMubW92aWVzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXh0Qm94Q2hhbmdlKHRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0Qm94OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyTW92aWVzKHRleHQpIHtcbiAgICAgICAgaWYgKHRleHQgPT09ICcnKSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0OyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hbGwuZmlsdGVyKCBtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBoYW5kbGVTZWFyY2hDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJNb3ZpZXModGhpcy5zdGF0ZS50ZXh0Qm94KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUFkZE1vdmllQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuc3RhdGUuY3VycmVudExpc3QuY29uY2F0KFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWVUZXh0LFxuICAgICAgICAgICAgICAgIHdhdGNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHllYXI6IDIwMDFcbiAgICAgICAgICAgIH1dKSxcbiAgICAgICAgICAgIGFsbDogdGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS5hZGRNb3ZpZVRleHQsXG4gICAgICAgICAgICAgICAgd2F0Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgeWVhcjogMjAwMVxuICAgICAgICAgICAgfV0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkTW92aWVUZXh0Qm94Q2hhbmdlKHRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhZGRNb3ZpZVRleHQ6IHRleHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJUb1dhdGNoT25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJCeVRvV2F0Y2goKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlckJ5VG9XYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxsLmZpbHRlcihtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZCA9PT0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyV2F0Y2hlZE9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZmlsdGVyQnlXYXRjaGVkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJCeVdhdGNoZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFsbC5maWx0ZXIobW92aWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmllLndhdGNoZWQ7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrKGUpIHtcbiAgICAgICAgZS5tb3ZpZS53YXRjaGVkID0gZS5tb3ZpZS53YXRjaGVkID8gIWUubW92aWUud2F0Y2hlZCA6IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlldzogdGhpcy5zdGF0ZS52aWV3XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2hvd0FsbE1vdmllcygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5zdGF0ZS5hbGxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRNb3ZpZXMoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUdldE1vdmllc0NsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFsbDogdGhpcy5nZXRNb3ZpZXMoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPk1vdmllTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNMaWNrPXt0aGlzLmhhbmRsZUdldE1vdmllc0NsaWNrLmJpbmQodGhpcyl9PmdldCBtb3ZpZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXt0aGlzLnNob3dBbGxNb3ZpZXMuYmluZCh0aGlzKX0+c2hvdyBhbGwgbW92aWVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17dGhpcy5maWx0ZXJUb1dhdGNoT25DbGljay5iaW5kKHRoaXMpfT5maWx0ZXIgdG8gd2F0Y2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmlsdGVyV2F0Y2hlZE9uQ2xpY2suYmluZCh0aGlzKX0+ZmlsdGVyIHdhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxBZGRNb3ZpZSBcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkTW92aWVDbGljaz17dGhpcy5oYW5kbGVBZGRNb3ZpZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGFkZE1vdmllVGV4dEJveENoYW5nZT17dGhpcy5hZGRNb3ZpZVRleHRCb3hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PHdpbmRvdy5TZWFyY2ggXG4gICAgICAgICAgICAgICAgICAgIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TGlzdH0gXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2hDbGljay5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgdGV4dEJveENoYW5nZT17dGhpcy50ZXh0Qm94Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudExpc3QubWFwKChtb3ZpZSxpKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx3aW5kb3cuTW92aWVMaXN0IG1vdmllPXttb3ZpZX0ga2V5PXtpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2s9e3RoaXMudG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgKVxuICAgIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=