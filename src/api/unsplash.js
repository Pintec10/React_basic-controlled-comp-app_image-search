import axios from 'axios';
import { UNSPLASH_ACCESS_KEY } from '../config.js';


export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
	}
});


// **********
// NOTE: the UNSPLASH_ACCESS_KEY is stored in the src/config.js file, which is not uploaded to GitHub.
// **********