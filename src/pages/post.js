import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm';


const Post = () => (
    <Layout>
        <SEO title="Contact" />
        <section>
            <h2>We are currently allowing only admins to post new info</h2>
            <p>Please send us a topic request</p>
        </section>
        <hr />
        <ContactForm />
    </Layout >
)

export default Post