import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 20,
  },
  container: {
    display: "flex",
    height: 235,
    borderRadius: 32,
    margin: 25,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#FFF",
    elevation: 3
  },
  booksList: {
    marginTop: 32,
    marginBottom: 32,
  },
  userInfo: {
    padding: 15,
    flexDirection:"row",
    alignItems:'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 100/2,
    backgroundColor: 'gray'
  },
  userName: {
    marginLeft: 20,
  },
  separation: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#C7CCCC',
    opacity: 0.25
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
  }
});
