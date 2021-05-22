import { ApolloServer } from 'apollo-server-express';
import { queryTypeDef, userTypeDef } from '@/web/typeDefs';
import { helloResolver, usersResolver } from '@/web/resolvers';

const typeDefs = [queryTypeDef, userTypeDef];
const resolvers = [helloResolver, usersResolver];

export const server = new ApolloServer({ typeDefs, resolvers });
