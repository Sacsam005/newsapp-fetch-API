import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="container my-3">
                <div className="card" >
                    <img src={!imageUrl ? "https://www.popsci.com/uploads/2020/03/05/DSDOU3CKQNAUPNV2H5PZPJ4D4E.jpg" : imageUrl} className="card-img-top" />
                    <div className="card-body ">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn btn-info">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
