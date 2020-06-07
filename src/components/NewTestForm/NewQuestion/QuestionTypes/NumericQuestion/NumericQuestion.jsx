import React, { Component } from 'react';
//Components
import QuestionTextInput from "../../QuestionTextInput/QuestionTextInput.jsx";

class NumericQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ""
        }
    }
    onAnswerChange = (Event) => {
        this.setState({answer: Event.target.value});
    }
    render() { 
        return (
            <React.Fragment>
                <QuestionTextInput handleQuestionText= {this.props.handleQuestionText} />
                Question answer: <br />  
                <input type="text" value={this.state.answer} onChange={this.onAnswerChange} />
            </React.Fragment>
        );
    }
}
 
export default NumericQuestion;