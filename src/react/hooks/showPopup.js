import { useState } from 'react';
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://books.ioasys.com.br/api/v1'
});

export const togglePopup = () => {
	const [ showPopup, setShowPopup ] = useState(false);
	const [ bookInfo, setBookInfo ] = useState({});

	async function searchBook(id) {
		const authToken = localStorage.getItem('authorization');
		const config = {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				'authorization': `Bearer ${JSON.parse(authToken)}`
			},
		};
	
		try {
			const response = await api(`/books/${id}`, config);
			const data = response.data;
			setShowPopup(true);
			setBookInfo(data);
			return data;
		} catch(err) {
			console.error(err);
		}
	}
	return { searchBook, showPopup, bookInfo, setShowPopup };
};