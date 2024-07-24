export const typeDefs = `#graphql
type Auth {
token: ID
user: User
}

type HistoricPrice {
    date: String
    closingPrice: Float
}

type OwnedShares {
    _id: ID
    purchasePrice: Float
    quantity: Int
    stock: [Stock]
}

type Portfolio {
_id: ID
portfolioStocks: [OwnedShares]
}

type Stock {
    _id: ID
    ticker: String
    exchange: String
    historicPrices: [HistoricPrice]
}

type User {
_id: ID
firstName: String
lastName: String
email: String
darkMode: Boolean
portfolios: [Portfolio]
}

type Query {
user: User
}

type Mutation {
addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
updateUser(firstName: String, lastName: String, email: String, password: String, darkMode: Boolean): User
login(email: String!, password: String!): Auth
updateStock(ticker: String!): HistoricPrice
}`;
