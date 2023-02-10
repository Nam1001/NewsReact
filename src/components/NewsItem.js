import React from "react";
import "./NewsItem.css"
const NewsItem=(props)=> {
    return (
      <div className="style">
        <span class="badge text-bg-danger">{props.source}</span>
        <div className="card" style={{width: "18rem"}}>
          <img src={props.imageUrl ?props.imageUrl:'https://images.slurrp.com/prodarticles/x3ciarf06e.webp' } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.description}
            </p>
            <p class="card-text">By:-{props.author? props.author:"Unknown"} on {Date(props.date)}</p>
            <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm bg-dark btn-primary">
              Read More
            </a>
            
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
