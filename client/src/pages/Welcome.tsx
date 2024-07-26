import { useTheme } from '@mui/material';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';

const Welcome = () => {
    const {palette} = useTheme()

    const h1Style = {
        color: palette.text.secondary // Use the primary main color from the theme
    };
    return (
        <>
        <Navbar/>
        <Hero/>
        {/* <h1 style={{color: palette.text.secondary}}>Welcome</h1> */}
        </>
    )
};

export default Welcome;