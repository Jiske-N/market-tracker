import ColumnFlexJustifyAlignCenter from "./ColumnFlexJustifyAlignCenter";
import RowFlexBetweenCenter from "./RowFlexBetweenCenter";
import SignUpForm from "./SignUpForm";

const LoginSignupStructure = () => {
    return (
        <RowFlexBetweenCenter>
            <ColumnFlexJustifyAlignCenter flexGrow="2.2">
                <h1>A cool background</h1>
            </ColumnFlexJustifyAlignCenter>
            <ColumnFlexJustifyAlignCenter flexGrow="1" minWidth="500px" minHeight='100vh'>
                <SignUpForm/>
            </ColumnFlexJustifyAlignCenter>
        </RowFlexBetweenCenter>
    );
};

export default LoginSignupStructure;
