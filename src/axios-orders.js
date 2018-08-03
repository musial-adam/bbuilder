import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://reactbbuilder.firebaseio.com/'
})

export default instance;