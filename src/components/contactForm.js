import React, { Component } from 'react'
import { navigateTo } from "gatsby-link"

import './contactForm.css'


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends Component {
    state = {}
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded"
            },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .then(() => navigateTo(form.getAttribute("action")))
            .catch(error => alert(error))
    }

    render() {
        return (
            <form
                className="contactForm"
                name="contact"
                method="post"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
                <div className="contactForm__contactInfo">
                    <p className="formName">
                        <label className="label" htmlFor="name">
                            Your Name:
                        </label>
                        <input
                            className="shortInput"
                            type="text"
                            name="name"
                            label="name"
                            onChange={this.handleChange}
                            id="name"
                        />

                    </p>
                    <p className="formName">
                        <label className="label" htmlFor="email">
                            Your Email:</label>
                        <input
                            className="shortInput"
                            id="email"
                            onChange={this.handleChange}
                            label="Email"
                            required
                            type="email"
                            name="email" />

                    </p>
                </div>

                <p className="formTextArea">
                    <label className="label" htmlFor="message">Message:</label>
                    <textarea
                        cols="30" rows="7"
                        className="contactForm__textArea"
                        onChange={this.handleChange}
                        name="message"
                        label="message"
                        id="message"
                        required
                    >
                    </textarea>

                </p>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                    </label>
                </p>
                <p style={{ textAlign: "center" }}>
                    <button
                        type="submit"
                        className="formButton"
                    >
                        Submit
                            </button>
                </p>
            </form>

        )
    }
}
export default ContactForm