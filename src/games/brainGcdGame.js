import playGame from '../index.js';
import welcomeUser from '../cli.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGcd(number1, number2));
  return { question, correctAnswer };
};

export default function playBrainGcdGame() {

  const name = welcomeUser();
  console.log('Find the greatest common divisor of given numbers.');

  const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

  playGame(generateQuestionAndAnswer, isCorrectAnswer, name);
}
