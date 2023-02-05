import React, { Component } from "react";
import "./NewsItem.css"
export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl, newsUrl,author,date,source}=this.props
    return (
      <div className="style">
        <span class="badge text-bg-danger">{source}</span>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl ?imageUrl:'https://images.slurrp.com/prodarticles/x3ciarf06e.webp' } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p class="card-text">By:-{author? author:"Unknown"} on {Date(date)}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm bg-dark btn-primary">
              Read More
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
