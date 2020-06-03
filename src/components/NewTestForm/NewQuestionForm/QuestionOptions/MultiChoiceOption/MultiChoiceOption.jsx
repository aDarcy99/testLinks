import React, { Component } from 'react';

class MultiChoiceOption extends Component {
    render() {
        let question = this.props.question;
        return (
            <React.Fragment>
                <h5>Options</h5>
                {
                    question.options.map((option, optionIdx) => (
                        <React.Fragment key={optionIdx}>
                            <input type="text" placeholder={`Option ${optionIdx + 1}`} value={option.text} onChange={(Event) => { this.props.handleOptionTextChange(Event, question.id, option.id) }} />
                            <button onClick={() => { this.props.handleDeleteOption(question.id, option.id) }}>X</button><br />
                        </React.Fragment>
                    ))
                }
                <button onClick={() => { this.props.handleNewQuestionOption(question.id) }}>New option</button>
            </React.Fragment>
        );
    }
}

export default MultiChoiceOption;