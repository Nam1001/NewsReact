import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import './NewsItem.css'

import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:'in',
    category:"general",
    
    

  }
  
  static prototypes ={
    country:PropTypes.string,
    category:PropTypes.string,


  }

    constructor(){
        super();
        this.state={
          articles: [],
          loading: false,
          page:0
        }
      }
      async update(){
        document.title=this.capitalise( this.props.category)
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72653c07d7484711837f60cda136cb54&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false, 
        });
        this.props.setProgress(80)
        this.props.setProgress(100)
      

    }
      async componentDidMount(){
        this.update();
      }
      fetchMoreData=async()=>{
        this.setState({
          page:this.state.page+1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72653c07d7484711837f60cda136cb54&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          loading: false,
          totalResults:parsedData.totalResults,
          
          

      });

      }
   
      capitalise=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);

      }
      render() {
        return (
          <div className='container my-3'>
            <h2 className='text-center my-4'>{this.props.category==='general'?'NewsMonkey':this.capitalise(this.props.category)}-Top Headlines</h2>
            {  this.state.loading ? <Spinner/> : 
            
              <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length<this.state.totalResults}
              loader={<Spinner/>}
            >
              <div className="container">
              <div className="row">
                { this.state.articles.map((element) => (
                  <div className="col-md-4" key={element.title}>
                    <NewsItem 
                      title={element.title ?element.title.slice(0,30):""}
                      description={element.description ?element.description.slice(0,80):""}
                      imageUrl={element.urlToImage} 
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
              </div>
              </div>
              </InfiniteScroll>
      }
          </div>
             
        )
      }
    }
export default News
