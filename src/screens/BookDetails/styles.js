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
    marginRight: 140
  },
  body: {
    flex: 2,
    marginTop: 20,
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50,
    backgroundColor: '#ffffff',
  },
  containerNameBook:{
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  photograph: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 250,
    height: 200,
    borderRadius: 50,
    backgroundColor: '#D3D3D3',
  },
  containerEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  textEdit: {
    fontSize: 15,
    marginBottom: 5,
    color: "gray",
  },
  textNameBook: {
    fontSize: 23,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: "bold"
  },
  separation: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#C7CCCC',
    marginTop: 20,
    opacity: 0.15
  },
  textTitle: {
    fontSize: 23,
    marginBottom: 10,
    marginLeft: 15,
    fontWeight: "bold"
  },
  textContent: {
    fontSize: 15,
    marginBottom: 7,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'justify',
    lineHeight: 23,
    color: '#acb0ae'
  },
  formInputAvaliation:{
    marginTop: 5,
    marginRight: 15,
    alignItems: 'flex-end'
  },
  textBookIntention: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  bookValue: {
    fontSize: 20,
    marginLeft: 15,
    color: '#acb0ae',
    marginBottom: 10,
  },
  formButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  formButtons: {
    width: 130,
  },
  action: {
    backgroundColor: '#09A8FA',
    borderRadius: 100,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
