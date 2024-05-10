// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    // ask the following questions: text, text color, shape color and shape
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, result) => {
        if (err) throw err
        console.log('readme created');
    })
}



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)



            // writeToFile('logo.svg', markdownData)


        })
}



// Function call to initialize app
init();
