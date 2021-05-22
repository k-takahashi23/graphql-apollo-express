import { ApolloServer } from 'apollo-server-express';
import { queryTypeDef } from '@/web/typeDefs';
import { queryResolver } from '@/web/resolvers';

const typeDefs = [queryTypeDef];
const resolvers = [queryResolver];

export const server = new ApolloServer({ typeDefs, resolvers });