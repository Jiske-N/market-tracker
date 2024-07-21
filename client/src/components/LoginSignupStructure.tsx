import ColumnFlexJustifyAlignCenter from "./ColumnFlexJustifyAlignCenter";
import LoginForm from "./LoginForm";
import RowFlexBetweenCenter from "./RowFlexBetweenCenter";

const LoginSignupStructure = () => {
    return (
        <RowFlexBetweenCenter>
            <ColumnFlexJustifyAlignCenter flexGrow="2.2">
                <h1>A cool background</h1>
            </ColumnFlexJustifyAlignCenter>
            <ColumnFlexJustifyAlignCenter flexGrow="1" minWidth="500px" minHeight='100vh'>
                <LoginForm/>
            </ColumnFlexJustifyAlignCenter>
        </RowFlexBetweenCenter>
    );
};

export default LoginSignupStructure;
