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
            addMovieText: ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL2FwcF8yMDE4MDUxNzA4NTMyMS5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwibW92aWVzIiwidGV4dEJveCIsImFkZE1vdmllVGV4dCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiY29uY2F0Iiwid2F0Y2hlZCIsInllYXIiLCJmaWx0ZXJCeVRvV2F0Y2giLCJmaWx0ZXJCeVdhdGNoZWQiLCJlIiwidmlldyIsImZpbHRlclRvV2F0Y2hPbkNsaWNrIiwiYmluZCIsImZpbHRlcldhdGNoZWRPbkNsaWNrIiwiaGFuZGxlQWRkTW92aWVDbGljayIsImFkZE1vdmllVGV4dEJveENoYW5nZSIsImhhbmRsZVNlYXJjaENsaWNrIiwidGV4dEJveENoYW5nZSIsIm1hcCIsImkiLCJ0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxNQUFLRixLQUFMLENBQVdHLE1BRGY7QUFFVEMscUJBQVMsRUFGQTtBQUdUQywwQkFBYztBQUhMLFNBQWI7QUFGZTtBQU9sQjs7OztzQ0FFYUMsSSxFQUFNO0FBQ2hCLGlCQUFLQyxRQUFMLENBQWM7QUFDVkgseUJBQVNFO0FBREMsYUFBZDtBQUdIOzs7cUNBRVlBLEksRUFBTTtBQUNmLGdCQUFJQSxTQUFTLEVBQWIsRUFBaUI7QUFDZix1QkFBTyxLQUFLTCxLQUFMLENBQVdDLFdBQWxCO0FBQ0QsYUFGRCxNQUdLO0FBQ0gsdUJBQU8sS0FBS0QsS0FBTCxDQUFXQyxXQUFY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REFBMEIsT0FBS0Msd0JBQUwsQ0FBOEJSLElBQTlCLENBQW1DLE1BQW5DO0FBRDlCLDBCQUR3QjtBQUFBLHFCQUEzQjtBQURMO0FBZEosYUFESjtBQXdCSDs7OztFQXpHYVMsTUFBTUMsUzs7QUE0R3hCQyxPQUFPbEMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcF8yMDE4MDUxNzA4NTMyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMucHJvcHMubW92aWVzLFxuICAgICAgICAgICAgdGV4dEJveDogJycsXG4gICAgICAgICAgICBhZGRNb3ZpZVRleHQ6ICcnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGV4dEJveENoYW5nZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dEJveDogdGV4dFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpbHRlck1vdmllcyh0ZXh0KSB7XG4gICAgICAgIGlmICh0ZXh0ID09PSAnJykgeyBcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50TGlzdDsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudExpc3QuZmlsdGVyKCBtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBoYW5kbGVTZWFyY2hDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50TGlzdDogdGhpcy5maWx0ZXJNb3ZpZXModGhpcy5zdGF0ZS50ZXh0Qm94KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUFkZE1vdmllQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuc3RhdGUuY3VycmVudExpc3QuY29uY2F0KFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUuYWRkTW92aWVUZXh0LFxuICAgICAgICAgICAgICAgIHdhdGNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHllYXI6IDIwMDFcbiAgICAgICAgICAgIH1dKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZE1vdmllVGV4dEJveENoYW5nZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWRkTW92aWVUZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyVG9XYXRjaE9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZmlsdGVyQnlUb1dhdGNoKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJCeVRvV2F0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0LmZpbHRlcihtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZCA9PT0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyV2F0Y2hlZE9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudExpc3Q6IHRoaXMuZmlsdGVyQnlXYXRjaGVkKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaWx0ZXJCeVdhdGNoZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0LmZpbHRlcihtb3ZpZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW92aWUud2F0Y2hlZDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2soZSkge1xuICAgICAgICBlLm1vdmllLndhdGNoZWQgPSBlLm1vdmllLndhdGNoZWQgPyAhZS5tb3ZpZS53YXRjaGVkIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aWV3OiB0aGlzLnN0YXRlLnZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Nb3ZpZUxpc3Q8L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e3RoaXMuZmlsdGVyVG9XYXRjaE9uQ2xpY2suYmluZCh0aGlzKX0+ZmlsdGVyIHRvIHdhdGNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZpbHRlcldhdGNoZWRPbkNsaWNrLmJpbmQodGhpcyl9PmZpbHRlciB3YXRjaGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdj48QWRkTW92aWUgXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFkZE1vdmllQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW92aWVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBhZGRNb3ZpZVRleHRCb3hDaGFuZ2U9e3RoaXMuYWRkTW92aWVUZXh0Qm94Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pjx3aW5kb3cuU2VhcmNoIFxuICAgICAgICAgICAgICAgICAgICBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudExpc3R9IFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNoQ2xpY2suYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgIHRleHRCb3hDaGFuZ2U9e3RoaXMudGV4dEJveENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRMaXN0Lm1hcCgobW92aWUsaSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8d2luZG93Lk1vdmllTGlzdCBtb3ZpZT17bW92aWV9IGtleT17aX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrPXt0aGlzLnRvZ2dsZVdhdGNoQnV0dG9uT25DbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIClcbiAgICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19