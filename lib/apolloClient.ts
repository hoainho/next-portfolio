import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`,
    Origin: "https://dev01.thnkandgrow.com",
    Referer: "https://dev01.thnkandgrow.com",
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Dest": "empty",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
  },
  // link: new HttpLink({
  //   uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  //   headers: {
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN}`,
  //     Origin: 'https://dev01.thnkandgrow.com',
  //     Referer: 'https://dev01.thnkandgrow.com',
  //     'Content-Type': 'application/json',
  //     'User-Agent':
  //       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  //     'Sec-Fetch-Mode': 'cors',
  //     'Sec-Fetch-Site': 'same-site',
  //     'Sec-Fetch-Dest': 'empty',
  //     'Accept-Encoding': 'gzip, deflate, br',
  //     'Accept-Language': 'en-US,en;q=0.9',
  //     Connection: 'keep-alive',
  //     Accept: '*/*',
  //   },
  // }),
  cache: new InMemoryCache(),
});

export default client;
