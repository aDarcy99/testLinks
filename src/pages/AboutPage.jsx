import React from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>About Page</h3>
                <Link to="/">Home page</Link>
                <p>
                    My personal minimal boilerplate for developing with nodejs, react and react router.
                    <br/>
                    Boilerplates are usually highly specified towards the person that created them and this one is no different.
                    Feel free to fork this if you feel that there should be something else in here :)
                </p>

            </React.Fragment>
        )
    }
}

export default AboutPage;