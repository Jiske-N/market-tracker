export const typeDefs = `#graphql
type Auth {
    token: ID
    user: User
}

type HistoricPrice {
    date: String
    closingPrice: Float
}

# type OwnedShares {
#     _id: ID!
#     purchasePrice: Float!
#     quantity: Int!
#     stock: [Stock]
# }

type OwnedShares {
    _id: ID!
    purchasePrice: Float!
    quantity: Int!
    stock: Stock
}

type Portfolio {
    _id: ID!
    name: String
    portfolioStocks: [OwnedShares]
}

type Stock {
    _id: ID!
    name: String
    ticker: String!
    exchange: String
    historicPrices: [HistoricPrice]
}

type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    darkMode: Boolean
    portfolios: [Portfolio]
}

type Query {
    user: User
    portfolios: [Portfolio]
    ownedShares: [OwnedShares]
    stocks: [Stock]
    stockByTicker(ticker: String): [Stock]
    stockById(id: ID!): Stock
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String, darkMode: Boolean): User
    login(email: String!, password: String!): Auth
    #removeUser(stretch)
    addPortfolio(name: String!): Portfolio
    #updatePortfolio(stretch)
    #removePortfolio(stretch)
    addShares(stock: ID!, portfolio: ID!, quantity: Int!, purchasePrice: Float!): OwnedShares
    #updateShares(stretch)
    #removeShares(stretch)
    updateStock(ticker: String!): Stock
}`;
