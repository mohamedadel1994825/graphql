import {Tweet} from "../models/tweet";
import {User} from '../models/User'
import faker from "faker";
import regeneratorRuntime from "regenerator-runtime";
const TWEETS_TOTAL = 10;
export default async () => {
  try {
    await Tweet.remove();
    await User.remove();
    await Array.from({ length: TWEETS_TOTAL }).forEach(
      async () => await Tweet.create({ text: faker.lorem.paragraph(1) })
    );
  } catch (error) {}
};
