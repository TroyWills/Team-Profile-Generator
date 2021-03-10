// Dependencies 
const inquirer = require("inquirer");
// const jest = require("jest");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee")

var teamMembers = [];

// User input for constructing team 
const questions = [
    {
        type: "input",
        name: "Name",
        message: "What is your team members name?",
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
function createTeam() {
    inquirer.prompt(questions).then(responses => {
        var newEmployee = responses;
        teamMembers.push(newEmployee);
        console.log(teamMembers);
        addEmployee();
    });
};

const newEmployee = [
        {
        type: "list",
        name: "addEmployee",
        message: "Do you have another team member to add?",
        choices: ["yes", "no"]
    }
]

 function addEmployee() {
     inquirer.prompt(newEmployee).then(responses => {
        
        if (responses.addEmployee === "yes") {
            createTeam();
        }
        else {
            // return; 
              // generate html page
        }
         
     });
 }

// Write data from user input to HTML 
function writeToFile(fileName, data) {
console.log(data);
};

createTeam();

