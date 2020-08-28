import {TweetResolvers} from './tweet-resolver';
import {UserResolver}from '../resolvers/user-resolver'
import GraphQLDate from 'graphql-date';
export const resolvers={
    Date:GraphQLDate,
    Query:{
        getTweet:TweetResolvers.getTweet,
        getTweets:TweetResolvers.getTweets,
    },
    Mutation:{
        createTweet:TweetResolvers.createTweet,
        updateTweet:TweetResolvers.updateTweet,
        deleteTweet:TweetResolvers.deleteTweet,
        signup:UserResolver.signup,
        login:UserResolver.login
    }
}
