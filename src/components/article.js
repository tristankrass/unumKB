import React from "react";


const Article = ({ title, desc, tags, publishDate, author }) => {

    return (
        <section>
            <h1>
                {title}
            </h1>
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