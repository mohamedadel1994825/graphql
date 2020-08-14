import express from "express";
import bodyParser from "body-parser";
import "./src/config/db";
import constants from "./src/config/constants";
import { typeDefs } from "./src/graphql/schema";
import {resolvers} from "./src/graphql/resolvers";
import { ApolloServer } from "apollo-server-express";
import mocks from "./src/mocks";
const app = express();
// app.use(bodyParser.json());
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: `${constants.GRAPHQL_PATH}` });
mocks().then(() => {
  app.listen(constants.PORT, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`listen to port ${constants.PORT}`);
    }
  });
});
