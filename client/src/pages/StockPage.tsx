import AddSharesForm from "../components/AddSharesForm";
import StockGraph from "../components/StockGraph";
import AddPortfolioForm from "../components/AddPortfolioForm";
import SearchStockForm from "../components/SearchStockForm";
import RowFlexBetweenCenter from "../components/RowFlexBetweenCenter";
import ColumnFlexJustifyAlignCenter from "../components/ColumnFlexJustifyAlignCenter";
import DrawerNav from "../components/Drawer";
import { Box } from "@mui/material";
import { useEffect } from "react";

const StockPage = () => {
    useEffect(() => {
        document.title = "Market-Tracker/stock";
    }, []);
    return (
        <RowFlexBetweenCenter>
            <ColumnFlexJustifyAlignCenter width="15rem">
                <DrawerNav />
            </ColumnFlexJustifyAlignCenter>
            <ColumnFlexJustifyAlignCenter>
            {/* janky quick way to adjust position before presentation */}
            <Box sx={{paddingLeft: '47rem'}}>
                <SearchStockForm />
            </Box>
                <StockGraph />
                <RowFlexBetweenCenter sx={{width: '100%'}}>
                <AddPortfolioForm />
                <AddSharesForm />
                </RowFlexBetweenCenter>
            </ColumnFlexJustifyAlignCenter>
        </RowFlexBetweenCenter>
    );
};

export default StockPage;
