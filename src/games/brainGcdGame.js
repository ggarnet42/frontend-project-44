import playGame from '../index.js';
import welcomeUser from '../cli.js';
import getRandomInRange from '../utils.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateQuestionAndAnswer = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGcd(number1, number2));
  return { question, correctAnswer };
};

export default function playBrainGcdGame() {
  const name = welcomeUser();
  console.log('Find the greatest common divisor of given numbers.');
  playGame(generateQuestionAndAnswer, name);
}
