import AddPortfolioForm from "../components/AddPortfolioForm";
import SearchStockForm from "../components/SearchStockForm";
import PortfolioTable from "../components/PortfolioTable";
import DashboardGraph from "../components/DashboardGraph";
import ColumnFlexJustifyAlignCenter from "../components/ColumnFlexJustifyAlignCenter";
import DrawerNav from "../components/Drawer";
import RowFlexBetweenCenter from "../components/RowFlexBetweenCenter";
import { useEffect } from "react";

const Dashboard = () => {
    useEffect(() => {
        document.title = "Market-Tracker/dashboard";
    }, []);
    return (
        <RowFlexBetweenCenter>
            <ColumnFlexJustifyAlignCenter width="15rem" >
                <DrawerNav />
            </ColumnFlexJustifyAlignCenter>
            <ColumnFlexJustifyAlignCenter>
            <RowFlexBetweenCenter sx={{width: '100%'}}>
                <AddPortfolioForm />
                <SearchStockForm />
            </RowFlexBetweenCenter>
                <DashboardGraph />
                <PortfolioTable />
            </ColumnFlexJustifyAlignCenter>
        </RowFlexBetweenCenter>
    );
};

export default Dashboard;
