import { View ,StyleSheet, ScrollView } from "react-native";

import AppBarTab from "./AppBarTab";

import Constants from 'expo-constants';
import theme from "../theme";


const styles = StyleSheet.create({
  container : {
    paddingTop : Constants.statusBarHeight + 10,
    flexDirection: 'row',
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


const AppBar = () => {
  return (
    <View style={{...styles.container, ...styles.appBarTheme}}> 

      <ScrollView horizontal> 
        <AppBarTab styles={styles}/>
      </ScrollView>
      
    </View>
  );
};

export default AppBar;