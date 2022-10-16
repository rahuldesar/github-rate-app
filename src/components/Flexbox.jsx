import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
  },
  flexItemA: {
    backgroundColor: 'green',
  },
  flexItemB: {
    backgroundColor: 'blue',
  },
});

const FlexboxExample = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
        <Text>y oyo </Text>
      </View>
      <View style={styles.flexItemB}>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perspiciatis maxime quam accusamus voluptate tempore nemo omnis soluta modi provident laborum saepe ea aliquam alias in, nulla consectetur inventore, nihil fugiat asperiores quod cumque. Minus optio iure pariatur recusandae facere cupiditate molestias voluptates, velit voluptate fugit cumque consectetur commodi. Ipsam?</Text>
      </View>
    </View>
  );
};

export default FlexboxExample;