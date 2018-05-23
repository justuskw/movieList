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
            movieDetails: false
        };
        return _this;
    }

    _createClass(MovieList, [{
        key: 'handleTitleClick',
        value: function handleTitleClick(movie) {
            console.log('click');
            this.setState({
                movieDetails: this.state.movieDetails ? false : true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var watched = this.props.movie.watched ? 'watched' : 'to watch';
            var details = this.state.movieDetails ? React.createElement(MovieDetails, { movie: this.props.movie }) : '';

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { onClick: this.handleTitleClick.bind(this) },
                    this.props.movie.title
                ),
                React.createElement(
                    'div',
                    null,
                    details
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL21vdmllTGlzdF8yMDE4MDUxNzEwNDQ1NC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllRGV0YWlscyIsIm1vdmllIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwid2F0Y2hlZCIsImRldGFpbHMiLCJoYW5kbGVUaXRsZUNsaWNrIiwiYmluZCIsInRpdGxlIiwidG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsMEJBQWM7QUFETCxTQUFiO0FBRmU7QUFLbEI7Ozs7eUNBRWdCQyxLLEVBQU87QUFDcEJDLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLGlCQUFLQyxRQUFMLENBQWM7QUFDVkosOEJBQWMsS0FBS0QsS0FBTCxDQUFXQyxZQUFYLEdBQTBCLEtBQTFCLEdBQWtDO0FBRHRDLGFBQWQ7QUFHSDs7O2lDQUVRO0FBQUE7O0FBRUwsZ0JBQUlLLFVBQVUsS0FBS1AsS0FBTCxDQUFXRyxLQUFYLENBQWlCSSxPQUFqQixHQUEyQixTQUEzQixHQUF1QyxVQUFyRDtBQUNBLGdCQUFJQyxVQUFVLEtBQUtQLEtBQUwsQ0FBV0MsWUFBWCxHQUEwQixvQkFBQyxZQUFELElBQWMsT0FBTyxLQUFLRixLQUFMLENBQVdHLEtBQWhDLEdBQTFCLEdBQXNFLEVBQXBGOztBQUVBLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxTQUFTLEtBQUtNLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUFkO0FBQWlELHlCQUFLVixLQUFMLENBQVdHLEtBQVgsQ0FBaUJRO0FBQWxFLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQU1IO0FBQU4saUJBRko7QUFHSTtBQUFBO0FBQUEsc0JBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVM7QUFBQSxtQ0FBTSxPQUFLUixLQUFMLENBQVdZLHdCQUFYLENBQW9DLE9BQUtaLEtBQXpDLENBQU47QUFBQSx5QkFBL0I7QUFBdUZPO0FBQXZGO0FBSEosYUFESjtBQU9IOzs7O0VBM0JtQk0sTUFBTUMsUzs7QUFpQzlCQyxPQUFPaEIsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoibW92aWVMaXN0XzIwMTgwNTE3MTA0NDU0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZURldGFpbHM6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVGl0bGVDbGljayhtb3ZpZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vdmllRGV0YWlsczogdGhpcy5zdGF0ZS5tb3ZpZURldGFpbHMgPyBmYWxzZSA6IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHdhdGNoZWQgPSB0aGlzLnByb3BzLm1vdmllLndhdGNoZWQgPyAnd2F0Y2hlZCcgOiAndG8gd2F0Y2gnO1xuICAgICAgICB2YXIgZGV0YWlscyA9IHRoaXMuc3RhdGUubW92aWVEZXRhaWxzID8gPE1vdmllRGV0YWlscyBtb3ZpZT17dGhpcy5wcm9wcy5tb3ZpZX0gLz4gOiAnJztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGVDbGljay5iaW5kKHRoaXMpfT57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PntkZXRhaWxzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrKHRoaXMucHJvcHMpfT57d2F0Y2hlZH08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0Il19