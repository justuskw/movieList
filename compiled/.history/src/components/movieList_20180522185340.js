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
            var details = this.state.movieDetails ? React.createElement(MovieDetails, { toggleWatchButtonOnClick: toggleWatchButtonOnClick, watched: watched, movie: this.props.movie }) : '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL21vdmllTGlzdF8yMDE4MDUyMjE4NTM0MC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllRGV0YWlscyIsIm1vdmllIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwid2F0Y2hlZCIsImRldGFpbHMiLCJ0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2siLCJoYW5kbGVUaXRsZUNsaWNrIiwiYmluZCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsMEJBQWM7QUFETCxTQUFiO0FBRmU7QUFLbEI7Ozs7eUNBRWdCQyxLLEVBQU87QUFDcEJDLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLGlCQUFLQyxRQUFMLENBQWM7QUFDVkosOEJBQWMsS0FBS0QsS0FBTCxDQUFXQyxZQUFYLEdBQTBCLEtBQTFCLEdBQWtDO0FBRHRDLGFBQWQ7QUFHSDs7O2lDQUVRO0FBQUE7O0FBRUwsZ0JBQUlLLFVBQVUsS0FBS1AsS0FBTCxDQUFXRyxLQUFYLENBQWlCSSxPQUFqQixHQUEyQixTQUEzQixHQUF1QyxVQUFyRDtBQUNBLGdCQUFJQyxVQUFVLEtBQUtQLEtBQUwsQ0FBV0MsWUFBWCxHQUEwQixvQkFBQyxZQUFELElBQWMsMEJBQTBCTyx3QkFBeEMsRUFBa0UsU0FBU0YsT0FBM0UsRUFBb0YsT0FBTyxLQUFLUCxLQUFMLENBQVdHLEtBQXRHLEdBQTFCLEdBQTRJLEVBQTFKOztBQUVBLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxTQUFTLEtBQUtPLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUFkO0FBQWlELHlCQUFLWCxLQUFMLENBQVdHLEtBQVgsQ0FBaUJTO0FBQWxFLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQU1KO0FBQU4saUJBRko7QUFHSTtBQUFBO0FBQUEsc0JBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVM7QUFBQSxtQ0FBTSxPQUFLUixLQUFMLENBQVdTLHdCQUFYLENBQW9DLE9BQUtULEtBQXpDLENBQU47QUFBQSx5QkFBL0I7QUFBdUZPO0FBQXZGO0FBSEosYUFESjtBQU9IOzs7O0VBM0JtQk0sTUFBTUMsUzs7QUFpQzlCQyxPQUFPaEIsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoibW92aWVMaXN0XzIwMTgwNTIyMTg1MzQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtb3ZpZURldGFpbHM6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVGl0bGVDbGljayhtb3ZpZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vdmllRGV0YWlsczogdGhpcy5zdGF0ZS5tb3ZpZURldGFpbHMgPyBmYWxzZSA6IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHdhdGNoZWQgPSB0aGlzLnByb3BzLm1vdmllLndhdGNoZWQgPyAnd2F0Y2hlZCcgOiAndG8gd2F0Y2gnO1xuICAgICAgICB2YXIgZGV0YWlscyA9IHRoaXMuc3RhdGUubW92aWVEZXRhaWxzID8gPE1vdmllRGV0YWlscyB0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2s9e3RvZ2dsZVdhdGNoQnV0dG9uT25DbGlja30gd2F0Y2hlZD17d2F0Y2hlZH0gbW92aWU9e3RoaXMucHJvcHMubW92aWV9IC8+IDogJyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlQ2xpY2suYmluZCh0aGlzKX0+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57ZGV0YWlsc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRvZ2dsZVdhdGNoQnV0dG9uT25DbGljayh0aGlzLnByb3BzKX0+e3dhdGNoZWR9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdCJdfQ==