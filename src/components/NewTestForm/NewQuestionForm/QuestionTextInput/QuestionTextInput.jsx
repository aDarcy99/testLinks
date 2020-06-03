import React, { Component } from 'react';

class QuestionTextInput extends Component {
    render() { 
        let question = this.props.question;
        return (
            <React.Fragment>
                Question text:
                <input type="text" value={question.text} onChange={(event) => {this.props.handleQuestionTextChange(event, question.id)}} />
            </React.Fragment>
        );
    }
}
 
export default QuestionTextInput;