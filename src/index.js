import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

export default function playGame(description, generateQuestionAndAnswer) {
  const name = welcomeUser();
  console.log(description);

  for (let correctAnswersCount = 0; correctAnswersCount < 3;) {
    const { question, correctAnswer } = generateQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
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
