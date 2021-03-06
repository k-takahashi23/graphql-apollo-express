import { gql } from 'apollo-server-express';

export const queryTypeDef = gql`
  type Query {
    hello: String
    users: [User!]!
    user: User
  }
`;
