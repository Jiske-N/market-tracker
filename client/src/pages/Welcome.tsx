import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Advertisment from '../components/Advertisment';
import MoreInfo from '../components/MoreInfo';
import SubscriptionTiers from '../components/SubscriptionTiers'
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Welcome = () => {
    useEffect(() => {
        document.title = "Market-Tracker";
    }, []);
    return (
        <>
        <Navbar/>
        <Hero/>
        <Advertisment/>
        <MoreInfo/>
        <SubscriptionTiers/>
        <Footer/>
        </>
    )
};

export default Welcome;