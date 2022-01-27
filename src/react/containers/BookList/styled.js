import styled from 'styled-components';

export const Books = styled.main`
	padding: 0 115px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 16px;

	@media screen and (max-width: 768px){
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 16px;
	}
`;