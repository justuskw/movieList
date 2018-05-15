"use strict";

var App = function App(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "MovieList"
        ),
        React.createElement(
            "div",
            null,
            props.movies.map(function (movie) {
                return React.createElement(window.MovieList, { movie: movie });
            })
        )
    );
};

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRDtBQUFBLFdBQ047QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0tBLGtCQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUI7QUFBQSx1QkFDZixvQkFBQyxNQUFELENBQVEsU0FBUixJQUFrQixPQUFPQyxLQUF6QixHQURlO0FBQUEsYUFBakI7QUFETDtBQUZKLEtBRE07QUFBQSxDQUFWOztBQVdBQyxPQUFPTCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFwcCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5Nb3ZpZUxpc3Q8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3Byb3BzLm1vdmllcy5tYXAobW92aWUgPT4gXG4gICAgICAgICAgICAgICA8d2luZG93Lk1vdmllTGlzdCBtb3ZpZT17bW92aWV9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcblxud2luZG93LkFwcCA9IEFwcDsiXX0=