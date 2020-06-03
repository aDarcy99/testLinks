import React from 'react';
import NewTestForm from "../components/NewTestForm/NewTestForm.jsx";

//Components
class NewTestPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Create new test</h3>
                <NewTestForm />
            </React.Fragment>
        )
    }
}

export default NewTestPage;