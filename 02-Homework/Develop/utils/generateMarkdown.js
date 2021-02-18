// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return " ";
  } else {
    return `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } 
}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  var url = " ";
  switch(license) {
    case "Apache 2.0":
      url = "https://opensource.org/licenses/Apache2.0";
      break;
    case "GNU":
      url = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      url = "https://opensource.org/licenses/MIT";
      break;
    case "Creative Commons":
      url = "(http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    default:
      url = "";
      break;
  }
  return url;
}



// TODO: Create a function to generate markdown for README
generateMarkdown = (data) => {
  `# ${data.project}

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

  [${data.license}]${renderLicenseLink(data.license)}

  ## Questions

  For further questions, contact here:
  * Email Address: ${data.email}
  * GitHub: [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
