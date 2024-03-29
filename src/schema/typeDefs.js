const { gql } = require('apollo-server-express');

export const typeDefs = gql`
  type Query {
    me: User!
    user(id: ID!): User
    users: [User]!
  }

  type User {
    id: ID!
    name: String!
  }
`;

export default typeDefs;
