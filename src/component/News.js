import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log('cdm');
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=974e7dc3c9ba4a03ae0e144a25fcf896";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });

    }

    handleNextClick = async () => {
        if ((this.state.page + 1) > (Math.ceil(this.state.totalResults / 18))) {

        }
        else {
            console.log('Next Clicked');
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=974e7dc3c9ba4a03ae0e144a25fcf896&page=${this.state.page + 1}&pageSize=18`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
            this.setState({
                page: this.state.page + 1,
            })
            console.log(data);
        }
    }

    handlePreviousClick = async () => {
        console.log('Previous Clicked');
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=974e7dc3c9ba4a03ae0e144a25fcf896&page=${this.state.page - 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
        })
        console.log(data);
    }

    render() {
        return (
            <div className='container my-4'>
                <h2 className='text-center' style={{ fontWeight: 'bold' }}><span style={{ color: "goldenrod" }}>NewsInfinity</span> - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>;
                    })}
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button disabled={(this.state.page + 1) > (Math.ceil(this.state.totalResults / 18))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
