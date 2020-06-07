import React, { Component } from 'react';

class QuestionTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ""}
    }
    onTextChange = (Event) => {
        this.setState({text: Event.target.value}, () => {
            this.props.handleQuestionText(this.state.text);
            if(this.props.getBlanks){ // for fill in the blanks
                this.props.getBlanks(this.state.text)
            }
        },)
    }
    render() { 
        return (
            <React.Fragment>
                Question text: <br/>
                <input type="text" value={this.state.text} onChange={this.onTextChange} /><br/>
            </React.Fragment>
        );
    }
}
 
export default QuestionTextInput;