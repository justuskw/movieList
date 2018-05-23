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
                    return undefined.props.toggleWatchButtonOnClick(undefined.props);
                } },
            props.watched
        )
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5oaXN0b3J5L3NyYy9jb21wb25lbnRzL21vdmllRGV0YWlsc18yMDE4MDUyMjE4NTM1OS5qc3giXSwibmFtZXMiOlsiTW92aWVEZXRhaWxzIiwicHJvcHMiLCJtb3ZpZSIsInllYXIiLCJ0b2dnbGVXYXRjaEJ1dHRvbk9uQ2xpY2siLCJ3YXRjaGVkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUEsV0FDZjtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFZQSxrQkFBTUMsS0FBTixDQUFZQztBQUF4QixTQURKO0FBRUk7QUFBQTtBQUFBLGNBQVEsU0FBUztBQUFBLDJCQUFNLFVBQUtGLEtBQUwsQ0FBV0csd0JBQVgsQ0FBb0MsVUFBS0gsS0FBekMsQ0FBTjtBQUFBLGlCQUFqQjtBQUF5RUEsa0JBQU1JO0FBQS9FO0FBRkosS0FEZTtBQUFBLENBQW5CIiwiZmlsZSI6Im1vdmllRGV0YWlsc18yMDE4MDUyMjE4NTM1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZURldGFpbHMgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlllYXI6IHtwcm9wcy5tb3ZpZS55ZWFyfTwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudG9nZ2xlV2F0Y2hCdXR0b25PbkNsaWNrKHRoaXMucHJvcHMpfT57cHJvcHMud2F0Y2hlZH08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbik7Il19