import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';

const resolvers = {
  Query: {
    info: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🐝 Listening on ${url}`);
});
