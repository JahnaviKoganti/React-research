import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createElement("h1",{id:"heading"},"A normal react element");
const root=ReactDOM.createRoot(document.getElementById("root"));
const jsxHeading=<h1 id="heading">A react element using jsx</h1>;
const Title=()=>(
    <h1 id="heading">Title component</h1>
);
const HeadingComp=() => (
    <div>
        {Title()}
        <h1>func comp</h1>
    </div>
);
root.render(<HeadingComp/>);
