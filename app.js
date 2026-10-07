import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1",key:"child1"},
        React.createElement("h1",{},"Im a h1 tag! :3")
    ),
    React.createElement(
        "div",
        {id:"child2",key:"child2"},
        React.createElement("h2",{},"Im a h2 tag! :3")
    )
    ]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);