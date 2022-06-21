import api from '../api/core/index.jsx';

const apis = {
	login : (data) => api.post('/api/login', data),
	join : (data) => api.post('/api/signup', data)
};

export default apis;