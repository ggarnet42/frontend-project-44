import playGame from '../index.js';
import welcomeUser from '../cli.js';
import getRandomInRange from '../utils.js';

function isEven(number) {
  return number % 2 === 0;
}

const generateQuestionAndAnswer = () => {
  const number = getRandomInRange();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function playBrainEvenGame() {
  playGame(description, generateQuestionAndAnswer);
}
