'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
    _inherits(MovieList, _React$Component);

    function MovieList(props) {
        _classCallCheck(this, MovieList);

        var _this = _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));

        _this.state = {
            watched: false
        };
        return _this;
    }

    _createClass(MovieList, [{
        key: 'toggleWatched',
        value: function toggleWatched() {
            this.setState({
                watched: !this.state.watched
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var watched = this.state.watched ? 'to watch' : 'watched';

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    null,
                    this.props.movie.title
                ),
                React.createElement(
                    'button',
                    { type: 'button', onClick: this.toggleWatched.bind(this) },
                    watched
                )
            );
        }
    }]);

    return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJzdGF0ZSIsIndhdGNoZWQiLCJzZXRTdGF0ZSIsIm1vdmllIiwidGl0bGUiLCJ0b2dnbGVXYXRjaGVkIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUZlO0FBS2xCOzs7O3dDQUVlO0FBQ1osaUJBQUtDLFFBQUwsQ0FBYztBQUNWRCx5QkFBUyxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFEWCxhQUFkO0FBR0g7OztpQ0FFUTs7QUFFTCxnQkFBSUEsVUFBVSxLQUFLRCxLQUFMLENBQVdDLE9BQVgsR0FBcUIsVUFBckIsR0FBa0MsU0FBaEQ7O0FBRUEsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQU0seUJBQUtGLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkM7QUFBdkIsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVMsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBL0I7QUFBK0RMO0FBQS9EO0FBRkosYUFESjtBQU1IOzs7O0VBeEJtQk0sTUFBTUMsUzs7QUE4QjlCQyxPQUFPWCxTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJtb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdhdGNoZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVXYXRjaGVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdhdGNoZWQ6ICF0aGlzLnN0YXRlLndhdGNoZWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHdhdGNoZWQgPSB0aGlzLnN0YXRlLndhdGNoZWQgPyAndG8gd2F0Y2gnIDogJ3dhdGNoZWQnO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy50b2dnbGVXYXRjaGVkLmJpbmQodGhpcyl9Pnt3YXRjaGVkfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5cbndpbmRvdy5Nb3ZpZUxpc3QgPSBNb3ZpZUxpc3QiXX0=