import React from "react";
import { useUserContext } from "../utilities/UserContext";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

const StockTable: React.FC = () => {
    const { holding } = useUserContext();

    // map holding to rows
    const rows = holding.map((stock) => ({
        name: stock.name,
        currentPrice: stock.currentPrice.toFixed(2),
        averageCost: stock.averageCost.toFixed(2),
        quantity: stock.quantity,
        weight: stock.weight.toFixed(2) + "%",
        currentValue: stock.currentValue.toFixed(2),
        change: stock.change.toFixed(2) + "%",
    }));

    return (
        <Box width="100%" padding="1rem 2rem">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Current Price</TableCell>
                            <TableCell>Average Cost</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Current Value</TableCell>
                            <TableCell>Change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 ? (
                            rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.currentPrice}</TableCell>
                                    <TableCell>{row.averageCost}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell>{row.weight}</TableCell>
                                    <TableCell>{row.currentValue}</TableCell>
                                    <TableCell>{row.change}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={7}>
                                    No stock data available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default StockTable;
