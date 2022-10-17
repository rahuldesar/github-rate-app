import { React } from 'react';
import { Platform , Text, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
  text: {
    color: Platform.select({
      android: 'green',
      ios: 'blue',
      default : 'black'
    })
  }
})

const WhatIsMyPlatform = () => {
  return (
    <View>
      <Text style = {styles.text}> Your Platform is : {Platform.OS}</Text>
      <Text style = {styles.text}> Platform Version: {Platform.Version}</Text>
      <Text style = {styles.text}> Platform Constants : {JSON.stringify(Platform.constants)}</Text>
    </View>
  )
};

const PlatformInfo = ()  => {
  return (
    <>
      <WhatIsMyPlatform />
    </>
  )
};

export default PlatformInfo;