import { Box } from '@mui/material';
import AddPortfolioForm from '../components/AddPortfolioForm';
import AddSharesForm from '../components/AddSharesForm';
import AddStockForm from '../components/AddStockForm';
import PortfolioTable from '../components/PortfolioTable';

const Dashboard = () => {
    return (
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <AddStockForm/>
        <AddPortfolioForm/>
        <AddSharesForm/>
        <PortfolioTable/>
        <h1>Dashboard</h1>
        </Box>
    )
};

export default Dashboard;