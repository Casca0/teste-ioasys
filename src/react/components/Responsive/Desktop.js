import React from 'react';
import useResponsive from '../../hooks/useResponsive';

const Desktop = ({ children }) => {
	const { isDesktop } = useResponsive();

	return isDesktop && children;
};

export default React.memo(Desktop);