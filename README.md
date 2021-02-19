# 09 NodeJS ReadMe Generator

 ## Description
 Command-line application that generates a readme file

* [Video Demo](https://drive.google.com/file/d/145KRJmRfO93xpeZmDs-C3Z6hPzuQG2GJ/view)
* [Sample ReadME generated from app](https://github.com/frank-merk/09-NodeJS-ReadMe-Generator/blob/main/newREADME.md)

## Overview

This application uses ES6, Node.js, inquirer, and fs to genrate a sample ReadMe from user input from the command line.

## Installation

To insall, first make sure you have the dependencies:

`npm install`

To run the application from the terminal, you will enter:

`node index.js`

## Strategy

My goal was to follow the template in the assignment module. Basically, generating functions to pull certain items like the license link and badge, and keeping the generate markdown file seperate and import it using modules.export. That helped keep me organized. Then, it was as simple as following some previous coding examples from in class work to set up my inquirer functions.

## Challenges

Because this was a command-line application, it was very difficult to test in the moment. It took about 2 hours of just creating variables and boilerplate markdown with ternary operators to get to a point where I could test that what I was doing was working. I hit a wall when I realized I failed to return anything from my main markdown function. Once that was resolved, I just had to clean up a few things.

## License

[Apache 2.0](https://opensource.org/licenses/Apache2.0)

## Questions

For further questions, contact here:
* Email Address: jlimhb@gmail.com
* GitHub: [frank-merk](https://github.com/frank-merk)
