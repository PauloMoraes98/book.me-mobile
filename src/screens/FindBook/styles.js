import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 20,
    marginBottom: 15
  },
  container: {
    flex: 1,
    paddingHorizontal: 6,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
  },
  textInputCity: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#bde7fc',
    color: '#09A8FA',
    height: 40,
    margin: 6,
    padding: 6,
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    backgroundColor: '#09A8FA',
    elevation: 10,
    borderRadius: 50
  },
  body: {
    marginTop: 20
  },
  bookInfo: {
    padding: 20,
    flexDirection:"row",
    alignItems:'center',
  },
  bookImage: {
    width: 80,
    height: 100,
    backgroundColor: 'gray'
  },
  bookTextInfos: {
    marginLeft: 10,
  },
  bookValue: {
    color: '#acb0ae'
  },
  containerBook: {
    display: "flex",
    height: 140,
    borderRadius: 32,
    margin: 25,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#FFF",
    elevation: 3
  },
});
