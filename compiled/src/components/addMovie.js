"use strict";

var AddMovie = function AddMovie(props) {
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", placeholder: "add a movie", onChange: function onChange(e) {
                return props.addMovieTextBoxChange(e.target.value);
            } }),
        React.createElement("input", { type: "submit", value: "Add", onClick: props.handleAddMovieClick })
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsInByb3BzIiwiZSIsImFkZE1vdmllVGV4dEJveENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWRkTW92aWVDbGljayJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFdBQ1g7QUFBQTtBQUFBO0FBQ0ksdUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksYUFBL0IsRUFBNkMsVUFBVSxrQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPRCxNQUFNRSxxQkFBTixDQUE0QkQsRUFBRUUsTUFBRixDQUFTQyxLQUFyQyxDQUFQO0FBQUEsYUFBdkQsR0FESjtBQUVJLHVDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFNBQVNKLE1BQU1LLG1CQUFoRDtBQUZKLEtBRFc7QUFBQSxDQUFmIiwiZmlsZSI6ImFkZE1vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFkZE1vdmllID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJhZGQgYSBtb3ZpZVwiIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuYWRkTW92aWVUZXh0Qm94Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCIgb25DbGljaz17cHJvcHMuaGFuZGxlQWRkTW92aWVDbGlja30vPlxuICAgIDwvZGl2PlxuKSJdfQ==