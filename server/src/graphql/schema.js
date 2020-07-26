import { gql } from "apollo-server-express";
export const typeDefs = gql`
 type Status{
    message:String!
  }
  type Tweet {
    _id: ID!
    text: String!,
    createdAt:String,
    updatedAt:String
  }
 
  type Query {
    getTweet(_id:ID!):Tweet
    getTweets: [Tweet!]
  }
  type Mutation{
    createTweet(text:String!):Tweet
    updateTweet(_id:ID!,text:String):Tweet,
    deleteTweet(_id:ID!):Status
  }
  schema {
    query: Query
    mutation:Mutation
  }
`;
