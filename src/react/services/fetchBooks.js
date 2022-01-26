import axios from 'axios';
// import { useAuthContext } from '../contexts/AuthContext';


const api = axios.create({
	baseURL: 'https://books.ioasys.com.br/api/v1'
});

export const fetchBooks = () => {
	// const { refreshToken } = useAuthContext();

	// const rfToken = refreshToken();

	// console.log(rfToken);

	async function getBooks() {
		const token = localStorage.getItem('refresh-token');
		const authToken = localStorage.getItem('authorization');
		const config = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': JSON.parse(authToken),
			},
			data: {
				'refresh-token': token,
			}
		};

		try {
			const response = await api('/books', config);
			const data = response.data;
			console.log(data);
		} catch(err) {
			console.error(err);
		}
	}

	return { getBooks };
};