import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title,source, description, imageUrl, newsUrl, author, date } = this.props;
        

        return (
            <>
            <div className="container my-3">
                <div className="card" >
                    <img src={!imageUrl ? "https://www.popsci.com/uploads/2020/03/05/DSDOU3CKQNAUPNV2H5PZPJ4D4E.jpg" : imageUrl} className="card-img-top" alt="Images" />
                    <div className="card-body ">
                            <h5 className="card-title">{title}...<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
  </span></h5>
                            
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">{ source }</small></p>
                        <p className="card-text"><small className="text-muted">By <b>{author===null? "Unknown" : author}</b> on {new Date(date).toGMTString() > 12 ? 12-date : date }</small></p>
                    </div>
                    </div>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn btn-info my-2">Read more &rarr;</a>
            </div>
                    
</>
        )
    }
}

export default NewsItem
