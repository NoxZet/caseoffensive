import React from "react";
import { Root } from "react-dom/client";

const App = () =>{
    return (
        <h1>
            Hello world! I am using React
        </h1>
    )
}

function renderApp(root: Root) {
    root.render(<App/>);
}

export default renderApp
