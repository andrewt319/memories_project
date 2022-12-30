// helps to make calls from apis
import axios from 'axios';

const url = 'http://localhost:3000/posts';

export const fetchPosts = () => axios.get(url);