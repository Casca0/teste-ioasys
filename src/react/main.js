import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contexts/AuthContext';

import App from './pages/app';

const react = () => {
	ReactDOM.render(
		<AuthProvider>
			<App />
		</AuthProvider>,
		document.getElementById('root'),
	);
};

export default react;