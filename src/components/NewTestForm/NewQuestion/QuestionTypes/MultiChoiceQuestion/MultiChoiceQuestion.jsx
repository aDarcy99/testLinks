import React, { Component } from 'react';
import uuid4 from "uuid4";
//Components
import QuestionTextInput from "../../QuestionTextInput/QuestionTextInput.jsx";
class MultiChoiceQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    id: uuid4(),
                    text: ""
                }, {
                    id: uuid4(),
                    text: ""
                }
            ],
            answer: []
        }
    }
    onAddNewOption = () => {
        if (this.state.options.length <= 9) { //maximum option length
            this.setState({
                options: [...this.state.options, {
                    id: uuid4(),
                    text: ""
                }]
            });
        }
    }
    onDeleteOption = (optionId) => {
        if (this.state.options.length >= 3) { //minimum option length
            let options = [...this.state.options];
            let answers = [...this.state.answer];
            options.forEach((option, optionIdx) => {
                if (option.id === optionId) {
                    options.splice(optionIdx, 1);
                }
            })
            answers.forEach((answer, answerIdx) => {
                if (answer === optionId) {
                    answers.splice(answerIdx, 1)
                }
            })
            this.setState({
                options: [...options],
                answer: [...answers]
            })
        }
    }
    onOptionTextChange = (Event, optionId) => {
        var options = [...this.state.options];
        options.forEach((option) => {
            if (option.id === optionId) {
                option.text = Event.target.value
            }
        });
        this.setState({ options: [...options] });
    }
    onMarkAsCorrectAnswer = (optionId) => {
        let answers = [...this.state.answer];
        let answerExists = false;
        answers.forEach((answer, answerIdx) => {
            if (answer === optionId) {
                answerExists = true;
                answers.splice(answerIdx, 1);
            }
        });
        if (answerExists === false) {
            answers.push(optionId);
        }
        this.setState({ answer: answers });
    }

    render() {
        return (
            <React.Fragment>
                <QuestionTextInput handleQuestionText={this.props.handleQuestionText} />
                Question options:
                {
                    this.state.options.map((option, optionIdx) => (
                        <div key={optionIdx}>
                            <input type="radio" onClick={() => { this.onMarkAsCorrectAnswer(option.id) }} checked={this.state.answer.includes(option.id)} onChange={() => { }} />
                            <input type="text" placeholder={`Option ${optionIdx + 1}`} value={option.text} onChange={(Event) => { this.onOptionTextChange(Event, option.id) }} />
                            <button onClick={() => (this.onDeleteOption(option.id))}>X</button>
                        </div>
                    ))
                }
                <button onClick={this.onAddNewOption}>Add new option</button>
            </React.Fragment>
        );
    }
}

export default MultiChoiceQuestion;