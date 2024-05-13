// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes')

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "list",
        name: "shape",
        message: "Would you like a circle, square, or triangle?",
        choices: ["circle", 'triangle', 'square']

    },
    {
        type: "input",
        name: "text",
        message: "What 3 letters would you like displayed?"

    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape?"

    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like your text?"

    },
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

            let userShape;

            if (answers.shape === 'circle') {
                userShape = new Circle(answers.text, answers.textColor, answers.shapeColor)

            } else if (answers.shape === 'square') {
                userShape = new Square(answers.text, answers.textColor, answers.shapeColor)

            }
            else {
                userShape = new Triangle(answers.text, answers.textColor, answers.shapeColor)

            }

            writeToFile('logo.svg', userShape.render())


        })
}



// Function call to initialize app
init();
