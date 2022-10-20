import { Text, Pressable } from "react-native";
import { Link } from 'react-router-native';
import { useQuery } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
import AuthStorage from "../utils/authStorage";

import { WHO_AM_I } from "../graphql/queries";


const AppBarTab = ({styles})  => {

  const apolloClient = useApolloClient();
  const { loading, error, data} = useQuery(WHO_AM_I);
  if(loading) return 'Loading User.';
  if(error) return `Error! ${error.message}`;
  
  console.log('💀 ~ file: AppBarTab.jsx ~ line 14 ~ AppBarTab ~ data', data)
  const authStorage = new AuthStorage();

  const handleSignOut =async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore();

  }



  return (
    <>
      
      <Pressable  > 
        <Link to="/">
          <Text style={styles.appBarTexts}> Repositories </Text>
        </Link> 
      </Pressable>
      
      {
        data.me? 
          <Pressable onPress={handleSignOut}>
            <Text style={styles.appBarTexts}> Sign OUT </Text>
          </Pressable>
        : <Pressable>
          <Link to="/signin">
            <Text style={styles.appBarTexts}> Sign IN </Text>
          </Link>  
          </Pressable>
      }
      <Pressable  > 
        <Link to="/platformInfo">
          <Text style={styles.appBarTexts}> PlatformInfo </Text>
        </Link> 
      </Pressable>

    </>
    
  )
}

export default AppBarTab;