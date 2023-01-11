import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    return (
      <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
        <div className="card" >
  <img src={this.props.pic} height="200px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title.slice(0,70)+"....."}</h5>
    <h6 className='card-source'>{`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()}/${new Date(this.props.date).getYear()}`}</h6>
    <hr />
    <p className="card-text">{this.props.description.slice(0,200)+"....."}</p>
    <a href={this.props.url} className="btn btn-primary w-100  btn-sm text-light text-center">Read Full Article</a>
  </div>
</div>
      </div>
      
    )
  }
}
