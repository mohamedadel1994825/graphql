import {Tweet} from "../../models/tweet";
import regeneratorRuntime from "regenerator-runtime";
export const TweetResolvers= {
  getTweet:(_,{_id})=>Tweet.findById(_id),
  getTweets: () => Tweet.find({}).sort({createdAt:-1}),
  createTweet:(_,args)=>Tweet.create(args),
  updateTweet:(_,{_id,...rest})=>Tweet.findByIdAndUpdate(_id,rest,{new:true}),
  deleteTweet:async(_,{_id})=>{
    try {
      await Tweet.findByIdAndRemove(_id)
      return {
        message:`Tweet deleted with _id: ${_id} `
      }
    } catch (error) {
      throw error
    }
   
  }
};
