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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL2FwcF8yMDE4MDUyMjE5NTUwNy5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwidGV4dEJveCIsImFkZE1vdmllVGV4dCIsImFsbCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiY29uY2F0Iiwid2F0Y2hlZCIsInllYXIiLCJmaWx0ZXJCeVRvV2F0Y2giLCJmaWx0ZXJCeVdhdGNoZWQiLCJlIiwidmlldyIsImNhbGxiYWNrIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldE1vdmllcyIsImNhbGxHZXRNb3ZpZXMiLCJoYW5kbGVHZXRNb3ZpZXNDbGljayIsImJpbmQiLCJzaG93QWxsTW92aWVzIiwiZmlsdGVyVG9XYXRjaE9uQ2xpY2siLCJmaWx0ZXJXYXRjaGVkT25DbGljayIsImhhbmRsZUFkZE1vdmllQ2xpY2siLCJhZGRNb3ZpZVRleHRCb3hDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDbGljayIsInRleHRCb3hDaGFuZ2UiLCJtYXAiLCJpIiwidG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMseUJBQWEsRUFESjtBQUVUQyxxQkFBUyxFQUZBO0FBR1RDLDBCQUFjLEVBSEw7QUFJVEMsaUJBQUs7QUFKSSxTQUFiO0FBRmU7QUFRbEI7Ozs7c0NBRWFDLEksRUFBTTtBQUNoQixpQkFBS0MsUUFBTCxDQUFjO0FB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QyxHQUF2QixDQUEyQixVQUFDbEMsS0FBRCxFQUFPbUMsQ0FBUDtBQUFBLCtCQUN4QixvQkFBQyxNQUFELENBQVEsU0FBUixJQUFrQixPQUFPbkMsS0FBekIsRUFBZ0MsS0FBS21DLENBQXJDO0FBQ0ksc0RBQTBCLE9BQUtDLHdCQUFMLENBQThCVixJQUE5QixDQUFtQyxNQUFuQztBQUQ5QiwwQkFEd0I7QUFBQSxxQkFBM0I7QUFETDtBQWhCSixhQURKO0FBMEJIOzs7O0VBcEphVyxNQUFNQyxTOztBQXVKeEJDLE9BQU9qRCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwXzIwMTgwNTIyMTk1NTA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogW10sXG4gICAgICAgICAgICB0ZXh0Qm94OiAnJyxcbiAgICAgICAgICAgIGFkZE1vdmllVGV4dDogJycsXG4gICAgICAgICAgICBhbGw6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXh0Qm94Q2hhbmdlKHRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0Qm94OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyTW92aWVzKHRleHQpIHtcbiAgICAgICAgaWYgKHRleHQgPT09ICcnKSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0OyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5hbGwuZmlsdGVyKCBtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBoYW5kbGVTZWFyY2hDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJNb3ZpZXModGhpcy5zdGF0ZS50ZXh0Qm94KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUFkZE1vdmllQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuc3RhdGUuY3VycmVudExpc3QuY29uY2F0KFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWVUZXh0LFxuICAgICAgICAgICAgICAgIHdhdGNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHllYXI6IDIwMDFcbiAgICAgICAgICAgIH1dKSxcbiAgICAgICAgICAgIGFsbDogdGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS5hZGRNb3ZpZVRleHQsXG4gICAgICAgICAgICAgICAgd2F0Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgeWVhcjogMjAwMVxuICAgICAgICAgICAgfV0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkTW92aWVUZXh0Qm94Q2hhbmdlKHRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhZGRNb3ZpZVRleHQ6IHRleHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJUb1dhdGNoT25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJCeVRvV2F0Y2goKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlckJ5VG9XYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxsLmZpbHRlcihtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZCA9PT0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyV2F0Y2hlZE9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZmlsdGVyQnlXYXRjaGVkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJCeVdhdGNoZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFsbC5maWx0ZXIobW92aWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmllLndhdGNoZWQ7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrKGUpIHtcbiAgICAgICAgZS5tb3ZpZS53YXRjaGVkID0gZS5tb3ZpZS53YXRjaGVkID8gIWUubW92aWUud2F0Y2hlZCA6IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlldzogdGhpcy5zdGF0ZS52aWV3XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2hvd0FsbE1vdmllcygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5zdGF0ZS5hbGxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRNb3ZpZXMoY2FsbGJhY2spIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWxlZCB0byBnZXQgbW92aWVzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjYWxsR2V0TW92aWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRNb3ZpZXMoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlR2V0TW92aWVzQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbGw6IHRoaXMuY2FsbEdldE1vdmllcygpLFxuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuY2FsbEdldE1vdmllcygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TW92aWVMaXN0PC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ0xpY2s9e3RoaXMuaGFuZGxlR2V0TW92aWVzQ2xpY2suYmluZCh0aGlzKX0+Z2V0IG1vdmllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e3RoaXMuc2hvd0FsbE1vdmllcy5iaW5kKHRoaXMpfT5zaG93IGFsbCBtb3ZpZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXt0aGlzLmZpbHRlclRvV2F0Y2hPbkNsaWNrLmJpbmQodGhpcyl9PmZpbHRlciB0byB3YXRjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5maWx0ZXJXYXRjaGVkT25DbGljay5iaW5kKHRoaXMpfT5maWx0ZXIgd2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXY+PEFkZE1vdmllIFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBZGRNb3ZpZUNsaWNrPXt0aGlzLmhhbmRsZUFkZE1vdmllQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgYWRkTW92aWVUZXh0Qm94Q2hhbmdlPXt0aGlzLmFkZE1vdmllVGV4dEJveENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48d2luZG93LlNlYXJjaCBcbiAgICAgICAgICAgICAgICAgICAgbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRMaXN0fSBcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaENsaWNrLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94Q2hhbmdlPXt0aGlzLnRleHRCb3hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5tYXAoKG1vdmllLGkpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHdpbmRvdy5Nb3ZpZUxpc3QgbW92aWU9e21vdmllfSBrZXk9e2l9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVdhdGNoQnV0dG9uT25DbGljaz17dGhpcy50b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICApXG4gICAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==