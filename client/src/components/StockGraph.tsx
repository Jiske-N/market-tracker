// import React from "react";
// import { Box } from "@mui/material";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
// } from "recharts"; // Adjust if using a different library
// import { useUserContext } from "../utilities/UserContext";

// // I think this is currently returning stocks from all portfolios. will need to adjust so it's only the selected one.
// const StockGraph: React.FC = () => {
//     const { stocks, loading, error } = useUserContext();

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     // flat map removes a level from the array
//     const selectedStock = stocks.flatMap((stock) =>
//         stock.historicPrices.map((price) => ({
//             date: price.date,
//             closingPrice: price.closingPrice,
//             stockName: stock.name,
//         }))
//     );

//     const reversedData = selectedStock.reverse();

// console.log(reversedData)

//     return (
//         <Box width="100%" padding="1rem 2rem 4rem 2rem">
//             <h1>Stock Graph</h1>
//             {stocks && stocks.length > 0 ? (
//                 <LineChart
//                     width={1000}
//                     height={500}
//                     data={reversedData}
//                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis
//                         dataKey="date"
//                         tickFormatter={(tick) =>
//                             new Date(tick).toLocaleDateString()
//                         }
//                     />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line
//                         type="monotone"
//                         dataKey="closingPrice"
//                         stroke="#8884d8"
//                     />
//                 </LineChart>
//             ) : (
//                 <p>No stocks found</p>
//             )}
//         </Box>
//     );
// };

// export default StockGraph;

import React from "react";
import { Box } from "@mui/material";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts"; // Adjust if using a different library
import { useQuery } from "@apollo/client";
import { QUERY_STOCK_BY_ID } from "../utilities/queries";

// I think this is currently returning selectedStock from all portfolios. will need to adjust so it's only the selected one.
const StockGraph: React.FC = () => {

    const id = localStorage.getItem("stockQuery");
    // console.log(typeof id, id);
    const { data, loading, error } = useQuery(QUERY_STOCK_BY_ID, {
        variables: {
            id,
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const stock = data?.stockById;

    if (!stock) return <p>No data available</p>;

    const selectedStockName = stock.name

    const selectedStockArray = stock.historicPrices.map((price) => ({
        date: price.date,
        closingPrice: price.closingPrice,
    }));

    const selectedStock = selectedStockArray.flat()

    const reversedData = selectedStock.reverse();

    // console.log(reversedData)
    return (
        <Box width="100%" padding="1rem 2rem 4rem 2rem">
            <h1>{selectedStockName}</h1>
            {selectedStock && selectedStock.length > 0 ? (
                <LineChart
                    width={1000}
                    height={500}
                    data={reversedData}
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
                    <Line
                        type="monotone"
                        dataKey="closingPrice"
                        stroke="#8884d8"
                    />
                </LineChart>
            ) : (
                <p>No prices found</p>
            )}
        </Box>
    );
};

export default StockGraph;
