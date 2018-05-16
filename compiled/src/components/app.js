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
            textBox: ''
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
        key: 'handleClick',
        value: function handleClick() {
            this.setState({
                currentList: this.filterMovies(this.state.textBox)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'MovieList'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(window.Search, {
                        movies: this.state.currentList,
                        search: this.handleClick.bind(this),
                        textBoxChange: this.textBoxChange.bind(this)
                    })
                ),
                React.createElement(
                    'div',
                    null,
                    this.state.currentList.map(function (movie, i) {
                        return React.createElement(window.MovieList, { movie: movie, key: i });
                    })
                )
            );
        }
    }]);

    return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRMaXN0IiwibW92aWVzIiwidGV4dEJveCIsInRleHQiLCJzZXRTdGF0ZSIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZmlsdGVyTW92aWVzIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwidGV4dEJveENoYW5nZSIsIm1hcCIsImkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYSxNQUFLRixLQUFMLENBQVdHLE1BRGY7QUFFVEMscUJBQVM7QUFGQSxTQUFiO0FBRmU7QUFNbEI7Ozs7c0NBRWFDLEksRUFBTTtBQUNoQixpQkFBS0MsUUFBTCxDQUFjO0FBQ1ZGLHlCQUFTQztBQURDLGFBQWQ7QUFHSDs7O3FDQUVZQSxJLEVBQU07QUFDZixnQkFBSUEsU0FBUyxFQUFiLEVBQWlCO0FBQ2YsdUJBQU8sS0FBS0osS0FBTCxDQUFXQyxXQUFsQjtBQUNELGFBRkQsTUFHSztBQUNILHVCQUFPLEtBQUtELEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkssTUFBdkIsQ0FBK0IsaUJBQVM7QUFDN0MsMkJBQU9DLE1BQU1DLEtBQU4sQ0FBWUMsV0FBWixHQUEwQkMsUUFBMUIsQ0FBbUNOLEtBQUtLLFdBQUwsRUFBbkMsQ0FBUDtBQUNELGlCQUZNLENBQVA7QUFHRDtBQUNGOzs7c0NBRVc7QUFDVixpQkFBS0osUUFBTCxDQUFjO0FBQ1ZKLDZCQUFhLEtBQUtVLFlBQUwsQ0FBa0IsS0FBS1gsS0FBTCxDQUFXRyxPQUE3QjtBQURILGFBQWQ7QUFHSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLHdDQUFDLE1BQUQsQ0FBUSxNQUFSO0FBQ0csZ0NBQVEsS0FBS0gsS0FBTCxDQUFXQyxXQUR0QjtBQUVHLGdDQUFRLEtBQUtXLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBRlg7QUFHRyx1Q0FBZSxLQUFLQyxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QjtBQUhsQjtBQUFMLGlCQUZBO0FBT0E7QUFBQTtBQUFBO0FBQ0sseUJBQUtiLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QmMsR0FBdkIsQ0FBMkIsVUFBQ1IsS0FBRCxFQUFPUyxDQUFQO0FBQUEsK0JBQ3pCLG9CQUFDLE1BQUQsQ0FBUSxTQUFSLElBQWtCLE9BQU9ULEtBQXpCLEVBQWdDLEtBQUtTLENBQXJDLEdBRHlCO0FBQUEscUJBQTNCO0FBREw7QUFQQSxhQURKO0FBZUg7Ozs7RUFoRGFDLE1BQU1DLFM7O0FBbUR4QkMsT0FBT3JCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLnByb3BzLm1vdmllcyxcbiAgICAgICAgICAgIHRleHRCb3g6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXh0Qm94Q2hhbmdlKHRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0Qm94OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmlsdGVyTW92aWVzKHRleHQpIHtcbiAgICAgICAgaWYgKHRleHQgPT09ICcnKSB7IFxuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRMaXN0OyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jdXJyZW50TGlzdC5maWx0ZXIoIG1vdmllID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtb3ZpZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0OiB0aGlzLmZpbHRlck1vdmllcyh0aGlzLnN0YXRlLnRleHRCb3gpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5Nb3ZpZUxpc3Q8L2gxPlxuICAgICAgICAgICAgPGRpdj48d2luZG93LlNlYXJjaCBcbiAgICAgICAgICAgICAgICAgICAgbW92aWVzPXt0aGlzLnN0YXRlLmN1cnJlbnRMaXN0fSBcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Qm94Q2hhbmdlPXt0aGlzLnRleHRCb3hDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY3VycmVudExpc3QubWFwKChtb3ZpZSxpKSA9PiBcbiAgICAgICAgICAgICAgICAgICA8d2luZG93Lk1vdmllTGlzdCBtb3ZpZT17bW92aWV9IGtleT17aX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiBcbiAgICAgICAgKVxuICAgIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=