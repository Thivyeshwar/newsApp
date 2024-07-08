import React, { Component } from 'react'

export default class NewsItem extends Component {

 
  render() {
    let{title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl? "https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg" :imageUrl} alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"92%", zIndex:"1"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
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
