// declare empty string variable called userName
let userName = 'Luka';
// use a ternary expression to decide the cause of action
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
// declare new variable userQuestion
const userQuestion = 'Will I eat tonight';
// print the userQuestion to the console
console.log(userQuestion);
// Generate random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber);
// declare a new variable called eightBall and set it to an empty string
let eightBall = '';
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4: 
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6: 
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  default:
  eightBall = 'Ask me later';
  break;
}

// print Eight Ball's response to the console
console.log(eightBall);


