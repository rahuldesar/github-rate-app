import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
// import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor : theme.colors.primaryBackground,
    // // ! TODO . implement theme choose option . 
    // backgroundColor: '#000',    
  },
  // baseText: {
  //   // ! TODO . implement theme choose option . 
  //   color: 'white'
  // }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />


      {/* <Text>Simple text --- NO STYLES </Text>
      <Text style={{ paddingBottom: 10 }}>Text with custom style (paddingBottom: 10)</Text>
      <Text fontWeight="bold" fontSize="subheading">
        Bold subheading 
      </Text>
      <Text color="textSecondary">Text with secondary color</Text>
       */}
    </View>
  );
};

export default Main;