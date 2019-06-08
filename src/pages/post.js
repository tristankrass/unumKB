import React, { Component } from 'react'
import { navigateTo } from "gatsby-link"

import Layout from '../components/layout'
import SEO from '../components/seo'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
class Post extends Component {
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
            <Layout>
                <SEO title="Contact" />
                <section>
                    <h3>We are currently allowing admins to post new data</h3>
                    <p>Please send us a topic request</p>
                </section>
                <form
                    name="contact"
                    method="post"
                    action="/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                >

                    <p>
                        <label>
                            Your Name:
                             <input
                                type="text"
                                name="name"
                                label="name"
                                onChange={this.handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email:
                             <input
                                onChange={this.handleChange}
                                label="Email"
                                type="email"
                                name="email" />
                        </label>
                    </p>

                    <p>
                        <label>Message:
                            <textarea
                                onChange={this.handleChange} name="message"
                                label="message"
                                required
                            >
                            </textarea></label>
                    </p>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                            Don’t fill this out:{" "}
                            <input name="bot-field" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </Layout >
        )
    }
}
export default Post