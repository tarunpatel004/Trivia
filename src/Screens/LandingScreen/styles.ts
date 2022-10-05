import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  textInput: {
    height: 48,
    paddingHorizontal: 12,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#bababa',
  },
  overallScoreBox: {
    padding: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 16,
    backgroundColor: '#bababa',
    borderWidth: 1,
    borderColor: 'black',
  },
  scoreText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
