import { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://books.ioasys.com.br/api/v1'
});

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('authorization');

		if (token) {
			api.defaults.headers = {
				'authorization': `${JSON.parse(token)}`,
			};

			setIsAuthenticated(true);
		}

		setIsLoading(false);
	}, []);

	async function handleLogin({ email, password }) {
		const data = JSON.stringify({ email, password });
		const config = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			data
		};

		try {
			const response = await api('/auth/sign-in', config);
			const data = response.data;
			const dataHeader = response.headers;
            
			setIsError(false);
			setIsAuthenticated(true);
			localStorage.setItem('username', data.name);
			localStorage.setItem('authorization', JSON.stringify(dataHeader.authorization));
			localStorage.setItem('refresh-token', response.headers['refresh-token']);
		} catch(err) {
			setIsError(true);
			console.error(err);
		}
	}

	function handleLogout() {
		setIsAuthenticated(false);
		localStorage.removeItem('authorization');
	}

	return { handleLogin, handleLogout, isAuthenticated, isLoading, isError };
};