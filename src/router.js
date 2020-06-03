import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from "react-router-dom";

//pages
import IndexPage from "./pages/IndexPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NewTestPage from "./pages/NewTestPage.jsx"

function App(){
    return(
        <BrowserRouter>
            <Route exact path="/">
                <IndexPage />
            </Route>
            <Route exact path="/about">
                <AboutPage />
            </Route>
            <Route exact path="/test/new">
                <NewTestPage />
            </Route>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector("#page-content"));