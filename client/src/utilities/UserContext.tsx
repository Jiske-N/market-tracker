import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "./queries";

interface HistoricPrice {
    closingPrice: number;
    date: string;
}

interface Stock {
    _id: string;
    exchange: string;
    name: string;
    ticker: string;
    historicPrices: HistoricPrice[];
}

interface PortfolioStock {
    _id: string;
    purchasePrice: number;
    quantity: number;
    stock: Stock;
}

interface Portfolio {
    _id: string;
    name: string;
    portfolioStocks: PortfolioStock[];
}

interface User {
    _id: string;
    darkMode: boolean | null;
    email: string;
    firstName: string;
    lastName: string;
    portfolios: Portfolio[];
}

// interface UserContextType {
//     portfolios: Portfolio[];
//     shares: PortfolioStock[];
//     stocks: Stock[];
//     loading: boolean;
//     // don't know if that right atm
//     error: any;
// }
interface holding {
    name: string;
    currentPrice: number;
    averageCost: number;
    quantity: number;
    weight: number;
    currentValue: number;
    change: number;
}

interface UserContextType {
    portfolios: Portfolio[];
    shares: PortfolioStock[];
    stocks: Stock[];
    holding: holding[];
    loading: boolean;
    error: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { data, loading, error } = useQuery<{ user: User }>(QUERY_USER);
    const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
    const [shares, setShares] = useState<PortfolioStock[]>([]);
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [holding, setholding] = useState<holding[]>([]);

    useEffect(() => {
        if (data && data.user) {
            const userPortfolios = data.user.portfolios || [];
            setPortfolios(userPortfolios);

            const allShares: PortfolioStock[] = [];
            const allStocks: Stock[] = [];

            userPortfolios.forEach((portfolio) => {
                portfolio.portfolioStocks.forEach((stockItem) => {
                    allShares.push(stockItem);
                    if (
                        stockItem.stock &&
                        !allStocks.find((s) => s._id === stockItem.stock._id)
                    ) {
                        allStocks.push(stockItem.stock);
                    }
                });
            });

            setShares(allShares);
            setStocks(allStocks);

            const holding: holding[] = allStocks.map((stock) => {
                // most recent closing price
                const mostRecentPrice = stock.historicPrices.reduce(
                    (latest, price) =>
                        new Date(price.date) > new Date(latest.date)
                            ? price
                            : latest
                );

                // average cost - I don't think it works properly atm need to test
                const shares = allShares.filter(
                    (share) => share.stock._id === stock._id
                );
                const totalCost = shares.reduce(
                    (total, share) =>
                        total + share.purchasePrice * share.quantity,
                    0
                );
                const totalQuantity = shares.reduce(
                    (total, share) => total + share.quantity,
                    0
                );
                const averageCost = totalCost / totalQuantity;

                // current price
                const currentPrice = mostRecentPrice.closingPrice;

                // quantity
                const quantity = shares.reduce(
                    (total, share) => total + share.quantity,
                    0
                );

                // current value
                const currentValue = currentPrice * quantity;

                // weight/totalPortfolioValue - doesn't work properly atm
                const totalPortfolioValue = shares.reduce(
                    (total, share) =>
                        total + share.purchasePrice * share.quantity,
                    0
                );
                // should be * 100 at the end but * 10 gives close to the actual value
                const weight = (currentValue / totalPortfolioValue) * 10;

                // change
                const change =
                    ((currentPrice - averageCost) / averageCost) * 100;

                return {
                    name: stock.name,
                    currentPrice,
                    averageCost,
                    quantity,
                    weight,
                    currentValue,
                    change,
                };
            });

            setholding(holding);
        }
    }, [data]);

    const contextValue: UserContextType = {
        portfolios,
        shares,
        stocks,
        holding,
        loading,
        error,
    };

    console.log("from user context");
    console.log("portfolios", portfolios);
    console.log("shares", shares);
    console.log("stocks", stocks);
    console.log("holding", holding);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
