"use strict";

var Search = function Search(props) {
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", placeholder: "search...", onChange: function onChange(event) {
                return props.textBoxChange(event.target.value);
            } }),
        React.createElement("input", { type: "submit", value: "Go!", onClick: props.search })
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJldmVudCIsInRleHRCb3hDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFdBQ1Q7QUFBQTtBQUFBO0FBQ0ksdUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksV0FBL0IsRUFBMkMsVUFBVSxrQkFBQ0MsS0FBRDtBQUFBLHVCQUFXRCxNQUFNRSxhQUFOLENBQW9CRCxNQUFNRSxNQUFOLENBQWFDLEtBQWpDLENBQVg7QUFBQSxhQUFyRCxHQURKO0FBRUksdUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sS0FBM0IsRUFBaUMsU0FBU0osTUFBTUssTUFBaEQ7QUFGSixLQURTO0FBQUEsQ0FBYiIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj4gICAgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoLi4uXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMudGV4dEJveENoYW5nZShldmVudC50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHbyFcIiBvbkNsaWNrPXtwcm9wcy5zZWFyY2h9Lz5cbiAgICA8L2Rpdj4gICAgXG4pOyJdfQ==