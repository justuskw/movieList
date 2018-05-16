"use strict";

var Search = function Search(props) {
    return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", onChange: function onChange(event) {
                return props.textBoxChange(event.target.value);
            } }),
        React.createElement("input", { type: "submit", value: "Go!", onClick: props.search })
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJldmVudCIsInRleHRCb3hDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFdBQ1Q7QUFBQTtBQUFBO0FBQ0ksdUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsa0JBQUNDLEtBQUQ7QUFBQSx1QkFBV0QsTUFBTUUsYUFBTixDQUFvQkQsTUFBTUUsTUFBTixDQUFhQyxLQUFqQyxDQUFYO0FBQUEsYUFBN0IsR0FESjtBQUVJLHVDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFNBQVNKLE1BQU1LLE1BQWhEO0FBRkosS0FEUztBQUFBLENBQWIiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+ICAgIFxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBwcm9wcy50ZXh0Qm94Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdvIVwiIG9uQ2xpY2s9e3Byb3BzLnNlYXJjaH0vPlxuICAgIDwvZGl2PiAgICBcbik7Il19