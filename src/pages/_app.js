import { ApolloProvider } from '@apollo/client';
import client from '../utils/client';
import '../styles/tailwind.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
