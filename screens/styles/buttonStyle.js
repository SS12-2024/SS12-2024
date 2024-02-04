import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export const buttonStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1F1A38',
  },
  levelContainer: {
    flex: 1,
    alignItems: 'column',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1A38',
  },
  fullScreenButton: {
    display: 'flex',
    height: screenHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1F1A38', // Dark purple
  },
  buttonText: {
    color: 'white',
    fontSize:100,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  menuContainer:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1F1A38',
  },
});
