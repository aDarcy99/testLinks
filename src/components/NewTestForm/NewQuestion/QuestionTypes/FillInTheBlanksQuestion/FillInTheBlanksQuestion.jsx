import React, { Component } from 'react';
import QuestionTextInput from "../../QuestionTextInput/QuestionTextInput.jsx"

class FillInTheBlanksQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blanks: [],
            answer: []
        }
    }
    getBlanks = (text) => {
        text = text.split(" ");
        let blanksCount = 0;
        text.forEach((word, wordIdx) => {
            if(word.includes("*blank")){
                blanksCount++
                this.setState({blanks: [...this.state.blanks, ]})
            }
        })
        console.log(`${blanksCount}`);
    }

    render() { 
        let answers = this.state.answer;
        return (
            <React.Fragment>
                <QuestionTextInput handleQuestionText={this.props.handleQuestionText} getBlanks={this.getBlanks} />
                {
                    answers.map((answer) => {
                        
                    })
                }
                <button>Add new answer</button>
            </React.Fragment>
        );
    }
}
 
export default FillInTheBlanksQuestion;