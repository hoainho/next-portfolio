import { ApolloClient, InMemoryCache, HttpLink, DefaultOptions } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        categories: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
};

// Create a client for SSR
export const ssrClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`,
      Origin: "https://dev01.thnkandgrow.com",
      Referer: "https://dev01.thnkandgrow.com",
      "Content-Type": "application/json",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
  }),
  cache: new InMemoryCache(),
  defaultOptions,
});

// Create a client for ISR
export const isrClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`,
      Origin: "https://dev01.thnkandgrow.com",
      Referer: "https://dev01.thnkandgrow.com",
      "Content-Type": "application/json",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
  }),
  cache,
});

// Default export for backward compatibility
export default ssrClient;
