// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let url;
    
    switch(license ) {
      case "Apache 2.0":
      url = " ![GitHub License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "GNU":
      url = " ![GitHub License](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "MIT":
      url = " ![GitHub License](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Creative Commons":
      url = " ![GitHub License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)";
      break;
    default:
      url = "";
      break;
    } 
    return url;
  
}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  var url = " ";
  switch(license) {
    case "Apache 2.0":
      url = "opensource.org/licenses/Apache2.0";
      break;
    case "GNU":
      url = "www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT":
      url = "opensource.org/licenses/MIT";
      break;
    case "Creative Commons":
      url = "creativecommons.org/publicdomain/zero/1.0/";
      break;
    default:
      url = "";
      break;
  }
  return url;
}

// TODO: Create a function to generate markdown for README

//Passing data in
generateMarkdown = (data) => {
//ternary to create the template, filling in with info generated from user through inquire responses
  return `# ${data.project}

 ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributors
  ${data.github}
  ${data.contributors}

  ## Tests

  ${data.tests}

  ## License

  [${data.license}](https://${renderLicenseLink(data.license)}

  ## Questions

  For further questions, contact here:
  * Email Address: ${data.email}
  * GitHub: [${data.github}](https://github.com/${data.github})

`;
}
// make this available
module.exports = generateMarkdown;
