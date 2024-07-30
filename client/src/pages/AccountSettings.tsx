import RowFlexBetweenCenter from "../components/RowFlexBetweenCenter";
import ColumnFlexJustifyAlignCenter from "../components/ColumnFlexJustifyAlignCenter";
import DrawerNav from "../components/Drawer";
import ThemeToggle from "../components/ThemeToggle";
import { useEffect } from "react";

const AccountSettings = () => {
    useEffect(() => {
        document.title = "Market-Tracker/account-settings";
    }, []);
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
