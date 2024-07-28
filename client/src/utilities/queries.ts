import { gql } from "@apollo/client";

// query user all info
export const QUERY_USER = gql`
    query getUser {
        user {
            _id
            darkMode
            email
            firstName
            lastName
            portfolios {
                _id
            }
        }
    }
`;

export const QUERY_STOCK = gql`
    query getApiStock(
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
