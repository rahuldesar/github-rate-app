import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textHeadingPrimary : '#fff',
    primary: '#24292e',
    primaryBackground: '#e1e4e8',
    secondaryBackground: 'white',
    primaryTagBackground : '#0366d6',
    primaryBorderColor: '#586069',

    
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    main: Platform.select({
      android : 'Roboto',
      ios : 'Ariel',
      default : 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;