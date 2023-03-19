import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 15,
    backgroundColor: '#bb71b1',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#bb71b1',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    padding: 7,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    padding: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#a182c4",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
  },
  buttonText: {
    color:"#ffffff",
    fontSize: 20,
  },
  points: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    textAlign: 'center'
  },
  dicepoints: {
    flexDirection: 'row',
    width: 280,
    alignContent: 'center'
  },
  home: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
});