import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  DefaultOptions,
} from "@apollo/client";

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
    Post: {
      keyFields: ["postId"],
    },
    Category: {
      keyFields: false,
    },
  },
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-first",
  },
  query: {
    fetchPolicy: "cache-first",
  },
};

const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://blog.thnkandgrow.com/graphql";

const WORDPRESS_AUTH_TOKEN =
  process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN || "";

const httpLinkConfig = {
  uri: WORDPRESS_API_URL,
  headers: {
    ...(WORDPRESS_AUTH_TOKEN
      ? { Authorization: `Bearer ${WORDPRESS_AUTH_TOKEN}` }
      : {}),
    Origin: "https://dev01.thnkandgrow.com",
    Referer: "https://dev01.thnkandgrow.com",
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  },
};

export const ssrClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink(httpLinkConfig),
  cache: new InMemoryCache(),
  defaultOptions,
});

export const isrClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink(httpLinkConfig),
  cache,
  defaultOptions,
});

export default ssrClient;
