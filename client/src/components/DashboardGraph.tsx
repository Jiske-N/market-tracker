import React from "react";
import { Box, Typography } from "@mui/material";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { useUserContext } from "../utilities/UserContext";
import { getRandomColor } from "../utilities/helpers";

// I think this is currently returning stocks from all portfolios. will need to adjust so it's only the selected one.
const DashboardGraph: React.FC = () => {
    const { stocks, loading, error } = useUserContext();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const selectedStock = stocks.flatMap((stock) =>
        stock.historicPrices.map((price) => ({
            date: price.date,
            closingPrice: price.closingPrice,
            stockName: stock.name,
        }))
    );

    console.log(selectedStock);
    const reversedData = selectedStock.reverse();

    // get the gist but don't really know whats going on here
    // chat gpt helped me to get the dates to stop duplicating on the x axis
    // Aggregate data to ensure unique dates
    const aggregatedData = Array.from(
        reversedData
            .reduce((acc, item) => {
                // Create a new entry for a date if it doesn't already exist in the accumulator
                if (!acc.has(item.date)) {
                    acc.set(item.date, {
                        date: item.date,
                        ...Object.fromEntries(
                            new Set(
                                reversedData.map(({ stockName }) => [
                                    stockName,
                                    null,
                                ])
                            )
                        ),
                    });
                }
                // Update the closing price for the stock
                acc.get(item.date)[item.stockName] = item.closingPrice;
                return acc;
            }, new Map())
            .values()
    );

    const stockNames = [...new Set(reversedData.map((item) => item.stockName))];

    // const chartLines = stockNames.map(stockName => (
    //     <Line
    //     key={stockName}
    //     type='monotone'
    //     dataKey='closingPrice'
    //     stroke={getRandomColor()}
    //     name={stockName}
    //     data={reversedData.filter(item => item.stockName === stockName)}
    //     />
    // ))

    // sx={{
    //     width: '75%', // Adjust this percentage as needed
    //     maxWidth: '100%', // Ensure it doesn't exceed the parent container
    //     margin: 'auto', // Center the chart horizontally
    //     padding: 2, // Optional padding
    // }}

    return (
        <Box sx={{margin: 'auto', width:"100%", padding:"1rem 2rem 4rem 2rem", maxWidth: '100%'}}>
            <Typography variant="h4" sx={{fontWeight: 'bold', padding: "0rem 0rem 1rem 5rem"}}>Portfolio Stocks</Typography>
            {aggregatedData && aggregatedData.length > 0 ? (
                <LineChart
                    width={1500}
                    height={750}
                    data={aggregatedData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        tickFormatter={(tick) =>
                            new Date(tick).toLocaleDateString()
                        }
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* {chartLines} */}
                    {stockNames.map((stockName) => (
                        <Line
                            strokeWidth={4}
                            key={stockName}
                            type="monotone"
                            dataKey={stockName}
                            stroke={getRandomColor()}
                            name={stockName}
                        />
                    ))}
                </LineChart>
            ) : (
                <p>No stocks found</p>
            )}
        </Box>
    );
};

export default DashboardGraph;
