import AddPortfolioForm from "../components/AddPortfolioForm";
import SearchStockForm from "../components/SearchStockForm";
import PortfolioTable from "../components/PortfolioTable";
import DashboardGraph from "../components/DashboardGraph";
import ColumnFlexJustifyAlignCenter from "../components/ColumnFlexJustifyAlignCenter";
import DrawerNav from "../components/Drawer";
import RowFlexBetweenCenter from "../components/RowFlexBetweenCenter";

const Dashboard = () => {
    return (
        <RowFlexBetweenCenter>
            <ColumnFlexJustifyAlignCenter width="15rem" >
                <DrawerNav />
            </ColumnFlexJustifyAlignCenter>
            <ColumnFlexJustifyAlignCenter>
            <RowFlexBetweenCenter>
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
