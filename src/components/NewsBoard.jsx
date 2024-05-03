// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const [articles, setArticles]= useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error("Error fetching data:", error)); // menangani kesalahan jika terjadi
    }, []);

    return (
        <div>
            <h2 className="text-center mt-3">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index)=>{
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    );
};

export default NewsBoard;
