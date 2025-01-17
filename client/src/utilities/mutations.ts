import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_PORTFOLIO = gql`
    mutation addPortfolio($name: String!) {
        addPortfolio(name: $name) {
            _id
            name
            portfolioStocks {
                _id
            }
        }
    }
`;

export const ADD_SHARES = gql`
    mutation addShares(
        $stock: ID!
        $portfolio: ID!
        $quantity: Int!
        $purchasePrice: Float!
    ) {
        addShares(
            stock: $stock
            portfolio: $portfolio
            quantity: $quantity
            purchasePrice: $purchasePrice
        ) {
            _id
            purchasePrice
            quantity
            stock {
                _id
            }
        }
    }
`;

export const UPDATE_STOCK = gql`
    mutation updateStock($ticker: String!) {
        updateStock(ticker: $ticker) {
            _id
        }
    }
`;
