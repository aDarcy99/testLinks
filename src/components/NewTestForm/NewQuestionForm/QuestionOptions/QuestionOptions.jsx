import React, { Component } from 'react';
import MultiChoiceOption from "./MultiChoiceOption/MultiChoiceOption.jsx";
import BooleanOption from "./BooleanOption/BooleanOption.jsx";
import NumericOption from "./NumericOption/NumericOption.jsx";

class QuestionOptions extends Component {
    render() {
        let question = this.props.question;
        return (
            <React.Fragment>
                {
                    question.type === "multiChoice" ? <MultiChoiceOption
                        question={question}
                        handleDeleteOption={this.props.handleDeleteOption}
                        handleNewQuestionOption={this.props.handleNewQuestionOption}
                        handleOptionTextChange={this.props.handleOptionTextChange}
                    /> : 
                    question.type === "boolean" ? <BooleanOption question={question}/>
                    : 
                    question.type === "numeric" ? <NumericOption question={question} />
                    : ""
                }
            </React.Fragment>
        );
    }
}

export default QuestionOptions;