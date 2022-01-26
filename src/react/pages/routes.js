import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

import LoginPage from './LoginPage';
import BooksPage from './BooksPage';


const Pages = () => {
	const { isAuthenticated } = useAuthContext();
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={isAuthenticated ? <Navigate to='/biblioteca' /> : <LoginPage/>} />
				<Route path='/biblioteca' element={isAuthenticated ? <BooksPage /> : <Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;