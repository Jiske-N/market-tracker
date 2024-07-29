import { Box } from "@mui/material";
import AddPortfolioForm from "../components/AddPortfolioForm";
import AddSharesForm from "../components/AddSharesForm";
import AddStockForm from "../components/SearchStockForm";
import PortfolioTable from "../components/PortfolioTable";
import { useUserContext } from "../utilities/UserContext";
import StockGraph from "../components/StockGraph";

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
            <AddStockForm />
            <AddPortfolioForm />
            <AddSharesForm />
            <StockGraph />
            <PortfolioTable />
            <h1>Dashboard</h1>
        </Box>
    );
};

export default Dashboard;
