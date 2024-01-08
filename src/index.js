import readlineSync from 'readline-sync';

export default function playGame(generateQuestionAndAnswer, isCorrectAnswer, name) {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const { question, correctAnswer } = generateQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isCorrectAnswer(userAnswer, correctAnswer)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
