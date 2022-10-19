import { useMutation } from '@apollo/client';
import { LOGIN } from '../src/graphql/mutations';
import { useEffect } from 'react';

const useSignIn = () => {
  const [ mutate, result ] = useMutation(LOGIN, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    }
  });

  useEffect(() => {
    if(result.data) {
    console.log('💀 ~ file: useSignIn.js ~ line 14 ~ useEffect ~ result.data', result.data)
    }
  }, [result.data]);

  const signIn= async( value ) => {    
    const credentials= value; 
    console.log('💀 ~ file: useSignIn.js ~ line 13 ~ signIn ~ credentials', credentials)
    return await mutate({variables: { credentials }});
  }

  return [signIn, result];
}

export default useSignIn;