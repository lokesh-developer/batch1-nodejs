// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function calculate(num1, operator, num2) {
//     switch(operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//         default:
//             return 'Invalid operator';
//     }
// }

// console.log('Simple Calculator');
// console.log('Available operations: +, -, *, /');

// function getInput() {
//     rl.question('Enter first number: ', (num1) => {
//         rl.question('Enter operator (+, -, *, /): ', (operator) => {
//             rl.question('Enter second number: ', (num2) => {
//                 const result = calculate(parseFloat(num1), operator, parseFloat(num2));
//                 console.log(`Result: ${result}`);
                
//                 rl.question('Do you want to calculate again? (yes/no): ', (answer) => {
//                     if (answer.toLowerCase() === 'yes') {
//                         getInput();
//                     } else {
//                         rl.close();
//                     }
//                 });
//             });
//         });
//     });
// }

// getInput();

// rl.on('close', () => {
//     console.log('Calculator closed. Goodbye!');
//     process.exit(0);
// });

const express = require('express');
const app = express();
const routes = require('./route');
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const bcrypt = require('bcrypt');

// Function to generate hash
const generateHash = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

// Example usage to generate hash for "12345678"
(async () => {
    const hash = await generateHash("12345678");
    console.log('Hash for password "12345678":', hash);
})();