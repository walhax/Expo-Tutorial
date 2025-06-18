import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },

  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttonIcon: {
    paddingRight: 8,
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },

  circleButtonContainer: {
  width: 84,
  height: 84,
  marginHorizontal: 60,
  borderWidth: 4,
  borderColor: '#ffd33d',
  borderRadius: 42,
  padding: 3,
  },

  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },

  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
