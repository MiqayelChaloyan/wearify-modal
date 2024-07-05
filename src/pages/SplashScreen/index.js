import { ImagePaths } from "constants";
import useTheme from "hooks/useTheme";
import { useEffect } from "react";
import { colors } from "constants";
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

