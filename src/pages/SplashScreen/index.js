import { useEffect } from 'react';

import useTheme from 'hooks/useTheme';

import { ImagePaths, colors } from 'constants';

import './styles.css';


export default function SplashScreen() {
    const { setTheme } = useTheme();

    useEffect(() => setTheme(colors.darkBlue), []);

    return (
        <div className='container-splash'>
            <img src={ImagePaths.logoUrl} alt='logo' className='img' />
        </div>
    )
};

