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
                return this.state.currentList.filter(function (movie) {
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
            return this.state.currentList.filter(function (movie) {
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
            return this.state.currentList.filter(function (movie) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL2FwcF8yMDE4MDUyMjE4MjkzOC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwibW92aWVzIiwidGV4dEJveCIsImFkZE1vdmllVGV4dCIsImFsbCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiY29uY2F0Iiwid2F0Y2hlZCIsInllYXIiLCJmaWx0ZXJCeVRvV2F0Y2giLCJmaWx0ZXJCeVdhdGNoZWQiLCJlIiwidmlldyIsImZpbHRlclRvV2F0Y2hPbkNsaWNrIiwiYmluZCIsImZpbHRlcldhdGNoZWRPbkNsaWNrIiwiaGFuZGxlQWRkTW92aWVDbGljayIsImFkZE1vdmllVGV4dEJveENoYW5nZSIsImhhbmRsZVNlYXJjaENsaWNrIiwidGV4dEJveENoYW5nZSIsIm1hcCIsImkiLCJ0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxNQUFLRixLQUFMLENBQVdHLE1BRGY7QUFFVEMscUJBQVMsRUFGQTtBQUdUQywwQkFBYyxFQUhMO0FBSVRDLGlCQUFLLE1BQUtOLEtBQUwsQ0FBV0c7QUFKUCxTQUFiO0FBRmU7QUFRbEI7Ozs7c0NBRWFJLEksRUFBTTtBQUNoQixpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZKLHlCQUFTRztBQURDLGFBQWQ7QUFHSDs7O3FDQUVZQSxJLEVBQU07QUFDZixnQkFBSUEsU0FBUyxFQUFiLEVBQWlCO0FBQ2YsdUJBQU8sS0FBS04sS0FBTCxDQUFXQyxXQUFsQjtBQUNELGFB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a0IsT0FBT3BCLEtBQXpCLEVBQWdDLEtBQUtvQixDQUFyQztBQUNJLHNEQUEwQixPQUFLQyx3QkFBTCxDQUE4QlIsSUFBOUIsQ0FBbUMsTUFBbkM7QUFEOUIsMEJBRHdCO0FBQUEscUJBQTNCO0FBREw7QUFkSixhQURKO0FBd0JIOzs7O0VBMUdhUyxNQUFNQyxTOztBQTZHeEJDLE9BQU9uQyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwXzIwMTgwNTIyMTgyOTM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5wcm9wcy5tb3ZpZXMsXG4gICAgICAgICAgICB0ZXh0Qm94OiAnJyxcbiAgICAgICAgICAgIGFkZE1vdmllVGV4dDogJycsXG4gICAgICAgICAgICBhbGw6IHRoaXMucHJvcHMubW92aWVzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXh0Qm94Q2hhbmdlKHRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0Qm94OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyTW92aWVzKHRleHQpIHtcbiAgICAgICAgaWYgKHRleHQgPT09ICcnKSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0OyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5maWx0ZXIoIG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmZpbHRlck1vdmllcyh0aGlzLnN0YXRlLnRleHRCb3gpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQWRkTW92aWVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS5hZGRNb3ZpZVRleHQsXG4gICAgICAgICAgICAgICAgd2F0Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgeWVhcjogMjAwMVxuICAgICAgICAgICAgfV0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkTW92aWVUZXh0Qm94Q2hhbmdlKHRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhZGRNb3ZpZVRleHQ6IHRleHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJUb1dhdGNoT25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJCeVRvV2F0Y2goKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlckJ5VG9XYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudExpc3QuZmlsdGVyKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS53YXRjaGVkID09PSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJXYXRjaGVkT25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJCeVdhdGNoZWQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlckJ5V2F0Y2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudExpc3QuZmlsdGVyKG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS53YXRjaGVkO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVdhdGNoQnV0dG9uT25DbGljayhlKSB7XG4gICAgICAgIGUubW92aWUud2F0Y2hlZCA9IGUubW92aWUud2F0Y2hlZCA/ICFlLm1vdmllLndhdGNoZWQgOiB0cnVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpZXc6IHRoaXMuc3RhdGUudmlld1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPk1vdmllTGlzdDwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17dGhpcy5maWx0ZXJUb1dhdGNoT25DbGljay5iaW5kKHRoaXMpfT5maWx0ZXIgdG8gd2F0Y2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmlsdGVyV2F0Y2hlZE9uQ2xpY2suYmluZCh0aGlzKX0+ZmlsdGVyIHdhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxBZGRNb3ZpZSBcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkTW92aWVDbGljaz17dGhpcy5oYW5kbGVBZGRNb3ZpZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGFkZE1vdmllVGV4dEJveENoYW5nZT17dGhpcy5hZGRNb3ZpZVRleHRCb3hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+PHdpbmRvdy5TZWFyY2ggXG4gICAgICAgICAgICAgICAgICAgIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50TGlzdH0gXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2hDbGljay5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgdGV4dEJveENoYW5nZT17dGhpcy50ZXh0Qm94Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudExpc3QubWFwKChtb3ZpZSxpKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx3aW5kb3cuTW92aWVMaXN0IG1vdmllPXttb3ZpZX0ga2V5PXtpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2s9e3RoaXMudG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgKVxuICAgIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=