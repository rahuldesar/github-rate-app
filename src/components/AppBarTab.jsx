import { Text, Pressable } from "react-native";
import { Link } from 'react-router-native';

const AppBarTab = ({styles})  => {

  return (
    <>
      
      <Pressable  > 
        <Link to="/">
          <Text style={styles.appBarTexts}> Repositories </Text>
        </Link> 
      </Pressable>
      
      <Pressable>
        <Link to="/signin">
          <Text style={styles.appBarTexts}> Sign in </Text>
        </Link>  
      </Pressable>
      
      <Pressable  > 
        <Link to="/platformInfo">
          <Text style={styles.appBarTexts}> PlatformInfo </Text>
        </Link> 
      </Pressable>

    </>
    
  )
}

export default AppBarTab;