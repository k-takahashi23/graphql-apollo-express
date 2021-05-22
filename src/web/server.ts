import { ApolloServer } from 'apollo-server-express';
import { queryTypeDef, userTypeDef } from '@/web/typeDefs';
import { queryResolver } from '@/web/resolvers';

const typeDefs = [queryTypeDef, userTypeDef];
const resolvers = [queryResolver];

export const server = new ApolloServer({ typeDefs, resolvers });