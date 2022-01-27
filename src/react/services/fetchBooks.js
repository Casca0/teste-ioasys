import axios from 'axios';

const api = axios.create({
	baseURL: 'https://books.ioasys.com.br/api/v1'
});

export const fetchBooks = async (page) => {
	const authToken = localStorage.getItem('authorization');
	const config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'authorization': `Bearer ${JSON.parse(authToken)}`,
		},
	};

	try {
		const response = await api(`/books?page=${page}&amount=12`, config);
		const data = response.data;
        
		return data;
	} catch(err) {
		console.error(err);
	}
};