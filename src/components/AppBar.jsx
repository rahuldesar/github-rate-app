import { View ,Pressable ,Text ,StyleSheet, Alert } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";

const styles = StyleSheet.create({
  container : {
    paddingTop : Constants.statusBarHeight + 10,
  },
  appBarTheme : {
    backgroundColor: theme.colors.primary,
    paddingBottom:10,
  },
  appBarTexts: {
    fontWeight: theme.fontWeights.bold,
    fontSize : theme.fontSizes.heading,
    color : theme.colors.textHeadingPrimary,
  }

})

const handleGoToRepo = ()  => {
  Alert.alert('YOU PRESSED REPO');
}

const AppBar = () => {
  return <View style={{...styles.container, ...styles.appBarTheme}}> 
    <Pressable  onPress={handleGoToRepo}> 
      <Text style={styles.appBarTexts}> Repositories </Text>
    </Pressable>
  </View>
}

export default AppBar;