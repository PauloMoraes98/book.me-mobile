import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#09A8FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  logo: {
    width: 130,
  },
  logout: {
    width: 25,
  },
  body: {
    flex: 2,
    marginTop: 20,
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50,
    backgroundColor: '#ffffff',
  },
  photograph: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: '#D3D3D3',
  },
  textNameUser: {
    fontSize: 23,
    marginBottom: 10,
    fontWeight: "bold"
  },
  textEditProfile: {
    fontSize: 15,
    marginBottom: 5,
    color: "gray",
  },
  separation: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#C7CCCC',
    marginTop: 20,
    opacity: 0.15
  },
  content: {
    marginBottom: 10
  },
  textTitle: {
    fontSize: 15,
    marginBottom: 7,
    marginLeft: 30,
    fontWeight: "bold"
  },
  textContent: {
    fontSize: 15,
    marginBottom: 7,
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth : 1,
    borderColor: '#C7CCCC',
    color: '#A19F9F'
  },
  containerNameUser:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerEditProfile: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  city: {
    width: 290,
  },  
  uf:{
    width: 115
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
  bookIcon:{
    padding: 0,
    flexDirection:"column",
    alignItems:'stretch',
  },
  iconEdit: {
    marginLeft: 60,
  },
  iconDelete: {
    marginLeft: 60,
    marginTop: 30 
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
