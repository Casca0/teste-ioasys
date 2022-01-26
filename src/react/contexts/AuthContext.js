import React, { createContext, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
	const { handleLogin, handleLogout, isAuthenticated, isLoading, isError } = useAuth();

	return (
		<AuthContext.Provider data={{ handleLogin, handleLogout, isAuthenticated, isLoading, isError }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const context = useContext(AuthContext);

	return context;
}