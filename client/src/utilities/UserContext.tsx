import { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from './queries';

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

interface UserContextType {
    portfolios: Portfolio[];
    shares: PortfolioStock[];
    stocks: Stock[];
    loading: boolean;
    // don't know if that right atm
    error: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const { data, loading, error } = useQuery<{ user: User }>(QUERY_USER);
    const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
    const [shares, setShares] = useState<PortfolioStock[]>([]);
    const [stocks, setStocks] = useState<Stock[]>([]);

    useEffect(() => {
        if (data && data.user) {
            const userPortfolios = data.user.portfolios || [];
            setPortfolios(userPortfolios);

            const allShares: PortfolioStock[] = [];
            const allStocks: Stock[] = [];

            userPortfolios.forEach(portfolio => {
                portfolio.portfolioStocks.forEach(stockItem => {
                    allShares.push(stockItem);
                    if (stockItem.stock && !allStocks.find(s => s._id === stockItem.stock._id)) {
                        allStocks.push(stockItem.stock);
                    }
                });
            });

            setShares(allShares);
            setStocks(allStocks);
        }
    }, [data]);

    const contextValue: UserContextType = {
        portfolios,
        shares,
        stocks,
        loading,
        error,
    };

    console.log('from user context')
    console.log('portfolios', portfolios)
    console.log('shares', shares)
    console.log('stocks', stocks)

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}