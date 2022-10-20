import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';
import { FlatList, View, StyleSheet , Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container : {
    marginBottom: 100,
  },
  listBody:{
    backgroundColor: theme.colors.primaryBackground,
  },
  separator: {
    height: 10,
  },
  flexContainer: {
    flexDirection: 'row',
  },
  flexContainerCardContent : {
    flexDirection: 'column',
    flexShrink: 1,
    flexGrow:1,
  }, 
  repoCard: {
    backgroundColor: theme.colors.secondaryBackground,
    padding:15,
    margin: 7,
    borderRadius: 10,
  },
  languageStyle: {
    backgroundColor: theme.colors.primaryTagBackground,
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 7,
  },

  //! DONT THINK I WILL USE THIS/.
  showBorder:{
    borderColor: 'red',
    border:1,
    borderBottomWidth:1,
    borderTopWidth:1,
  }

});

const imageStyles = StyleSheet.create({
  thumbnail: {
    borderRadius: 10,
    height: 80,
    width: 80
  }
})

const cardFooterStyles = StyleSheet.create({
  cardFooterFlexContainer : { 
    display :'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cardCounterWrapper: {
    alignItems: 'center',
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const get1kcount = ( value )  => {
  return value > 1000? (value/1000).toFixed(1) + 'k' : value;
}


const RepositoryList = () => {
  // eslint-disable-next-line no-unused-vars
  const [repositories, setRepositories] = useState();
  // eslint-disable-next-line no-unused-vars
  const {data, error, loading } =  useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if(loading) {
    return (
      <Text> Loading Data</Text>
    )
  }


  // Get the nodes from the edges array
  const repositoryNodes = data
  ? data.repositories.edges.map(edge => edge.node)
  : [];

  const renderItem = ({ item }) => (
    <View style ={ styles.repoCard}>

      {/*  Display Project image, Project Name, Project Description and Language used */}
      <View style={styles.flexContainer}>
        <Image source={{uri : item.ownerAvatarUrl}} style = {imageStyles.thumbnail} />
        <View style={{paddingLeft:15 , alignItems:'flex-start', ...styles.flexContainerCardContent }}>
          <Text fontSize='subheading' fontWeight='bold' style={{marginBottom : 5, fontFamily:'arial'}}>{item.fullName}</Text>
          <Text color='textSecondary' fonts='fontFamily' style={{marginBottom : 8}}>{item.description}</Text>
          <Text fonts='fontFamily' style={{...styles.languageStyle , marginBottom:5}}>{item.language}</Text>
        </View>
      </View>

      {/*  Display counts for Stars, Forks, Reviews adnd Rating*/}
      <View style={{...cardFooterStyles.cardFooterFlexContainer, marginTop: 20}}> 
        <View style={cardFooterStyles.cardCounterWrapper}>
          <Text fontWeight='bold'>{get1kcount(item.stargazersCount)}</Text>
          <Text color='textSecondary'> Stars </Text>
        </View>
        <View style={cardFooterStyles.cardCounterWrapper}>
          <Text fontWeight='bold'>{get1kcount(item.forksCount)}</Text>
          <Text color='textSecondary'> Forks </Text>
        </View>
        <View style={cardFooterStyles.cardCounterWrapper}>
          <Text fontWeight='bold'>{get1kcount(item.reviewCount)}</Text>
          <Text color='textSecondary'> Reviews </Text>
        </View>
        <View style={cardFooterStyles.cardCounterWrapper}>
          <Text fontWeight='bold'>{get1kcount(item.ratingAverage)}</Text>
          <Text color='textSecondary'> Rating </Text>
        </View>
      </View>

    </View>
  );

  return (
    <View style={styles.container} >
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        />
    </View>
  );

};

export default RepositoryList;