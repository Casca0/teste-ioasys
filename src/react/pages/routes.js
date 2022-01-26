import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './LoginPage';
import BooksPage from './BooksPage';

const Pages = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/library' element={<BooksPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;