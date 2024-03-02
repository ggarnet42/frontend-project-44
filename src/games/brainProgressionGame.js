import playGame from '../index.js';
import welcomeUser from '../cli.js';
import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return { progression, hiddenIndex, hiddenValue };
};

const generateQuestionAndAnswer = () => {
  const start = getRandomInRange();
  const step = getRandomInRange();
  const length = Math.floor(Math.random() * 6) + 5;
  const { progression, hiddenValue } = generateProgression(start, step, length);
  const question = progression.join(' ');
  const correctAnswer = String(hiddenValue);

  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export default function playBrainProgressionGame() {
  playGame(description, generateQuestionAndAnswer);
}
