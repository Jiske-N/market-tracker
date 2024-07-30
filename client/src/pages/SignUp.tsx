import { useEffect } from "react";
import LoginSignupStructure from "../components/LoginSignupStructure";

const SignUp = () => {
    useEffect(() => {
        document.title = "Market-Tracker/sign-up";
    }, []);
    return <LoginSignupStructure />;
};

export default SignUp;
