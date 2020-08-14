import React, { Component } from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';

class GalleryList extends Component {
  componentDidMount(){
    console.log( 'GalleryList mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div className="imgLayout">
        {/* { JSON.stringify(this.state.galleryList)} */}
          {this.props.galleryList.map( (item, index) => <GalleryItem 
          thisItem= {item} 
          key={index}
          addLike={this.props.addLike}/>)}
      </div>
    ); // end return
  } // end render
} // end class

export default GalleryList;
