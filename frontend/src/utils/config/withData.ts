import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/react-ssr';
import withApollo from 'next-with-apollo';

interface Props {
  headers: any;
  initialState: any;
};

function createClient({ headers, initialState }:Props) {
  console.log('Header in withData -------------->', headers);
  console.log('IS in withData -------------->', initialState);
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
    ]),
    cache: new InMemoryCache({}).restore(initialState || {}),
  });
};

export default withApollo(createClient, { getDataFromTree });