import { FlatList, View, StyleSheet , Image } from 'react-native';
import Text from './Text';
import theme from '../theme';


const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },{
    id: 'jaredpalmer.formikaaa',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.railsaa',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.djangoaa',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.reduxaa',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];


const styles = StyleSheet.create({
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
})

const ItemSeparator = () => <View style={styles.separator} />;

const get1kcount = ( value )  => {
  return value > 1000? (value/1000).toFixed(1) + 'k' : value;
}

const RepositoryList = () => {

  const renderItem = ({ item }) => (
    <View style ={ styles.repoCard}>
      <View style={styles.flexContainer}>
        <Image source={{uri : item.ownerAvatarUrl}} style = {imageStyles.thumbnail} />
        <View style={{paddingLeft:15 , alignItems:'flex-start', ...styles.flexContainerCardContent }}>
          <Text fontSize='subheading' fontWeight='bold' style={{marginBottom : 5, fontFamily:'arial'}}>{item.fullName}</Text>
          <Text color='textSecondary' fonts='fontFamily' style={{marginBottom : 8}}>{item.description}</Text>
          <Text fonts='fontFamily' style={{...styles.languageStyle , marginBottom:5}}>{item.language}</Text>
        </View>
      </View>
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
    <View >
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        // other props
      />

    </View>
  );
};

export default RepositoryList;