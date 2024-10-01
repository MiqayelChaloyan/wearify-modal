import { useEffect } from 'react';

import useTheme from 'hooks/useTheme';

import { ImagePaths } from 'constants';

import colors from 'themes/colors';

import { Column, Image } from './styles';


const SplashScreen = () => {
    const { setTheme } = useTheme();

    useEffect(() => setTheme(colors.darkBlue), []);

    return (
        <Column>
            <Image src={ImagePaths.logoUrl} alt='Splash-Logo' />
        </Column>
    )
};

export default SplashScreen;
