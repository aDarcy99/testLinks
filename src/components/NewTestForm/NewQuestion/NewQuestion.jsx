import React, { Component } from 'react';
//Components
import QuestionTypeSelect from "./QuestionTypeSelect/QuestionTypeSelect.jsx";
import NumericQuestion from "./QuestionTypes/NumericQuestion/NumericQuestion.jsx";
import MultiChoiceQuestion from "./QuestionTypes/MultiChoiceQuestion/MultiChoiceQuestion.jsx";
import BooleanQuestion from "./QuestionTypes/BooleanQuestion/BooleanQuestion.jsx";
import FillInTheBlanksQuestion from "./QuestionTypes/FillInTheBlanksQuestion/FillInTheBlanksQuestion.jsx";

class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:"",
            text:""
        }
    }
    handleQuestionType = (Type) => {
        this.setState({
            type: Type
        })
    }
    handleQuestionText = (Text) => {
        this.setState({text: Text})
    }
    renderQuestion = () => {
        switch (this.state.type) {
            case "numeric":
                return(
                    <NumericQuestion handleQuestionText={this.handleQuestionText} />
                )
            case "multiChoice":
                return(
                    <MultiChoiceQuestion handleQuestionText={this.handleQuestionText} />
                )
            case "boolean":
                return(
                    <BooleanQuestion handleQuestionText={this.handleQuestionText} />
                )
            case "fillInTheBlanks":
                return(
                    <FillInTheBlanksQuestion text={this.state.text} handleQuestionText={this.handleQuestionText} />
                )
            default:
                return "";
        }
    }

    render() { 
        return (
            <React.Fragment>
                <h4>Question {this.props.questionIdx + 1}</h4>
                <QuestionTypeSelect handleQuestionType={this.handleQuestionType} />
                {
                    this.renderQuestion()
                }
                <br/><br/>
            </React.Fragment>
        );
    }
}
 
export default NewQuestion;