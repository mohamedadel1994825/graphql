import { gql } from "apollo-server-express";
export const typeDefs = gql`
  scalar Date
  type Status {
    message: String!
  }
  type User {
    _id: ID!
    userName: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date
    updatedAt: Date
  }
  type Tweet {
    _id: ID!
    text: String!
    createdAt: Date
    updatedAt: Date
  }
  type Query {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet!]
  }
  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): Status
    signup(
      email: String!
      password: String!
      fullName: String!
      avatar: String
      userName: String
    ): User
    login(email: String!, password: String!): User
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;
