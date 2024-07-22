export const typeDefs = `#graphql
type User {
_id: ID
firstName: String
lastName: String
email: String
darkMode: Boolean
}

type Auth {
token: ID
user: User
}

type Query {
user: User
}

type Mutation {
addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
updateUser(firstName: String, lastName: String, email: String, password: String, darkMode: Boolean): User
login(email: String!, password: String!): Auth
}`;
