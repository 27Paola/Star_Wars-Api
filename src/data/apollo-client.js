import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  url: "https://graphql.org/swapi-graphql/",
});

const errorLink = new onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[Error en GraphQl]
            Message: ${message}
            Locations: ${locations}
            path: ${path}`);
    });
  }
  if (networkError) {
    console.error(`[NetWork Error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
