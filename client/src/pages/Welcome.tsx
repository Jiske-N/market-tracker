import { useTheme } from '@mui/material';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Advertisment from '../components/Advertisment';
import MoreInfo from '../components/MoreInfo';
import SubscriptionTiers from '../components/SubscriptionTiers'

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
        <MoreInfo/>
        <SubscriptionTiers/>
        {/* <h1 style={{color: palette.text.secondary}}>Welcome</h1> */}
        </>
    )
};

export default Welcome;