import React, { Component } from 'react';
import QuestionTypeSelect from "./QuestionTypeSelect/QuestionTypeSelect.jsx";
import QuestionTextInput from "./QuestionTextInput/QuestionTextInput.jsx";
import QuestionOptions from "./QuestionOptions/QuestionOptions.jsx";

class CreateNewQuestion extends Component {
    render() {
        let question = this.props.question;
        return (
            <div>
                <button onClick={(Event) => { this.props.handleDeleteQuestion(question.id) }}>X</button><br />
                <h4>Question {this.props.questionIdx + 1}<br /></h4>
                <QuestionTypeSelect question={question} handleQuestionTypeChange={this.props.handleQuestionTypeChange} /><br />
                <QuestionTextInput question={question} handleQuestionTextChange={this.props.handleQuestionTextChange} />
                <QuestionOptions
                    question={question}
                    handleDeleteOption={this.props.handleDeleteOption}
                    handleNewQuestionOption={this.props.handleNewQuestionOption}
                    handleOptionTextChange={this.props.handleOptionTextChange}
                />
            </div>
        );
    }
}

export default CreateNewQuestion;