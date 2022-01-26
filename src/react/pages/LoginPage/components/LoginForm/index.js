import React from 'react';
import * as S from './styled';

import LoginInput from '../../../../components/LoginInput';

const LoginForm = () => (
	<S.LoginWrapper>
		<S.LoginContainer>
			<S.LoginTitle>
				<strong>ioasys</strong> Books
			</S.LoginTitle>
			<LoginInput />
		</S.LoginContainer>
	</S.LoginWrapper>
);

export default LoginForm;