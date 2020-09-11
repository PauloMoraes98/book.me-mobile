import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  containerView: {
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    justifyContent: "center",
  },
  photograph: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: '#D3D3D3',
  },
  textInput: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth : 1,
    borderColor: '#09A8FA',
    color: '#09A8FA',
  },
  textTitle: {
    fontSize: 13,
    marginBottom: 7,
    color: '#A19F9F'
  },
  formInput: {
    marginBottom: 15
  },
  formInputLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formInputCity: {
    width: 290
  },
  formInputState: {
    width: 50
  },
  formButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70
    
  },
  formButtonBack: {
    width: 130
  },
  formButtonRegister: {
    width: 130
  },
  actionBack: {
    backgroundColor: '#C0B3B3',
    borderRadius: 100,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  actionRegister: {
    backgroundColor: '#09A8FA',
    borderRadius: 100,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  actionTextBack: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  actionTextRegister: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
