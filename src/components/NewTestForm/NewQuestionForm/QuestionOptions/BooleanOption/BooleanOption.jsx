import React, { Component } from 'react';
class BooleanOption extends Component {

    render() {
        let question = this.props.question;
        return (
            <React.Fragment>
                <h5>Options</h5>
                {
                    question.options.map((option, optionIdx) => (
                        <React.Fragment key={optionIdx}>
                            <span>{option.text}</span> <br />
                        </React.Fragment>
                    ))
                }
            </React.Fragment>
        );
    }
}

export default BooleanOption;