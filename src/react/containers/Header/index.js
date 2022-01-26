import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

import * as S from './styled';

const Header = () => {
	const user = localStorage.getItem('username');

	const { handleLogout } = useAuthContext();

	return (
		<S.HeaderWrapper>
			<S.HeaderTitle><strong>ioasys</strong> Books</S.HeaderTitle>
			<S.HeaderUsername>Bem vindo, <strong>{user}!</strong></S.HeaderUsername>
			<S.HeaderLogout onClick={handleLogout}/>
		</S.HeaderWrapper>
	);
};

export default Header;