import express from 'express'
import bodyParser from 'body-parser'
import './config/db'
import constants from './config/constants'
import schema from './graphql/schema'
import resolvers from './graphql/resolvers'
import { ApolloServer }from 'apollo-server-express';
const app =express();;
app.use(bodyParser.json());
const server = new ApolloServer({ schema, resolvers });
server.applyMiddleware({app,path:`${constants.GRAPHQL_PATH}`});
app.listen(constants.PORT,err=>{
    if (err) {
        console.error(err)
    }
    else{
        console.log(`listen to port ${constants.PORT}`)
    }
}) 