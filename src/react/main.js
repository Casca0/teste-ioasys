import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/app';

const react = () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root'),
	);
};

export default react;