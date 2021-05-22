import { gql } from "apollo-server-express";

export const userTypeDef = gql`
  type User {
    id: String
    name: String
    age: Int
  }
`;
