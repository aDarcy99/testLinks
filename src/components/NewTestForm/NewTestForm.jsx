import React, { Component } from 'react';
import uuid4 from "uuid4";

import NewQuestion from "./NewQuestion/NewQuestion.jsx";

class NewTestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }
    addNewQuestion = () => {
        let question = {
            id: uuid4()
        };
        this.setState((prevState) => ({
            questions: [...prevState.questions, question]
        }));
    }

    render() {
        return (
            <React.Fragment>
                <h3>New Test</h3>
                {
                    this.state.questions.map((question, questionIdx) => (
                        <NewQuestion key={questionIdx} questionIdx={questionIdx} />
                    ))
                }
                <button onClick={this.addNewQuestion}>Add new question</button>
            </React.Fragment>
        );
    }
}

export default NewTestForm;