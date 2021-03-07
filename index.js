// Dependencies 
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const path = require("path");

// User input for constructing team 
const questions = [
    {
        type: "input",
        name: "Name",
        message: "What is your team members name?",
    },
    {
        type: "input",
        name: "Title",
        message: "What is their title?",
    },
    {
        type: "input",
        name: "E-mail",
        message: "What is their e-mail address?",
    },
    {
        type: "input",
        name: "GitHub username?",
        message: "What is their GitHub username?",
    },
];

// Initialize user input prompts in command line 
function init() {
    inquirer.prompt(questions).then(responses => {
        writeToFile("index.html", generatedWebPage(responses))
    });
};

// Write data from user input to HTML 
function writeToFile(fileName, data) {

}

init();
