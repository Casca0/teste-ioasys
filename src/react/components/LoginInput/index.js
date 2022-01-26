import React from 'react';

import * as S from './styled';

const LoginInput = () => (
	<>
		<S.InputWrapper>
			<S.InputLabel>Email</S.InputLabel>
			<S.InputContent type='text' />
		</S.InputWrapper>
		<S.InputWrapper>
			<S.InputLabel>Senha</S.InputLabel>
			<S.InputContent type='password' />
			<S.SubmitButton type='button' value='Entrar' />
		</S.InputWrapper>
	</>
);

export default LoginInput;