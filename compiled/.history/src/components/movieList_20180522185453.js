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
            var details = this.state.movieDetails ? React.createElement(MovieDetails, { toggleWatchButtonOnClick: this.props.toggleWatchButtonOnClick, watched: watched, movie: this.props.movie }) : '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL21vdmllTGlzdF8yMDE4MDUyMjE4NTQ1My5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllRGV0YWlscyIsIm1vdmllIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwid2F0Y2hlZCIsImRldGFpbHMiLCJ0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2siLCJoYW5kbGVUaXRsZUNsaWNrIiwiYmluZCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsMEJBQWM7QUFETCxTQUFiO0FBRmU7QUFLbEI7Ozs7eUNBRWdCQyxLLEVBQU87QUFDcEJDLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLGlCQUFLQyxRQUFMLENBQWM7QUFDVkosOEJBQWMsS0FBS0QsS0FBTCxDQUFXQyxZQUFYLEdBQTBCLEtBQTFCLEdBQWtDO0FBRHRDLGFBQWQ7QUFHSDs7O2lDQUVRO0FBQUE7O0FBRUwsZ0JBQUlLLFVBQVUsS0FBS1AsS0FBTCxDQUFXRyxLQUFYLENBQWlCSSxPQUFqQixHQUEyQixTQUEzQixHQUF1QyxVQUFyRDtBQUNBLGdCQUFJQyxVQUFVLEtBQUtQLEtBQUwsQ0FBV0MsWUFBWCxHQUEwQixvQkFBQyxZQUFELElBQWMsMEJBQTBCLEtBQUtGLEtBQUwsQ0FBV1Msd0JBQW5ELEVBQTZFLFNBQVNGLE9BQXRGLEVBQStGLE9BQU8sS0FBS1AsS0FBTCxDQUFXRyxLQUFqSCxHQUExQixHQUF1SixFQUFySzs7QUFFQSxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQUssU0FBUyxLQUFLTyxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBZDtBQUFpRCx5QkFBS1gsS0FBTCxDQUFXRyxLQUFYLENBQWlCUztBQUFsRSxpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFNSjtBQUFOLGlCQUZKO0FBR0k7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixTQUFTO0FBQUEsbUNBQU0sT0FBS1IsS0FBTCxDQUFXUyx3QkFBWCxDQUFvQyxPQUFLVCxLQUF6QyxDQUFOO0FBQUEseUJBQS9CO0FBQXVGTztBQUF2RjtBQUhKLGFBREo7QUFPSDs7OztFQTNCbUJNLE1BQU1DLFM7O0FBaUM5QkMsT0FBT2hCLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdF8yMDE4MDUyMjE4NTQ1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW92aWVEZXRhaWxzOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRpdGxlQ2xpY2sobW92aWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb3ZpZURldGFpbHM6IHRoaXMuc3RhdGUubW92aWVEZXRhaWxzID8gZmFsc2UgOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciB3YXRjaGVkID0gdGhpcy5wcm9wcy5tb3ZpZS53YXRjaGVkID8gJ3dhdGNoZWQnIDogJ3RvIHdhdGNoJztcbiAgICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLnN0YXRlLm1vdmllRGV0YWlscyA/IDxNb3ZpZURldGFpbHMgdG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZVdhdGNoQnV0dG9uT25DbGlja30gd2F0Y2hlZD17d2F0Y2hlZH0gbW92aWU9e3RoaXMucHJvcHMubW92aWV9IC8+IDogJyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlQ2xpY2suYmluZCh0aGlzKX0+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57ZGV0YWlsc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRvZ2dsZVdhdGNoQnV0dG9uT25DbGljayh0aGlzLnByb3BzKX0+e3dhdGNoZWR9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdCJdfQ==