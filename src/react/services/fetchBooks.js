import axios from 'axios';

const api = axios.create({
	baseURL: 'https://books.ioasys.com.br/api/v1'
});

export const fetchBooks = () => {
	async function getBooks() {
		const token = localStorage.getItem('authorization');
		const config = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': JSON.parse(token)
			},
		};
		console.log(config);

		try {
			const response = await api('/books', config);
			const data = response.data;
			console.log(data);
		} catch(err) {
			console.log(err);
		}
	}

	return { getBooks };
};