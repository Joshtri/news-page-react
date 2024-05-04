// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles, setArticles]= useState([]);
    // VITE_API_KEY=b9fce48c82b84fd88b57d4f26b680621
    useEffect(() => {
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b9fce48c82b84fd88b57d4f26b680621`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error("Error fetching data:", error)); // menangani kesalahan jika terjadi
    }, [category]);

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
