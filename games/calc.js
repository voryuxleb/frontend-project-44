import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
};
const calculate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            throw new Error('Invalid operator');
    }
};
export const generateQuestion = () => {
    const userName = greetUser();
    const rounds = 3;
    let currentRound = 1;
    let isWinner = true;

    while (currentRound <= rounds && isWinner) {
        const num1 = getRandomInt(1, 100);
        const num2 = getRandomInt(1, 100);
        const operator = getRandomOperator();
        const correctAnswer = calculate(num1, num2, operator);

        console.log(`Question: ${num1} ${operator} ${num2}`);
        
        const userAnswer = readlineSync.question('Your answer: ');
        if (parseInt(userAnswer) === correctAnswer) {
            console.log('Correct!');
            currentRound++;
        } else {
            isWinner = false;
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        }
    }
    if (isWinner) {
        console.log(`Congratulations, ${userName}!`);
    } else {
        console.log(`Let's try again, ${userName}!`);
    }
};