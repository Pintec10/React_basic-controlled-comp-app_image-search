import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component {
	state = {
		images: []
	};

	onSearchSubmit= async term => {
		const response = await unsplash.get('/search/photos', {
			params: {
				query: term
			}
		});
		this.setState({ images: response.data.results });
	}

	render() {
		return(
			<div className="ui container" style={{marginTop: "20px"}}>
				<h1 className="ui header">Image Search</h1>
				<p1>This is a very simple React app which uses a controlled component (the search bar) to receive an input search text from the user. 
					The input text is used to perform an image search through the Unsplash API, and the images are presented in an ordered grid pattern.
					The React reference feature is used for each image card in order to format the grid properly.
				</p1>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				Displaying the first {this.state.images.length} images
				<ImageList images={this.state.images}/>
			</div>
		);
	}	
};



export default App;