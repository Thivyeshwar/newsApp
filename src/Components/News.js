import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

  defaultProps={
    country:'in',
    pageSize:8,
    category: 'general'
  };

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    console.log("inside the constructor from the news component");
    this.state={
      articles: [],
      loading:false,
      page:1
    };
  }

  async componentDidMount(){
    console.log("inside component did mount")
    
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91c9cca295d84677abe11dbbf1597829&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  handlePreviousClick=async()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91c9cca295d84677abe11dbbf1597829&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page:this.state.page -1,
      articles: parsedData.articles,
      loading: false
    });
  };

  handleNextClick= async()=>{
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/ (this.props.pageSize))))
      {
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91c9cca295d84677abe11dbbf1597829&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page:this.state.page +1,
      articles: parsedData.articles,
      loading:false,
    });
    }
    
  };
  render() {
    console.log("inside render");
    return (
      <div className="container my-4">

        <h1 className="text-center">NewsApp-Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
        {!this.state.loading &&  this.state.articles.map((element)=>{
        return( 
        <div className="col-md-4" key={element.url} >
        <NewsItem 
        title={element.title ? element.title: ""}
        description={element.description? element.description : ""} 
        imageUrl={element.urlToImage}
        newsUrl={element.url}
        />
        </div>
        );
        })}
        </div>
        <div className = "container d-flex justify-content-between my-4">
        <button 
        disabled = {this.state.page <=1}
        type="button" 
        class="btn btn-secondary" 
        onClick={this.handlePreviousClick}>&larr;Previous
        </button>
        <button type="button" class="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
