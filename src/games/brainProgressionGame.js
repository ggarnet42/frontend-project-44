import playGame from '../index.js';
import welcomeUser from '../cli.js';

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const generateProgression = () => {
  const progression = [];
  const length = Math.floor(Math.random() * 6) + 5;
  const firstNumber = generateRandomNumber();
  const step = generateRandomNumber();
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + i * step);
  }
  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return {progression, hiddenIndex, hiddenValue};
};

const generateQuestionAndAnswer = () => {
  const {progression, hiddenValue} = generateProgression();
  const question = progression.join(' ');
  const correctAnswer = String(hiddenValue);
  return { question, correctAnswer };
};

export default function playBrainProgressionGame() {
  const name = welcomeUser();
  console.log('What number is missing in the progression?');
  const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
  playGame(generateQuestionAndAnswer, isCorrectAnswer, name);
}
