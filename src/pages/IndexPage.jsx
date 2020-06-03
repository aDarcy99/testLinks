import React from "react";
import {Link} from "react-router-dom";

export default class IndexPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h3>HomePage</h3>
                <Link to="/about">About Page</Link>
                <p>Simple boiler plate with Nodejs, react, react-router</p>
            </React.Fragment>
        )
    }
}