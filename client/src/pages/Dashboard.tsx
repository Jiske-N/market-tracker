import AddPortfolioForm from '../components/AddPortfolioForm';
import AddSharesForm from '../components/AddSharesForm';
import AddStockForm from '../components/AddStockForm';

const Dashboard = () => {
    return (
        <>
        <AddStockForm/>
        <AddPortfolioForm/>
        <AddSharesForm/>
        <h1>Dashboard</h1>
        </>
    )
};

export default Dashboard;