import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryList: []
  } // end state

  componentDidMount(){
    console.log( 'GalleryList Mounted:', this.state.galleryList);
    this.getImages(); 
  } // end componentDidMount

  //get images from server using axios
  getImages = () => {
		//gets images from the server using axios
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then( ( response ) =>{
      console.log( 'back from GET:', response.data );
      // hold this data in state.items
      this.setState({
        galleryList: response.data
      }); 
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    }) // end axios call
    
	};//end getImages

	addLike = (id) => {
    //PUT method to add to like count of photo on server using axios
    Axios ({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: id
      })
			.then(response => {
				console.log(`successful PUT request to server: ${response}`);
				this.getImages();
			})
			.catch(error => {
				console.log(`error on PUT request to server: ${error}`);
			});//end axios call
	};//end add like



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photo Highlights from my Great Western Road Trip in 2019</h1>
        </header>
        <br/>
        <div>
          <GalleryList 
            galleryList={this.state.galleryList}
            addLike={this.addLike}
            />
        </div>
      </div>
    );
  }
}

export default App;
