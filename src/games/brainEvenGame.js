import readlineSync from 'readline-sync';
import welcomeUser from '../cli.js';

function isEven(number) {
  return number % 2 === 0;
}

export default function playBrainEvenGame() {
  const name = welcomeUser();

  process.stdout.write('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const questionNumber = Math.floor(Math.random() * 20) + 1;
    const isQuestionEven = isEven(questionNumber);
    const correctAnswer = isQuestionEven ? 'yes' : 'no';

    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer:').toLowerCase();

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
