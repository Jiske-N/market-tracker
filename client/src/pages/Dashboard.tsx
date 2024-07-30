import { Box } from "@mui/material";
import AddPortfolioForm from "../components/AddPortfolioForm";
// import AddSharesForm from "../components/AddSharesForm";
import SearchStockForm from "../components/SearchStockForm";
import PortfolioTable from "../components/PortfolioTable";
import { useUserContext } from "../utilities/UserContext";
import DashboardGraph from "../components/DashboardGraph";

const Dashboard = () => {
    const { portfolios, shares, stocks, loading, error } = useUserContext();
    return (
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            {portfolios && portfolios.length > 0 ? (
                portfolios.map((portfolio) => (
                    <tr key={portfolio._id}>
                        <td>{portfolio._id}</td>
                        <td>{portfolio.name}</td>
                        <td>{portfolio.portfolioStocks.length}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No portfolios found</td>
                </tr>
            )}
            <SearchStockForm />
            <AddPortfolioForm />
            {/* <AddSharesForm /> */}
            <DashboardGraph />
            <PortfolioTable />
        </Box>
    );
};

export default Dashboard;
