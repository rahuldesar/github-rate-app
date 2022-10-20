import { useApolloClient, useMutation } from '@apollo/client';
import { LOGIN } from '../src/graphql/mutations';

import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const [ mutate, result ] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });
  
  const authStorage = useAuthStorage();
  console.log('💀 ~ file: useSignIn.js ~ line 13 ~ useSignIn ~ authStorage', authStorage);
  
  const signIn= async( value ) => {    
    const credentials= value; 
    const { data } = await mutate({variables: { credentials }});
    console.log('💀 ~ file: useSignIn.js ~ line 19 ~ signIn ~ data', data)
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return data;
    
  }

  return [signIn, result];
}

export default useSignIn;