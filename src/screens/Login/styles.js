import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#09A8FA',
  },
  header: {
    alignItems: 'center',
    marginTop: 100,
  },
  body: {
    marginTop: 120,
  },
  formLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderBottomWidth: 1
  },
  formPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderBottomWidth: 1
  },
  textTitle: {
    fontSize: 16,
    color: '#DDDDDD'
  },
  textPassword: {
    fontSize: 16,
    color: '#DDDDDD',
    marginTop: 40
  },
  textRememberPassword: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 30
  },
  RememberPassword: {
    alignItems: 'flex-end'
  },
  textInputUser: {
    height: 40, 
    width: 340,
    color: '#FFFFFF',
  },
  textInputPassword: {
    height: 40, 
    width: 340,
    color: '#FFFFFF',
  },
  action: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#09A8FA',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonEnter: {
    marginTop: 45
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20
  },
  textRegister: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 5
  },
});
