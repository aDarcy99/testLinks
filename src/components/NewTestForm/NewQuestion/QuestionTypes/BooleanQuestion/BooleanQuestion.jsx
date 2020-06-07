import React, { Component } from 'react';
//Components
import QuestionTextInput from "../../QuestionTextInput/QuestionTextInput.jsx";
class BooleanQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options:[
                {
                    id: uuid4(),
                    text:"true"
                },{
                    id: uuid4(),
                    text:"false"
                }
            ],
            answer: ""
        }
    }
    onMarkAsCorrectAnswer = (Event, optionId) => {
        if(optionId === this.state.answer){
            this.setState({answer: ""});
            Event.target.checked = !Event.target.checked;
        }else{
            this.setState({answer: optionId});
        }
    }

    render() { 
        return (
            <React.Fragment>
                <QuestionTextInput handleQuestionText={this.props.handleQuestionText} />
                Question options:
                {
                    this.state.options.map((option, optionIdx) => (
                        <div key={optionIdx}>
                            <input type="radio" id={option.id} name="markAsCorrectAnswer" onClick={(Event) => {this.onMarkAsCorrectAnswer(Event, option.id)}} />
                            <label htmlFor={option.id}>
                                {option.text}
                            </label>
                        </div>
                    ))
                }
            </React.Fragment>
        );
    }
}
 
export default BooleanQuestion;