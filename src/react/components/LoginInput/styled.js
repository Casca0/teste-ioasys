import styled from 'styled-components';

export const InputWrapper = styled.div`
	background: rgba(0, 0, 0, 0.32);
	backdrop-filter: blur(2px);
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	width: 368px;
	height: 60px;
	position: relative;
	&:last-child{
		margin-top: 16px;
	}

	@media screen and (max-width: 768px) {
		width: 288px;
	}
`;

export const InputLabel = styled.label`
	color: #fff;
	opacity: 0.5;
	font-size: 12px;
	font-family: 'Heebo', sans-serif;
	line-height: 16px;
	padding-top: 8px;
	padding-left: 16px;
`;

export const InputContent = styled.input`
	background: transparent;
	border-radius: 4px;
	border: none;
	color: white;
	font-size: 16px;
	width: max-content;
	padding-top: 8px;
	padding-left: 16px;

`;

export const SubmitButton = styled.input`
	background: #fff;
	border-radius: 44px;
	color: #B22E6F;
	font-family: 'Heebo', sans-serif;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	border: none;
	width: max-content;
	padding: 8px 20px;
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
`;

export const LoginError = styled.div`
	background: rgba(255, 255, 255, 0.6);
	color: #fff;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	font-family: 'Heebo', sans-serif;
	padding: 16px;
	margin-top: 24px;
	border-radius: 4px;
	position: relative;

	&::before {
		content: '';
    width: 1px;
    height: 1px;
    border-top: 5px solid rgba(255, 255, 255, 0.6);
    border-left: 5px solid  rgba(255, 255, 255, 0.6);
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    display: block;
    position: absolute;
    top: -5px;
    left: 24px;
    transform: rotate(45deg);
	}
`;