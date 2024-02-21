import playGame from '../index.js';
import welcomeUser from '../cli.js';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  
const generateQuestionAndAnswer = () => {
  const number = generateRandomNumber();
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};
  
export default function playBrainPrimeGame() {
  const name = welcomeUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
  playGame(generateQuestionAndAnswer, isCorrectAnswer, name);
}
