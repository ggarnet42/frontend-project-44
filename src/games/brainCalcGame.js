import playGame from '../index.js';
import welcomeUser from '../cli.js';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const operator = generateRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, operator, number2).toString();
  return { question, correctAnswer };
};

export default function playBrainCalcGame() {

  const name = welcomeUser();
  console.log('What is the result of the expression?');

  const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

  playGame(generateQuestionAndAnswer, isCorrectAnswer, name);
}
