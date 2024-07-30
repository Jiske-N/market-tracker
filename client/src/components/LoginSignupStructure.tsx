import { useLocation } from "react-router-dom";
import ColumnFlexJustifyAlignCenter from "./ColumnFlexJustifyAlignCenter";
import LoginForm from "./LoginForm";
import RowFlexBetweenCenter from "./RowFlexBetweenCenter";
import SignUpForm from "./SignUpForm";
import background from "../../public/login-signup.jpg";

const LoginSignupStructure = () => {
    const currentPage: string = useLocation().pathname;

    return (
        <RowFlexBetweenCenter>
            <ColumnFlexJustifyAlignCenter
                flexGrow="2.2"
                sx={{
                    backgroundImage: `url(${background})`,
                    height: "100vh",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                {/* <h1>A cool background</h1> */}
            </ColumnFlexJustifyAlignCenter>
            <ColumnFlexJustifyAlignCenter
                flexGrow="1"
                minWidth="500px"
                minHeight="100vh"
            >
                {currentPage === "/sign-up" && <SignUpForm />}
                {currentPage === "/log-in" && <LoginForm />}
            </ColumnFlexJustifyAlignCenter>
        </RowFlexBetweenCenter>
    );
};

export default LoginSignupStructure;
