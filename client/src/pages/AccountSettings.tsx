import RowFlexBetweenCenter from "../components/RowFlexBetweenCenter";
import ColumnFlexJustifyAlignCenter from "../components/ColumnFlexJustifyAlignCenter";
import DrawerNav from "../components/Drawer";
import ThemeToggle from "../components/ThemeToggle";

const AccountSettings = () => {
    return (
        <RowFlexBetweenCenter>
            <ColumnFlexJustifyAlignCenter width="15rem">
                <DrawerNav />
            </ColumnFlexJustifyAlignCenter>
            <ColumnFlexJustifyAlignCenter>
                <ThemeToggle />
            </ColumnFlexJustifyAlignCenter>
        </RowFlexBetweenCenter>
    );
};

export default AccountSettings;
