import { ApolloServer } from 'apollo-server-express';
import { queryTypeDef } from './typeDefs';
import { queryResolver } from './resolvers';

const typeDefs = [queryTypeDef];
const resolvers = [queryResolver];

export const server = new ApolloServer({ typeDefs, resolvers });