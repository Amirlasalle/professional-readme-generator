// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter Project Title",
        name:"title"
    },
    {
        type:"input",
        message:"Enter Project Description",
        name:"Description"
    },
    {
        type:"input",
        message:"Contribrution guidelines",
        name:"Contributors"
    },
    {
        type:"list",
        message:"Description Contribution",
        choices:["MIT","ISC","APACHE 2.0","GPL 2.0","None"],
        name:"License"
    },
    {
        type:"input",
        message:"Enter Email",
        name:"Email"
    },
    {
        type:"input",
        message:"Enter Github Username",
        name:"Github"
    },
    {
        type:"input",
        message:"Enter Installation Instructions",
        name:"Installation"
    },
    {
        type:"input",
        message:"Enter Usage Information",
        name:"Usage"
    },
    {
        type:"input",
        message:"Enter Test Instructions",
        name:"Test"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data),function(err,data){
        if(err) throw err
    })
    console.log("README Generated")
}


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(response => {
        console.log(response)
         writeToFile("README.md",response)
    })
}

// Function call to initialize app
init();
