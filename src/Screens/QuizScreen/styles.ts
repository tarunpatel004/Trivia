import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
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
  questionText: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  answerParentView: {
    marginTop: 20,
    flex: 1,
  },
  answerInputBox: {
    height: 48,
    paddingHorizontal: 12,
    width: '100%',
    marginTop: 4,
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#bababa',
  },
  correctAnswerInputBox: {
    backgroundColor: 'green',
  },
  inCorrectAnswerInputBox: {
    backgroundColor: 'red',
  },
});

export default styles;
