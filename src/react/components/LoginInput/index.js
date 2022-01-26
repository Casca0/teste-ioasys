import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
// import { useAuth } from '../../hooks/useAuth';

import * as S from './styled';

const LoginInput = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const { handleLogin, isError } = useAuthContext();
	const handleSubmit = () => {
		handleLogin({ email, password });
	};

	return (
		<>
			<S.InputWrapper>
				<S.InputLabel>Email</S.InputLabel>
				<S.InputContent type='text' onChange={(ev) => setEmail(ev.target.value)}/>
			</S.InputWrapper>
			<S.InputWrapper>
				<S.InputLabel>Senha</S.InputLabel>
				<S.InputContent type='password' onChange={(ev) => setPassword(ev.target.value)}/>
				<S.SubmitButton type='button' value='Entrar' onClick={handleSubmit}/>
				{isError ? <S.LoginError>Email e/ou senha incorretos.</S.LoginError> : <></>}
			</S.InputWrapper>
		</>
	);
};

export default LoginInput;