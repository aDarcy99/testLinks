import React, { Component } from 'react';

class QuestionTypeSelect extends Component {
    render() { 
        return (
            <React.Fragment>
                Question type:
                <select onChange={(Event) => {this.props.handleQuestionTypeChange(Event, this.props.question.id)}} value={this.props.question.type}>
                    <option value="" style={{display:"none"}}>Pick a type!</option>
                    <option value="multiChoice"> Multi-choice</option>
                    <option value="numeric"> Numeric</option>
                    <option value="boolean">True or false</option>
                    <option value="fillInTheBlanks">Fill in the blanks</option>
                </select>
            </React.Fragment>
        );
    }
}
 
export default QuestionTypeSelect;