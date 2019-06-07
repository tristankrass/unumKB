import React from "react";
import { Link } from "gatsby";


const Article = ({ title, desc, tags, publishDate, author, slug }) => {

    return (
        <section>
            <Link to={`documentation/${slug}`}>
                <h1>
                    {title}
                </h1>
            </Link>
            <p>
                {desc}
            </p>
            <ul>
                {tags.map(tag => (
                    <li>{tag}</li>
                ))}
            </ul>
            <p>Published by: {author}, At: {publishDate}</p>
        </section>
    )
}

export default Article
