// Dependencies 
const inquirer = require("inquirer");
// const jest = require("jest");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee");
var createHTML = require('create-html');

// var teamMembersHTML = JSON.stringify(teamMembers);
// console.log(teamMembers);

// User input for constructing team 
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your team members name?",
    },
    {
        type: "input",
        name: "eMail",
        message: "What is their e-mail address?",
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is their GitHub username?",
    },
];


// Initialize user input prompts in command line 
function createTeam() {
    inquirer.prompt(questions).then(responses => {


        var employeeName = JSON.stringify(responses.name);
        // console.log(employeeName);

        var employeeEmail = JSON.stringify(responses.eMail);
        // console.log(employeeEmail);

        var employeeGithub = JSON.stringify(responses.gitHub);
        // console.log(employeeGithub);

        const newEmployee = new Employee(employeeName, employeeEmail, employeeGithub);
        // console.log(newEmployee);
        teamMembers.push(newEmployee);
        console.log(teamMembers);
        addEmployee();
    });
};

var teamMembers = [];

const newEmployee = [
        {
        type: "list",
        name: "addEmployee",
        message: "Do you have another team member to add?",
        choices: ["yes", "no"]
    }
]

var html = createHTML({
    title: "team"
});


 function addEmployee() {
     inquirer.prompt(newEmployee).then(responses => {
        
        if (responses.addEmployee === "yes") {
            createTeam();
        }
        else {
            fs.writeFile("index.html", JSON.stringify(teamMembers), function (err) {
                if (err) console.log(error);
            });
        }
         
     });
 };


createTeam();



 


