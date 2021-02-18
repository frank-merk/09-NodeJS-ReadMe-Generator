// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("utils/generateMarkdown.js")

// Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'project',
          message: 'What is your project title?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Briefly describe what your project is and what it does'
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What installations are required for your project?'
        },
        {
          type: 'input',
          name: 'usage',
          message: 'How does one use your project?'
        },
        {
          type: 'input',
          name: 'contributors',
          message: 'Please list other contributors to this project if there are any.'
        },
        {
          type: 'input',
          name: 'tests',
          message: 'How does one run tests on this project?'
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What type of license does this project have?',
            choices: ['Apache 2.0', 'GNU General Public License v3.0', 'MIT']
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
          },
      ];
// ask the questions, then feed that data into a generate markdown function that creates newReadMe
inquirer prompt(questions).then((data) => {
    const newReadMe = generateMarkdown(data);

    // Create a function to write README file
    // Take what we are storing in newReadMe and write it. If there's an error, return the error, if not alert the console the file was written successfully
    fs.writeFile('README.md', newReadMe, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
})



// TODO: Create a function to initialize app (don't think i need this with inquirer)
// function init() {}

// Function call to initialize app
//init();

