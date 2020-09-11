import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  header: {
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
  textInputUf: {
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
  containerMap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 5,
    elevation: 4
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapMarker: {
    width: 90,
    height: 80,
  },
  mapMarkerContainer: {
    borderRadius: 8,
    width: 90,
    height: 70,
    backgroundColor: "#09A8FA",
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  },
  mapMarkerTitle: {
    padding: 3,
    flex: 1,
    color: "#FFF",
    fontSize: 13,
    lineHeight: 23,
    alignItems: "center",
  },
  callout: {
    width: 260,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  photograph: {
    marginTop: 10
  }
});
