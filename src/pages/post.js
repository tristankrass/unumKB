import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm';


const Post = () => (
    <Layout>
        <SEO title="Contact" />
        <section>
            <h2>We are currently allowing admins to post new data</h2>
            <p>Please send us a topic request</p>
        </section>
        <hr />
        <ContactForm />
    </Layout >
)

export default Post