import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import {GraphQLWsLink} from '@apollo/client/link/subscriptions';
import {createClient} from 'graphql-ws';
import {getMainDefinition} from '@apollo/client/utilities';

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_ENDPOINT ?? 'http://localhost:8080/v1/graphql',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.GRAPHQL_WS_ENDPOINT ?? 'ws://localhost:4000/graphql',
  }),
);

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
