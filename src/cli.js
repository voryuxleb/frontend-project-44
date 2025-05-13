import readlineSync from 'readline-sync';
export const greetUser = () => {
  const welcomeMessage = 'Welcome to the Brain Games!';
  const questionText = 'May I have your name? ';
  let userName;
  console.log(welcomeMessage);
  do {
    userName = readlineSync.question(questionText);
    if (!userName.trim()) {
      console.log('Please enter your name. It can`t be empty.');
    }
  } while (!userName.trim());
  console.log(`Hello, ${userName}!`);
  return userName;
};
