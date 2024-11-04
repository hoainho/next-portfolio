import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;