import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    // justifyContent: 'space-between',
    padding: 10,
  },
  lefContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
    backgroundColor: 'gray'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
    paddingLeft: 7
  },
  time: {
    fontSize: 16,
    color: 'grey',
    paddingRight: 5
  },
});

export default Style;