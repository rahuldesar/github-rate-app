import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

// ? Constants.manifest gets data from app.config.js which get environment variables from env file.
const  apolloUri = Constants.manifest.extra.apollo_uri;

const httpLink = createHttpLink ({
  uri : apolloUri,
});

const createApolloClient = ( authStorage ) => {
  const authLink = setContext( async (_, { headers }) => {
    try{
      const accessToken = await authStorage.getAccessToken();
      console.log('💀 ~ file: apolloClient.js ~ line 16 ~ authLink ~ accessToken', accessToken)
      return {
        headers: {
          ...headers, 
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return{
        headers,
      };
    }
  });

  return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
  })
};

export default createApolloClient;