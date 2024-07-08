import React, { Component } from 'react'

export default class NewsItem extends Component {

 
  render() {
    let{title,description,imageUrl,newsUrl}=this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl? "https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg" :imageUrl} alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} 
   rel="noreferrer"
    target="_blank"
    className="btn btn-sm btn-primary">
      Read More</a>
  </div>
</div>
      </>
    )
  }
}
