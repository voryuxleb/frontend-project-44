import readlineSync from 'readline-sync';
export const playGame = () => {
    const welcomeMessage = 'Welcome to the Brain Games!';
    const questionText = 'May I have your name? ';
    console.log(welcomeMessage);
    let userName;
    do {
        userName = readlineSync.question(questionText);
        if (!userName.trim()) {
        console.log('Please enter your name. It can`t be empty.');
        }
    } while (!userName.trim());
    console.log(`Hello, ${userName}!`);

    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
    let correctAnswers = 0;

    while (correctAnswers < 3) {
        let number = Math.floor(Math.random() * 100) + 1;
    
        console.log(`Question: ${number}`);
        let userAnswer = readlineSync.question("Your answer: ").toLowerCase();
        let isEven = number % 2 === 0;
        let correctAnswer = isEven ? 'yes' : 'no';

        if (!['yes', 'no'].includes(userAnswer)) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
    
        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
    }

    if (correctAnswers === 3) {
        console.log(`Congratulations, ${userName}!`);
    }
};
