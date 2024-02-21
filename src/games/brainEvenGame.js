import playGame from '../index.js';
import welcomeUser from '../cli.js';

function isEven(number) {
  return number % 2 === 0;
}

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const generateQuestionAndAnswer = () => {
  const number = generateRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default function playBrainEvenGame() {
  const name = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
  playGame(generateQuestionAndAnswer, isCorrectAnswer, name);
}
