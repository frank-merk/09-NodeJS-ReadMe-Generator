// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require('./utils/generateMarkdown');

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
        name: 'license',
        message: 'What type of license does this project have?',
        choices: ['Apache 2.0', 'GNU', 'MIT', 'Creative Commons', 'None']
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

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! ReadMe Written')
    );
}


function init(prompts) {
    inquirer.prompt(prompts)
        .then((answers) => {
   // Create a function to write README file
        // Take what we are storing in newReadMe and write it. If there's an error, return the error, if not alert the console the file was written successfully
            const newFile = markdown(answers)
            writeToFile("newREADME.md", newFile)
        })

}

init(questions);