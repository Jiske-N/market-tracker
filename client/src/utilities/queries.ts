import { gql } from "@apollo/client";

// query user all info
export const QUERY_USER = gql`
    query User {
        user {
            _id
            darkMode
            email
            firstName
            lastName
            portfolios {
                _id
                name
                portfolioStocks {
                    _id
                    purchasePrice
                    quantity
                    stock {
                        _id
                        exchange
                        name
                        ticker
                        historicPrices {
                            closingPrice
                            date
                        }
                    }
                }
            }
        }
    }
`;

export const STOCKS = gql`
    query Stocks {
        stocks {
            _id
            exchange
            name
            ticker
        }
    }
`;

// seems very similar to id below but need both because ticker is not necessarily unique across exchanges
export const QUERY_STOCK_BY_TICKER = gql`
    query StockByTicker($ticker: String!) {
        stockByTicker(ticker: $ticker) {
            _id
            exchange
            name
            ticker
            historicPrices {
                closingPrice
                date
            }
        }
    }
`;

export const QUERY_STOCK_BY_ID = gql`
    query StockById($id: ID!) {
        stockById(id: $id) {
            _id
            exchange
            name
            ticker
            historicPrices {
                closingPrice
                date
            }
        }
    }
`;
