"use strict";

var MovieDetails = function MovieDetails(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            "Year: ",
            props.movie.year
        ),
        React.createElement(
            "button",
            { onClick: function onClick() {
                    return props.toggleWatchButtonOnClick(props);
                } },
            props.watched
        )
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL21vdmllRGV0YWlsc18yMDE4MDUyMjE4NTQxOC5qc3giXSwibmFtZXMiOlsiTW92aWVEZXRhaWxzIiwicHJvcHMiLCJtb3ZpZSIsInllYXIiLCJ0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2siLCJ3YXRjaGVkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsV0FDZjtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFZQSxrQkFBTUMsS0FBTixDQUFZQztBQUF4QixTQURKO0FBRUk7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLDJCQUFNRixNQUFNRyx3QkFBTixDQUErQkgsS0FBL0IsQ0FBTjtBQUFBLGlCQUFqQjtBQUErREEsa0JBQU1JO0FBQXJFO0FBRkosS0FEZTtBQUFBLENBQW5CIiwiZmlsZSI6Im1vdmllRGV0YWlsc18yMDE4MDUyMjE4NTQxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZURldGFpbHMgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlllYXI6IHtwcm9wcy5tb3ZpZS55ZWFyfTwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLnRvZ2dsZVdhdGNoQnV0dG9uT25DbGljayhwcm9wcyl9Pntwcm9wcy53YXRjaGVkfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuKTsiXX0=