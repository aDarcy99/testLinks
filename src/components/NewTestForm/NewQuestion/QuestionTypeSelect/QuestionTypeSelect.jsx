import React, { Component } from 'react';
class QuestionTypeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:""
        }
    }
    onTypeChange = (Event) => {
        this.setState({type: Event.target.value}, () => {
            this.props.handleQuestionType(this.state.type);
        })
    }

    render() { 
        return (
            <React.Fragment>
                Question type: <br/>
                <select onChange={this.onTypeChange} value={this.state.type}>
                    <option value="" style={{display:"none"}}>Pick a question type...</option>
                    <option value="multiChoice">Multi-choice</option>
                    <option value="numeric">Numeric</option>
                    <option value="boolean">True or false</option>
                    <option value="fillInTheBlanks">Fill in the blanks</option>
                </select>
                <br/>
            </React.Fragment>
        );
    }
}
 
export default QuestionTypeSelect;