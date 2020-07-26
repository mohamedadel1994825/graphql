import {TweetResolvers} from './tweet-resolver';
export const resolvers={
    Query:{
        getTweet:TweetResolvers.getTweet,
        getTweets:TweetResolvers.getTweets,
    },
    Mutation:{
        createTweet:TweetResolvers.createTweet,
        updateTweet:TweetResolvers.updateTweet,
        deleteTweet:TweetResolvers.deleteTweet
    }
}
