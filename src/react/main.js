import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BooksProvider } from './contexts/BooksContext';

import App from './pages/app';

const react = () => {
	ReactDOM.render(
		<BooksProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</BooksProvider>,
		document.getElementById('root'),
	);
};

export default react;