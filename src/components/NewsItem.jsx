// eslint-disable-next-line no-unused-vars
import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  // Check if any of the required props are empty, if so, return null
  if (!title || !description || !src || !url) {
    return null;
  }

  return (
    <div className="card bg-dark text-light d-inline-block mx-3 mb-3 my-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src} style={{height:"200px", width:"100%"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description.slice(0,90)}</p>
        <div className="text-end">
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
