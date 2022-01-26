import axios from 'axios';

const api = axios.create({
	baseURL: 'https://books.ioasys.com.br/api/v1'
});

export const fetchBooks = async () => {
	const authToken = localStorage.getItem('authorization');
	const config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'authorization': `Bearer ${JSON.parse(authToken)}`,
		},
	};

	try {
		const response = await api('/books?page=1&amount=12', config);
		const data = response.data;
		console.log(data);
		return { data };
	} catch(err) {
		console.error(err);
	}
};