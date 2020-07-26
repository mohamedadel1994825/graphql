import mongoose, { Schema } from "mongoose";
const TweetSchema = new Schema({
  text: String,
},
{timestamps:true}
);
export const Tweet = mongoose.model("Tweet", TweetSchema);
