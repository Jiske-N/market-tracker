import { useEffect } from "react";
import LoginSignupStructure from "../components/LoginSignupStructure";

const Login = () => {
    useEffect(() => {
        document.title = "Market-Tracker/log-in";
    }, []);
    return (
        <LoginSignupStructure/>
    )
};

export default Login;