import playGame from '../index.js';
import welcomeUser from '../cli.js';
import getRandomInRange from '../utils.js';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const operator = generateRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, operator, number2).toString();
  return { question, correctAnswer };
};

export default function playBrainCalcGame() {
  const name = welcomeUser();
  console.log('What is the result of the expression?');
  playGame(generateQuestionAndAnswer, name);
}
