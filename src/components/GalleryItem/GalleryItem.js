import React, { Component } from 'react';

class GalleryItem extends Component {
  componentDidMount(){
    console.log( 'GalleryItem mounted', this.props );   
  } // end componentDidMount

  state = {
    details: false,
  }

//set a toggleDetails method to toggle between the photo and the description of the photo.
  toggleDetails=()=>{
    this.setState({
      details: !this.state.details
    }) // end setState
  } // end toggleDetails

  render() {
    return (
      <>
      <div onClick={ this.toggleDetails }>
        {( this.state.details ? 
        <p>{ this.props.thisItem.description } </p> :
        <img className="photo" key={this.props.thisItem.id} src={this.props.thisItem.path} alt='gallery item' />)}
      </div>
      <div>
        <button 
        onClick={() => this.props.addLike(this.props.thisItem.id)}
        >Like Photo</button>
      </div>
      <div>
        Total likes: {this.props.thisItem.likes}
      </div>
      </>
    ); // end return
  } // end render
} // end class

export default GalleryItem;
