import { useEffect } from 'react';

import useTheme from 'hooks/useTheme';

import { ImagePaths } from 'constants';
import colors from 'themes/colors';

import './styles.css';


export default function SplashScreen() {
    const { setTheme } = useTheme();

    useEffect(() => setTheme(colors.darkBlue), []);

    return (
        <div className='container-splash'>
            <img
                src={ImagePaths.logoUrl}
                alt='logo'
                className='logo'
            />
        </div>
    )
};

