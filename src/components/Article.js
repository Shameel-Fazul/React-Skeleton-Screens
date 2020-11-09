import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";

const Articles = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout( async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json(); // Parsing JSON to a JavaScript Object
            setArticles(data);
        }, 5000)
    })
    return (
        <div className="articles">
            <h2>Articles</h2>
            { articles && articles.map(article => (
                <div className="article" key={ article.key }>
                    <h3>{ article.title }</h3>
                    <p>{ article.body }</p>
                </div>
            )) }

            { !articles && 
            <div style={{ fontSize: 20, lineHeight: 2 }}>
                <Skeleton height={50}/> 
                <Skeleton count={100}/>
            </div> 
            }
        </div>
    );
}

export default Articles;