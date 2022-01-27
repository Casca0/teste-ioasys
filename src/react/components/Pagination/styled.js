import styled, { css } from 'styled-components';

import arrow from '../../images/arrow.svg';

const ButtonStyle = css`
  border: none;
  display: block;
  width: 32px;
  height: 32px;
  background: url(${arrow}) no-repeat;
  cursor: pointer;

  &.is--disabled {
    opacity: 0.6;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  margin-right: 115px;
  align-items: right;
  line-height: 32px;
  width: fit-content;
  margin-top: 16px;
  margin-left: auto;

  strong {
    margin-inline: 4px;
  }

  @media screen and (max-width: 768px){
		margin: 16px auto 64px;
	}
`;

export const PrevButton = styled.button`
  ${ButtonStyle}
  margin-left: 16px;
  transform: rotate(180deg);

	@media screen and (max-width: 768px){
		margin-right: 16px;
		margin-left: 0;
	}
`;

export const NextButton = styled.button`
  ${ButtonStyle}
	margin-left: 8px;
	
	@media screen and (max-width: 768px){
		margin-left: 16px;
	}
`;