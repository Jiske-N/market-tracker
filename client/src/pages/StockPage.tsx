import { Box } from "@mui/material";
import AddSharesForm from "../components/AddSharesForm";
import { useUserContext } from "../utilities/UserContext";
import StockGraph from "../components/StockGraph";
import AddPortfolioForm from "../components/AddPortfolioForm";

const StockPage = () => {
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
            <StockGraph />
            <AddPortfolioForm/>
            <AddSharesForm />
        </Box>
    );
};

export default StockPage;
