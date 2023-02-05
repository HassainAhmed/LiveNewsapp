
import React, { Component } from 'react'

 class News extends Component {
  render() {
    let {Title,description,imageUrl,newsUrl,date,source}=this.props;
    return (
<div className=" container my-3">
  <div className="card" >
  <span class="position-absolute 
      left-100 start-100 translate-middle badge 
      rounded-pill bg-danger">{source}</span>
    <img src={imageUrl}className="card-img-top" alt=" "/>
    <div className="card-body">
      <h5 className="card-title">{Title}...</h5>
      <p className="card-text">{description}...</p>
    
      <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
        <a href={newsUrl}  className="btn btn-sm btn-dark">Click to Read More</a>
    </div>
  </div>
  </div>
  
    )
  }
}
export default News;