import AddSharesForm from "../components/AddSharesForm";
import StockGraph from "../components/StockGraph";
import AddPortfolioForm from "../components/AddPortfolioForm";
import SearchStockForm from "../components/SearchStockForm";
import RowFlexBetweenCenter from "../components/RowFlexBetweenCenter";
import ColumnFlexJustifyAlignCenter from "../components/ColumnFlexJustifyAlignCenter";
import DrawerNav from "../components/Drawer";

const StockPage = () => {
    return (
        <RowFlexBetweenCenter>
            <ColumnFlexJustifyAlignCenter width="15rem">
                <DrawerNav />
            </ColumnFlexJustifyAlignCenter>
            <ColumnFlexJustifyAlignCenter>
                <SearchStockForm />
                <StockGraph />
                <AddPortfolioForm />
                <AddSharesForm />
            </ColumnFlexJustifyAlignCenter>
        </RowFlexBetweenCenter>
    );
};

export default StockPage;
