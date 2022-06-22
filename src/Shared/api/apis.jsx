import api from '../api/core/index.jsx';

const apis = {
	login : (data) => api.post('/api/login', data),
	join : (data) => api.post('/api/signup', data),
	sendMail : (data) => api.post('/api/send/pw', data),
	certify :  (data) => api.post('/api/send/authCheck', data),
	changePW : (data) => api.post('/api/send/changePassword/:email', data)
};

export default apis;