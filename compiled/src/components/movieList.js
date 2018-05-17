'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
    _inherits(MovieList, _React$Component);

    function MovieList(props) {
        _classCallCheck(this, MovieList);

        return _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));
    }

    _createClass(MovieList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var watched = this.props.movie.watched ? 'watched' : 'to watch';

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
                    { type: 'button', onClick: function onClick() {
                            return _this2.props.toggleWatchButtonOnClick(_this2.props);
                        } },
                    watched
                )
            );
        }
    }]);

    return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJ3YXRjaGVkIiwibW92aWUiLCJ0aXRsZSIsInRvZ2dsZVdhdGNoQnV0dG9uT25DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1RBLEtBRFM7QUFHbEI7Ozs7aUNBSVE7QUFBQTs7QUFFTCxnQkFBSUMsVUFBVSxLQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJELE9BQWpCLEdBQTJCLFNBQTNCLEdBQXVDLFVBQXJEOztBQUVBLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFNLHlCQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDO0FBQXZCLGlCQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsbUNBQU0sT0FBS0gsS0FBTCxDQUFXSSx3QkFBWCxDQUFvQyxPQUFLSixLQUF6QyxDQUFOO0FBQUEseUJBQS9CO0FBQXVGQztBQUF2RjtBQUZKLGFBREo7QUFNSDs7OztFQWxCbUJJLE1BQU1DLFM7O0FBd0I5QkMsT0FBT1IsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoibW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciB3YXRjaGVkID0gdGhpcy5wcm9wcy5tb3ZpZS53YXRjaGVkID8gJ3dhdGNoZWQnIDogJ3RvIHdhdGNoJztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLm1vdmllLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrKHRoaXMucHJvcHMpfT57d2F0Y2hlZH08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0Il19