import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
	const isDesktop = useMediaQuery({ minWidth: '769px' });
	const isMobile = useMediaQuery({ maxWidth: '789px' });

	return { isDesktop, isMobile };
};

export default useResponsive;