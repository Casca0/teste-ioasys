import React from 'react';
import useResponsive from '../../hooks/useResponsive';

const Mobile = ({ children }) => {
	const { isMobile } = useResponsive();

	return isMobile && children;
};

export default React.memo(Mobile);