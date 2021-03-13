// Dependencies 
const inquirer = require("inquirer");
// const jest = require("jest");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee");
const generateTeam = require("./src/template")

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


        var employeeName = responses.name;
        // console.log(employeeName);

        var employeeEmail = responses.eMail;
        // console.log(employeeEmail);

        var employeeGithub = responses.gitHub;
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

function generateHTML(teamMembers) {
    // console.log(teamMembers);
    // loop through team members and return block of html that has name, email, github username
        for (let i = 0; i < teamMembers.length; i++) {
            document.getElementById
            const element = teamMembers[i];
            
         }
    // add string of html to boilerplate html (top of HTML -- user input -- closing tags)
    // top of html 
    // 
};

 function addEmployee() {
     inquirer.prompt(newEmployee).then(responses => {
        
        if (responses.addEmployee === "yes") {
            createTeam();
        }
        else {
            fs.writeFile("index.html", generateTeam(teamMembers), function (err) {
                if (err) console.log(error);
            });
        }
         
     });
 };


createTeam();