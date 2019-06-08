import React, { Component } from 'react'

import './faqCard.css'




class FaqCard extends Component {
    state = {
        active: false,
    }

    toggleAnswer = () => {
        const currentState = this.state.active
        this.setState({ active: !currentState })
    }

    render() {
        const { question, answer, time } = this.props
        const { active } = this.state

        return (
            <div className="qa_card" >
                <h3 className={active ? "qa_card__question active" : "qa_card__question"}
                    onClick={this.toggleAnswer}
                >
                    Q:  {question}
                </h3>
                <div
                    className={active ? "qa_card__answer active" : "qa_card__answer"}
                >
                    <p>
                        A: {answer}
                    </p>
                    <p>
                        {time}
                    </p>
                </div>
            </div>
        )
    }
}




export default FaqCard