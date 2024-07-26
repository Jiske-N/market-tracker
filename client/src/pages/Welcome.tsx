import { useTheme } from '@mui/material';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Advertisment from '../components/Advertisment';

const Welcome = () => {
    // const {palette} = useTheme()

    // const h1Style = {
    //     color: palette.text.secondary // Use the primary main color from the theme
    // };
    return (
        <>
        <Navbar/>
        <Hero/>
        <Advertisment/>
        {/* <h1 style={{color: palette.text.secondary}}>Welcome</h1> */}
        </>
    )
};

export default Welcome;