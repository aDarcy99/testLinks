import React, { Component } from 'react';
import uuid4 from "uuid4";

import NewQuestionForm from "./NewQuestionForm/NewQuestionForm.jsx";

class NewTestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            answers: []
        };
    }
    handleNewQuestion = () => {
        let question = {
            id: uuid4(),
            type: "",
            text: "",
            options: []
        };
        this.setState((prevState) => ({
            questions: [...prevState.questions, question]
        }));
    }

    handleDeleteQuestion = (questionId) => {
        let questions = [...this.state.questions];
        questions.splice(this.getQuestionIndexById(questions, questionId), 1)
        this.setState({ questions: questions })
    }
    handleQuestionTypeChange = (Event, questionId) => {
        let questions = [...this.state.questions];
        questions.forEach((question) => {
            if (question.id === questionId) {
                question.type = Event.target.value;
                switch (question.type) {
                    case "boolean":
                        question.options = [{ id: uuid4(), text: "true" }, { id: uuid4(), text: "false" }];
                        break;
                    case "multiChoice":
                        question.options = [];
                        break;
                    case "numeric":
                        question.options ? delete question.options : "";
                        break;
                    case "fillInTheBlanks":
                        question.options = [];
                        break;
                    default:
                        break;
                }
            }
        });
        this.setState({ questions: questions });
    }
    handleQuestionTextChange = (Event, questionId) => {
        let questions = [...this.state.questions];
        questions[this.getQuestionIndexById(questions, questionId)].text = Event.target.value;
        this.setState({ questions: questions });
    }
    handleNewQuestionOption = (questionId) => {
        let questions = [...this.state.questions];
        questions[this.getQuestionIndexById(questions, questionId)].options.push({ id: uuid4(), text: "" });
        this.setState({ questions: questions });
    }
    handleDeleteOption = (questionId, optionId) => {
        let questions = [...this.state.questions];
        let questionIdx = this.getQuestionIndexById(questions, questionId);
        let optionIdx = this.getOptionIndexById(questions[questionIdx], optionId);
        questions[questionIdx].options.splice(optionIdx, 1);
        this.setState({ questions: questions });
    }
    handleOptionTextChange = (Event, questionId, optionId) => {
        let questions = [...this.state.questions];
        let questionIdx = this.getQuestionIndexById(questions, questionId);
        let optionIdx = this.getOptionIndexById(questions[questionIdx], optionId);
        questions[questionIdx].options[optionIdx].text = Event.target.value;
        this.setState({ questions: questions });
    }
    handleMarkOptionAsCorrect = (questionId, optionId) => {
        let questions = [...this.state.questions];
        let questionIdx = this.getQuestionIndexById(questions, questionId);
        let optionIdx = this.getOptionIndexById(questions[questionIdx], optionId);
        try {
            if (questions[questionIdx].type === "")

                questions[questionIdx].answer = [
                    questions[questionIdx].options[optionIdx].id]
        } catch (error) {
            console.error("Error marking option as correct")
        }
    }
    getQuestionIndexById = (questions, questionId) => {
        let index;
        try {
            questions.forEach((question, questionIdx) => {
                if (question.id === questionId) {
                    index = questionIdx;
                }
            })
            if ((index != null) || (index != "undefined")) {
                return index;
            } else {
                return console.error("no question exists with this id");
            }
        } catch (error) {
            console.error(error);
        }
    }
    getOptionIndexById = (question, optionId) => {
        let index;
        try {
            question.options.forEach((option, optionIdx) => {
                if (option.id === optionId) {
                    index = optionIdx;
                }
            })
            if ((index != null) || (index != "undefined")) {
                return index;
            } else {
                return console.error("no option exists with this id");
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.questions.map((question, questionIdx) => (
                        <NewQuestionForm key={questionIdx} question={question}
                            questionIdx={questionIdx}
                            handleDeleteQuestion={this.handleDeleteQuestion}
                            handleQuestionTypeChange={this.handleQuestionTypeChange}
                            handleQuestionTextChange={this.handleQuestionTextChange}
                            handleDeleteOption={this.handleDeleteOption}
                            handleNewQuestionOption={this.handleNewQuestionOption}
                            handleOptionTextChange={this.handleOptionTextChange}
                        />
                    ))
                }
                <button onClick={this.handleNewQuestion}>Add new question</button>
            </React.Fragment>
        );
    }
}

export default NewTestForm;